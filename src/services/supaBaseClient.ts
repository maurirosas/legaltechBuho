import {createClient} from "@supabase/supabase-js";

// Valores por defecto si no existen las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_PROJECT_CLIENTID || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
