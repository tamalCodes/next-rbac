import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Home() {
  return (
    <main className="px-10 py-6 desktop:px-20">
      <div className='flex justify-between items-center'>
        <h1 className='font-poppins text-[1.5rem] font-bold'>Hello</h1>
        <Link className={buttonVariants({ variant: "default" })} href={"/auth"}>Signup</Link>
      </div>

      <div className='flex gap-4 mt-10 flex-wrap items-center justify-center'>

        <Card className="w-[350px] font-poppins">
          <CardHeader className='flex flex-row justify-between items-center'>
            <div>
              <CardTitle>Tamal Das</CardTitle>
              <CardDescription>Hi there from Tamal</CardDescription>
            </div>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, id?</p>

                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className={buttonVariants({ variant: "outline" })} href={"/profile"}>Read more</Link>

          </CardFooter>
        </Card>

        <Card className="w-[350px] font-poppins">
          <CardHeader className='flex flex-row justify-between items-center'>
            <div>
              <CardTitle>Tamal Das</CardTitle>
              <CardDescription>Hi there from Tamal</CardDescription>
            </div>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, id?</p>

                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"outline"}>View more</Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] font-poppins">
          <CardHeader className='flex flex-row justify-between items-center'>
            <div>
              <CardTitle>Tamal Das</CardTitle>
              <CardDescription>Hi there from Tamal</CardDescription>
            </div>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, id?</p>

                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"outline"}>View more</Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] font-poppins">
          <CardHeader className='flex flex-row justify-between items-center'>
            <div>
              <CardTitle>Tamal Das</CardTitle>
              <CardDescription>Hi there from Tamal</CardDescription>
            </div>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, id?</p>

                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"outline"}>View more</Button>
          </CardFooter>
        </Card>

      </div>


    </main>
  )
}
