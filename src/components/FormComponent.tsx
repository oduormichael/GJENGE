"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { supabase } from "@/backend/client.js";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/Toaster";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { timeEnd } from "console";

// Update the schema to include email and password
const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

export function FormComponent() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    async function authenticateAdmin(email: any, password: any) {
      const { data, error } = await supabase
        .from("admin")
        .select("*")
        .eq("email", email)
        .eq("password", password) // Note: It's recommended to store hashed passwords and use a secure method for authentication.
        .single(); // Fetch a single row

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

  return (
    <Form {...form} className="w-max">
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-max space-y-6">
        <h1 className="text-4xl font-bold leading-10">Administrator Sign-In</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  {...field}
                  className="h-11 px-5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Your password"
                  {...field}
                  className="h-11 px-5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-11">
          Submit
        </Button>
      </form>
    </Form>
  );
}