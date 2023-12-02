"use client";

import Cards from "@/components/ui/Cards";
import Navbar from "@/components/ui/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-10 desktop:px-20">
        <div className="flex gap-4 mt-10 flex-wrap items-center justify-center">
          <Cards />
        </div>
        <div className="flex flex-col gap-4 mt-20 flex-wrap items-center justify-center">
          <Link
            className={buttonVariants({ variant: "default" })}
            href={"/user/edit-profile"}
          >
            Test protected route
          </Link>
          <p className="text text-center w-[50%]">
            This route will take you to Login if you are not authorized. We use
            cookies to check auth.
          </p>
        </div>
      </main>
    </>
  );
}
