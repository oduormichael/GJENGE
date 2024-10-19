import { supabase } from "@/backend/client";
export async function fetchSales() {
  const { data, error } = await supabase.from("sales").select("*");
  if (error) {
    throw error;
  }
  return data;
}
