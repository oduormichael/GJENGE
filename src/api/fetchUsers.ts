import { supabase } from '@/backend/client';
export async function fetchUsers() {
    const {data} = await supabase.from('users').select('*');
    return data;
}

export async function fetchUser(id) {
    const {data} = await supabase.from('users').select('*').eq('user_id', id);
    return data;
}