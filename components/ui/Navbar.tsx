"use client";

import React, { use, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { checkAuth } from "@/app/user/auth/useUser";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

type Iauth = {
  status?: number;
  token?: string;
  user?: {
    email?: string;
  };
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
  __v?: number;
};

const Navbar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const user: Iauth | undefined | null = queryClient.getQueryData<Iauth>([
    "user",
  ]);

  const { authenticatedUser, isLoading, isError } = checkAuth(user?.token);

  return (
    <>
      <div className="flex justify-between items-center px-10 py-6 desktop:px-20">
        <h1 className="font-poppins text-[1.5rem] font-bold">
          Hello <span>{user && user?.firstName}</span>
        </h1>

        {user ? (
          <div className="flex gap-2 items-center">
            <Link href={`/user/${authenticatedUser?._id}`}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
            <Button
              variant={"default"}
              onClick={() => {
                queryClient.clear();
                deleteCookie("user");
                router.push("/user/auth");
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link
            className={buttonVariants({ variant: "default" })}
            href={"/user/auth"}
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
