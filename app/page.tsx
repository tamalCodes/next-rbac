import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import { get } from "http";
import Cards from "@/components/ui/Cards";

async function getUsers() {
  const response = await fetch("http://localhost:3000/api/user/all");
  const result = await response.json();
  return result.users;
}

export default async function Home() {
  // const users = await getUsers();

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
