import { supabase } from "./supaBaseClient"; // tu cliente ya configurado

export async function callAI(chatId: string, prompt: string) {
  const { data, error } = await supabase.functions.invoke("ai-reply", {
    body: { chatId, prompt },
  });
  if (error) throw error;            // 401, 403, 500, etc.
  return data as { text: string };   // la función también devuelve el texto (opcional)
}
