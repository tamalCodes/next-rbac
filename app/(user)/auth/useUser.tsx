import { useQuery } from "@tanstack/react-query";

export function checkAuth(token: string | undefined) {
  if (token === undefined || token === null) return;

  const {
    data: authenticatedUser,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch(`/api/user/isautheticated`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    },
  });

  return { authenticatedUser, isLoading, isError };
}
