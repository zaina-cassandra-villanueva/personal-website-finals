import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gsiuvidzwlqyvqsuemsv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaXV2aWR6d2xxeXZxc3VlbXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4Mzg3OTksImV4cCI6MjA4NDQxNDc5OX0.bjIxUbEtTTtWWc59843jKXH_Bp2fk891-yJMpZwk6Wc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);