import { supabase } from '@/backend/client';
export async function fetchOrders() {
    const { data, error } = await supabase.from('orders').select('*');
    if (error) {
        throw error;
    }
    return data;
}