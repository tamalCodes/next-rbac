"use client";
import { useQueryClient } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { checkAuth } from "./(user)/auth/useUser";

type Iauth = {
  status: number;
  token: string;
  user: {
    email: string;
  };
};

function ChecksAuth({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();
  let auth: Iauth | undefined = queryClient.getQueryData<Iauth>(["user"]);

  //   checkAuth
  console.log(auth);

  return <>{children}</>;
}
