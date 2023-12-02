"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Cards from "@/components/ui/Cards";
import { useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { checkAuth } from "./(user)/auth/useUser";

type Iauth = {
  status: number;
  token: string;
  user: {
    email: string;
  };
};

export default function Home() {
  const queryClient = useQueryClient();

  let auth: Iauth | undefined | null = queryClient.getQueryData<Iauth>([
    "user",
  ]);

  checkAuth(auth?.token);

  return (
    <main className="px-10 py-6 desktop:px-20">
      <div className="flex justify-between items-center">
        <h1 className="font-poppins text-[1.5rem] font-bold">Hello</h1>
        <Link className={buttonVariants({ variant: "default" })} href={"/auth"}>
          Signup
        </Link>
      </div>

      <div className="flex gap-4 mt-10 flex-wrap items-center justify-center">
        <Cards />
      </div>
    </main>
  );
}
