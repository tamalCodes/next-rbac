"use client";

import React, { use, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { checkAuth } from "@/app/(user)/auth/useUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Iauth = {
  status: number;
  token: string;
  user: {
    email: string;
  };
};

const Navbar = () => {
  const queryClient = useQueryClient();

  let auth: Iauth | undefined | null = queryClient.getQueryData<Iauth>([
    "user",
  ]);

  const { authenticatedUser, isLoading, isError } = checkAuth(auth?.token);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  useEffect(() => {
    console.log("HI");
  }, [window.location.pathname]);

  return (
    <>
      <div className="flex justify-between items-center px-10 py-6 desktop:px-20">
        <h1 className="font-poppins text-[1.5rem] font-bold">
          Hello <span>{authenticatedUser?.firstName}</span>
        </h1>

        {authenticatedUser ? (
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant={"default"}>Logout</Button>
          </div>
        ) : (
          <Link
            className={buttonVariants({ variant: "default" })}
            href={"/auth"}
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
