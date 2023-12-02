"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(4, { message: "Password must be atleast 4 characters" })
    .max(50),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      const response = await axios.post("/api/user/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.status !== 200) {
        toast({
          title: "Error",
          description: data.message || "An error occurred",
          variant: "destructive",
        });
      } else {
        queryClient.setQueryData(["user"], data);
        // queryClient.invalidateQueries({ queryKey: ["user"] });
        toast({
          title: "Success",
          description: "Logged in successfully",
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
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(form.getValues());
        }}
        className="space-y-8 desktop:w-[80%] font-poppins"
      >
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
        <Button type="submit" disabled={isPending}>
          Login
        </Button>
      </form>
    </Form>
  );
}
