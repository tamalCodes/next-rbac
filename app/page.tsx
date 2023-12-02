import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Cards from "@/components/ui/Cards";

export default async function Home() {
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
