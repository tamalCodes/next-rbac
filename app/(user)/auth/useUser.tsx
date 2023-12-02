import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import * as userLocalStorage from "./user.localstore";
import { NextResponse } from "next/server";

async function getUser(user: any): Promise<any> {
  if (!user) return null;
  console.log(user.accessToken);
  const response = await fetch(`/api/user/isautheticated`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!response.ok)
    throw new NextResponse("Failed on get user request", response);

  return await response.json();
}

export interface User {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

export function useUser() {
  const { data: user, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => async (): Promise<any> => getUser(user),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: userLocalStorage.getUser,
  });

  useEffect(() => {
    if (!user || isError) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  };
}
