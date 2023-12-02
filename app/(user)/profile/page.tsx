"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Navbar from "@/components/ui/Navbar";

export default function Profile() {
  const queryClient = useQueryClient();
  const user: any = queryClient.getQueryData(["user"]);

  return (
    <>
      <main className="px-10 py-6 desktop:px-20">
        <div className="mt-4 font-poppins flex flex-col gap-4 desktop:mt-15">
          <div className="flex items-center justify-between">
            <h1 className="text heading">Tamal Das</h1>
            {user && (user !== null || user !== undefined) && (
              <Link
                className={buttonVariants({ variant: "default" })}
                href={"/edit-profile"}
              >
                Edit Profile
              </Link>
            )}
          </div>
          <p className="text text-[19px] font-medium">{user && user?.email}</p>
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
      </main>
    </>
  );
}
