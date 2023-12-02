import { useQuery } from "@tanstack/react-query";

type CheckAuthResult = {
  authenticatedUser: any;
  isLoading: boolean;
  isError: boolean;
};

export function checkAuth(token: string | undefined): CheckAuthResult {
  if (token === undefined || token === null) {
    return { authenticatedUser: undefined, isLoading: false, isError: false };
  }

  const {
    data: authenticatedUser,
    isLoading,
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

  return { authenticatedUser, isLoading, isError };
}
