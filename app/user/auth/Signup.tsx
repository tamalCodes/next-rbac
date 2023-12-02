"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(4, { message: "Password must be atleast 4 characters" })
    .max(50),
  firstName: z
    .string()
    .min(2, { message: "First name must be atleast 2 characters" })
    .max(50),
  lastName: z
    .string()
    .min(2, { message: "Last name must be atleast 2 characters" })
    .max(50),
  role: z.enum(["user", "admin"]),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "user",
    },
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: handleSignup, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      const response = await axios.post("/api/user/signup", data);
      return response.data;
    },

    onSuccess: (data) => {
      if (data.status !== 201) {
        toast({
          title: "Error",
          description: data.message || "An error occurred",
          variant: "destructive",
        });
      } else {
        queryClient.setQueryData(["user"], data);
        toast({
          title: "Success",
          description: "Signed up successfully",
          variant: "default",
        });
        router.push("/");
      }
    },

    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "An error occurred",
        variant: "destructive",
      });
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          handleSignup(data);
        })}
        className="space-y-8 desktop:w-[80%] font-poppins"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="123@email.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="bg-transparent ml-4 text border-zinc-800 border-solid border-2 rounded-md  "
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          SignUp
        </Button>
      </form>
    </Form>
  );
}
