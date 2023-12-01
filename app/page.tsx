import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='font-poppins text-5xl font-bold'>Hello users</h1>

      <div className='flex gap-4'>
        <div className='w-[200px] h-[200px] bg-white border-[1px] border-solid border-black rounded-[8px] '>
          <Image src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg" alt="User profile" width={100} height={100} />
        </div>
      </div>
    </main>
  )
}
