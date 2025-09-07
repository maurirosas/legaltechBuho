import {supabase} from "./supaBaseClient";

export async function callAI(chatId: string, prompt: string) {
    const {data, error} = await supabase.functions.invoke("ai-reply", {
        body: {chatId, prompt},
    });
    if (error) throw error;
    return data as { text: string };
}
