"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import UserRoles from "../profile/UserRoles";
import { useMemo } from "react";
import Spinner from "@/components/ui/spinner";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  __v: number;
};

export default function Profile({
  params: { id },
}: {
  params: { id: string };
}) {
  const queryClient = useQueryClient();
  const authenticatedUser: any = queryClient.getQueryData(["user"]);

  const {
    data: user,
    isLoading,
    isError,
    isStale,
    isFetching,
  } = useQuery({
    queryKey: ["singleuser"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/api/user/${id}`);
      return data.user as User;
    },
  });

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="px-10 py-6 desktop:px-20 font-poppins heading">
        Error...
      </div>
    );
  }

  return (
    <>
      <main className="px-10 py-6 desktop:px-20">
        <div className="mt-4 font-poppins flex flex-col gap-4 desktop:mt-15">
          <div className="flex items-center justify-between">
            <h1 className="text heading">
              {user?.firstName} {user?.lastName}
            </h1>
            {authenticatedUser?.email === user?.email && (
              <Link
                className={buttonVariants({ variant: "default" })}
                href={"/user/edit-profile"}
              >
                Edit Profile
              </Link>
            )}
          </div>
          <p className="text text-[19px] font-medium">{user?.email}</p>
          <p className="text desktop:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non
            sequi nemo veritatis harum neque error rerum dignissimos illum
            fugiat, praesentium aliquid incidunt autem dolores nihil ab, fugit
            exercitationem voluptatem necessitatibus eos! Tempora ipsum corrupti
            repellendus odio dolorem nostrum tenetur explicabo? Similique
            numquam maiores in suscipit fugiat ipsam quia harum nulla deleniti,
            laudantium expedita animi fugit esse neque magnam soluta quae non
            voluptatem distinctio id cupiditate minus laboriosam ad. Illo
            doloremque nam eligendi itaque iure! Quia, error aspernatur? Ratione
            earum similique odio itaque, unde tempora deserunt rerum expedita
            voluptate assumenda? Quasi quo quisquam veritatis vero minima
            provident odit non obcaecati!
          </p>
        </div>

        <UserRoles />
      </main>
    </>
  );
}
