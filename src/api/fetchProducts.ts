import { supabase } from "@/backend/client";
export async function fetchProducts(count: number) {
  const { data, error } = await supabase.from("products").select("*").limit(count);
  if (error) {
    throw error;
  }
  return data;
}
