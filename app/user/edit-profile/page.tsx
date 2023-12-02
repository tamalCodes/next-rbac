import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

export default function EditProfile() {
  return (
    <>
      <main className="px-10 py-6 desktop:px-20">
        <div className="flex justify-between items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link
            className={buttonVariants({ variant: "default" })}
            href={"/lol"}
          >
            Logout
          </Link>
        </div>

        <div className="mt-10 font-poppins flex flex-col gap-4 desktop:mt-15">
          <h1 className="text heading">Welcome to the edit profile page</h1>

          <form action="submit"></form>
        </div>
      </main>
    </>
  );
}
