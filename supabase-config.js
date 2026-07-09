// Fill these in from your Supabase project settings (Project Settings > API).
// The anon/public key is safe to expose in client-side code — access to real
// data is controlled by Row Level Security policies on the database, not by
// hiding this key.

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL"; // e.g. https://abcxyz.supabase.co
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
