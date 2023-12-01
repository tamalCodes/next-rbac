import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

export default function EditProfile() {
    return (
        <main className="px-10 py-6 desktop:px-20">
            <div className='flex justify-between items-center'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Link className={buttonVariants({ variant: "default" })} href={"/lol"}>Logout</Link>
            </div>

            <div className='mt-10 font-poppins flex flex-col gap-4 desktop:mt-15'>
                <h1 className='text heading'>Welcome to the edit profile page</h1>

                <form action="submit">

                </form>

            </div>
        </main>
    )
}

// "use client"
// import React from "react"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { Button } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"


// const formSchema = z.object({
//     username: z.string().min(2).max(50),
// })


// export default function ProfileForm() {
//     // 1. Define your form.
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             username: "",
//         },
//     })

//     // 2. Define a submit handler.
//     function onSubmit(values: z.infer<typeof formSchema>) {
//         // Do something with the form values.
//         // ✅ This will be type-safe and validated.
//         console.log(values)
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                     control={form.control}
//                     name="username"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Username</FormLabel>
//                             <FormControl>
//                                 <Input placeholder="shadcn" {...field} />
//                             </FormControl>
//                             <FormDescription>
//                                 This is your public display name.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <Button type="submit">Submit</Button>
//             </form>
//         </Form>
//     )
// }