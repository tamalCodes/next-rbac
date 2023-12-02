"use client";

import { useQuery } from "@tanstack/react-query";

type CheckAuthResult = {
  authenticatedUser: any;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
};

export function checkAuth(token: string | undefined): CheckAuthResult {
  if (token === undefined || token === null) {
    return {
      authenticatedUser: undefined,
      isLoading: false,
      isFetching: false,
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
      });
      return await response.json();
    },
  });

  console.log(isFetching);

  return { authenticatedUser, isLoading, isFetching, isError };
}
