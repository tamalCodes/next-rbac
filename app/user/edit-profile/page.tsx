import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function EditProfile() {
  return (
    <>
      <main className="px-10 desktop:px-20 ">
        <div className="h-screen font-poppins flex flex-col items-center justify-center gap-4 desktop:mt-15">
          <h1 className="text heading">Welcome to the edit profile page</h1>
          <p className="text">This is a protected route.</p>

          <Link className={buttonVariants({ variant: "default" })} href={`/`}>
            Back to Home
          </Link>

          <form action="submit"></form>
        </div>
      </main>
    </>
  );
}
