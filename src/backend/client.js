import { createClient } from "@supabase/supabase-js";

const project_url = import.meta.env.SUPABASE_PROJECT_URL;
const anon_key = import.meta.env.SUPABASE_ANON_KEY;

const supabase = createClient(project_url, anon_key);