import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'




export default function Profile() {
    return (
        <main className="px-10 py-6 desktop:px-20">
            <div className='flex justify-between items-center'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Link className={buttonVariants({ variant: "default" })} href={"/lol"}>Edit Profile</Link>
            </div>

            <div className='mt-10 font-poppins flex flex-col gap-4 desktop:mt-15'>
                <h1 className='text heading'>Tamal Das</h1>
                <p className='text text-[19px] font-medium'>Hi there from Tamal</p>
                <p className='text desktop:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non sequi nemo veritatis harum neque error rerum dignissimos illum fugiat, praesentium aliquid incidunt autem dolores nihil ab, fugit exercitationem voluptatem necessitatibus eos! Tempora ipsum corrupti repellendus odio dolorem nostrum tenetur explicabo? Similique numquam maiores in suscipit fugiat ipsam quia harum nulla deleniti, laudantium expedita animi fugit esse neque magnam soluta quae non voluptatem distinctio id cupiditate minus laboriosam ad. Illo doloremque nam eligendi itaque iure! Quia, error aspernatur? Ratione earum similique odio itaque, unde tempora deserunt rerum expedita voluptate assumenda? Quasi quo quisquam veritatis vero minima provident odit non obcaecati!</p>
            </div>
        </main>
    )
}
