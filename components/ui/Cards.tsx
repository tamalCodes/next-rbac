"use client";

import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Spinner from "./spinner";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  __v: number;
};

const Cards = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/all`
      );
      return data.users as User[];
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1 className="text heading">Error</h1>;
  }

  return (
    <>
      {data?.map((user, idx: number) => {
        return (
          <Card className="w-[350px] font-poppins" key={idx}>
            <CardHeader className="flex flex-row justify-between items-center">
              <div>
                <CardTitle>
                  {user.firstName} {user.lastName}
                </CardTitle>
                <CardDescription>{user?.email}</CardDescription>
              </div>

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <p className="text-[16px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Tempora, id?
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={`/user/${user._id}`}
                // onClick={() => {
                //   queryClient.invalidateQueries({ queryKey: ["singleuser"] });
                // }}
              >
                Read more
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default Cards;
