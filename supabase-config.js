// Supabase project connection for 677 ATC.
// The anon/public key is safe to expose in client-side code — access to real
// data is controlled by Row Level Security policies on the database, not by
// hiding this key. Never put the service_role key here or anywhere in this repo.

const SUPABASE_URL = "https://onpwargusptxvmuxivel.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ucHdhcmd1c3B0eHZtdXhpdmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MTk4MjEsImV4cCI6MjA5OTA5NTgyMX0.p-wtHlPxJqVaM5-wx6aKqGT7aihE9AUEljOUHovgGJg";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
