import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Supabase ENV missing!", {
    VITE_SUPABASE_URL: supabaseUrl,
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? "(present)" : "(missing)",
  });
  throw new Error("Supabase ENV missing. Check .env and restart npm run dev.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);