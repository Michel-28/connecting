import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ywhpcbgcfwpyrkanhpnj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aHBjYmdjZndweXJrYW5ocG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MTMyMzYsImV4cCI6MjA4OTk4OTIzNn0.TDQnCbUqmZJCSbmZG6Zn7Fnlggv3DaEXk4hW4YG1nm4";

export const supabase = createClient(supabaseUrl, supabaseKey);