"use client";

import Cards from "@/components/ui/Cards";
import { useQueryClient } from "@tanstack/react-query";
import { checkAuth } from "@/app/(user)/auth/useUser";
import Navbar from "@/components/ui/Navbar";

type Iauth = {
  status: number;
  token: string;
  user: {
    email: string;
  };
};

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="px-10 desktop:px-20">
        <div className="flex gap-4 mt-10 flex-wrap items-center justify-center">
          <Cards />
        </div>
      </main>
    </>
  );
}
