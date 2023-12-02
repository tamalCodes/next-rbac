import Cards from "@/components/ui/Cards";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-10 desktop:px-20">
        <div className="flex gap-4 mt-10 flex-wrap items-center justify-center">
          <Cards />
        </div>
      </main>
    </>
  );
}
