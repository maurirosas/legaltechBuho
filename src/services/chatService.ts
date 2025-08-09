import { supabase } from "./supaBaseClient";

// devuelve el chat más reciente del user o crea uno
export async function ensureChat(userId: string) {
  const { data: chats, error } = await supabase
    .from("ai_chats")
    .select("id")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) throw error;
  if (chats?.length) return chats[0].id;

  const { data, error: createErr } = await supabase
    .from("ai_chats")
    .insert({ user_id: userId, title: "Nueva conversación" })
    .select("id")
    .single();

  if (createErr) throw createErr;
  return data.id;
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

  return () => supabase.removeChannel(channel);
}

export async function sendUserMessage(
  chatId: string,
  userId: string,
  text: string
) {
  const { error } = await supabase.from("ai_messages").insert({
    chat_id: chatId,
    sender: "user",
    content: text,
    metadata: null,
  });
  if (error) throw error;
}

// cuando conectes tu backend/IA, guarda la respuesta aquí
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
