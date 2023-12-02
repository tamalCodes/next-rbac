"use client";

import { useQuery } from "@tanstack/react-query";
import { getCookie, getCookies } from "cookies-next";

type CheckAuthResult = {
  authenticatedUser: any;
  isLoading: boolean;
  isError: boolean;
};

export function checkAuth(token: string | undefined): CheckAuthResult {
  const cookie = getCookie("user");

  if (cookie === undefined || !cookie) {
    return {
      authenticatedUser: undefined,
      isLoading: false,
      isError: false,
    };
  }

  const {
    data: authenticatedUser,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch(`/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      return await response.json();
    },
  });

  return { authenticatedUser, isLoading, isError };
}
