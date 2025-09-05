import { supabase } from "./supaBaseClient";

export async function createNewChat(userId: string) {
    const now = new Date();
    const date = now.toLocaleDateString("es-BO", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const time = now.toLocaleTimeString("es-BO", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const title = `Conversación - ${date} ${time}`;

    const { data, error } = await supabase
        .from("ai_chats")
        .insert({ user_id: userId, title })
        .select("id, title")
        .single();

    if (error) throw error;
    return data;
}

export async function fetchMessages(chatId: string, limit = 100) {
    const { data, error } = await supabase
        .from("ai_messages")
        .select("id, sender, content, created_at")
        .eq("chat_id", chatId)
        .order("created_at", { ascending: true })
        .limit(limit);

    if (error) throw error;
    return data ?? [];
}

// realtime: nuevos mensajes del chat
export function subscribeMessages(
    chatId: string,
    onInsert: (row: any) => void
) {
    const channel = supabase
        .channel(`chat:${chatId}`)
        .on(
            "postgres_changes",
            {
                event: "INSERT",
                schema: "public",
                table: "ai_messages",
                filter: `chat_id=eq.${chatId}`,
            },
            (payload) => onInsert(payload.new)
        )
        .subscribe();
    console.log("Channel state after subscribe:", channel.state); // Depuración
    return () => supabase.removeChannel(channel);
}

export async function sendUserMessage(
    chatId: string,
    text: string,
    clientId: string
) {
    const { error } = await supabase.from("ai_messages").insert({
        chat_id: chatId,
        sender: "user",
        content: text,
        metadata: { client_id: clientId }
    });
    if (error) throw error;
}

// TODO: guardar la respuesta aquí para un futuro backend
export async function sendAssistantMessage(
    chatId: string,
    text: string,
    metadata?: any
) {
    const { error } = await supabase.from("ai_messages").insert({
        chat_id: chatId,
        sender: "assistant",
        content: text,
        metadata: metadata ?? null,
    });
    if (error) throw error;
}

export async function getChatsByUser(userId: string) {
    const { data, error } = await supabase
        .from("ai_chats")
        .select("id, title, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data ?? [];
}