import { supabase } from "@/backend/client";
export async function fetchFeedback() {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    throw error;
  }
  return data;
}
