"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useMemo } from "react";

type Permission = {
  _id: string;
  name: string;
  roles: string[];
  __v: number;
};

type ApiResponse = {
  perms: Permission[];
  status: number;
};

const UserRoles = () => {
  const queryClient = useQueryClient();

  const user: any = queryClient.getQueryData(["singleuser"]);
  const authenticatedUser: any = queryClient.getQueryData(["user"]);

  const {
    data: permissions,
    isLoading,
    isError,
  } = useQuery<ApiResponse>({
    queryKey: ["userperms"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/permissions?role=${user?.role}`
      );
      return data as ApiResponse;
    },
  });
  if (isLoading) {
    return (
      <div className="px-10 py-6 desktop:px-20 font-poppins heading">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-10 py-6 desktop:px-20 font-poppins heading">
        Error...
      </div>
    );
  }

  function handlePermission(requiredPermission: String) {
    const hasViewPermissions = permissions?.perms.some(
      (permission) => permission.name === requiredPermission
    );

    if (!hasViewPermissions) {
      toast({
        title: "Error",
        description: "Permission denied",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Permission granted",
        variant: "default",
      });
    }
  }

  return (
    <div className="mt-4 font-poppins flex flex-col gap-4 desktop:mt-15">
      <h1 className="text heading">User Permissions</h1>

      <div className="flex flex-col gap-3 mt-2">
        {permissions?.perms?.map((perm, idx) => {
          return (
            <p className="text" key={idx}>
              - {perm?.name}
            </p>
          );
        })}
      </div>

      {authenticatedUser && (
        <div className="flex gap-2">
          <Button
            onClick={() => {
              handlePermission("View Permissions");
            }}
          >
            View Permission
          </Button>
          <Button
            onClick={() => {
              handlePermission("Share Permissions");
            }}
          >
            Share Permission
          </Button>
          <Button
            onClick={() => {
              handlePermission("Delete Permissions");
            }}
          >
            Delete Permission
          </Button>
          <Button
            onClick={() => {
              handlePermission("Ban Permissions");
            }}
          >
            Ban Permission
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserRoles;
