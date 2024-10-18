import { supabase } from "@/backend/client.js";
import { FormSchema } from "@/schema";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

export async function onSubmit(data: z.infer<typeof FormSchema>) {
  console.log(data);
  async function authenticateAdmin(email: any, password: any) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });


    if (error) {
      console.error("Authentication error:", error);
      return null;
    }

    return data; // Return the authenticated admin user data
  }

  // Usage
  (async () => {
    const adminUser = await authenticateAdmin(data.email, data.password);

    if (adminUser) {
      console.log("Admin authenticated:", adminUser);
      window.location.replace("/dashboard");
    } else {
      console.log("Invalid credentials");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Invalid credentials. Please try again.",
        duration: 3000, // Duration in milliseconds (optional)
      });
    }
  })();
}
