import { supabase } from '@/backend/client';
export async function fetchUsers() {
    const {data} = await supabase.from('users').select('*');
    return data;
}