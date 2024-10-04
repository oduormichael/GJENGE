"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import {supabase} from "@/backend/client.js"

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
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

// Update the schema to include email and password
const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(4, {
    message: "Password must be at least 6 characters.",
  }),
});

export function FormComponent() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
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
        window.location.replace("/dashboard")
      } else {
        console.log("Invalid credentials");
      }
    })();


  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
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
                <Input type="password" placeholder="Your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
