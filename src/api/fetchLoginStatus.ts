import {supabase} from "@/backend/client"

export async function fetchLoginStatus() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting session:", error.message);
    }
    if(data.session === null) {
        window.location.href = "/";
    }
}