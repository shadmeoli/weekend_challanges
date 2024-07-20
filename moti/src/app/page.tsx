import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-gray-100">
      <HeroSection />
    </main>
  );
}


function HeroSection() {
  return (
    <section className="h-[80vh] w-full overflow-hidden relative bg-black flex flex-col items-start justify-center">
      <Navbar />
      <section className="p-20 z-10">
        <h1 className="w-[65vw] text-8xl font-primary z-10 text-white font-light">
          Experience is everything
          with Moti
        </h1>
        <div className="flex flex-row items-center justify-start space-x-4">
          <LinkButton className="bg-white hover:bg-red text-black flex flex-row items-center justify-center space-x-2 h-14 px-8 transition-all duration-300 ease-in-out" text="Buy With Moti" location="/listing" />
          <LinkButton className="bg-white hover:bg-red text-black flex flex-row items-center justify-center space-x-2 h-14 px-8 transition-all duration-300 ease-in-out" text="Sell With Moti" location="/listing" />
        </div>
      </section>



      <Image src="/images/hero.jpg" height={800} width={1920} className="object-contain absolute top-0 opacity-60" alt="Hero" />
    </section>
  )
}

interface LinkButtonProps {
  text: string;
  className: string;
  location: string
  target?: boolean
}

function LinkButton({ text, className, location, target }: LinkButtonProps) {
  return (
    <Link href={location} className={className}>
      <span>{text}</span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </span>
    </Link>
  )
}


function Navbar() {

  return (
    <section className="font-primary absolute z-10 h-20 top-0 w-full py-10 px-20 flex flex-row items-center justify-between">
      <Link href="/">
        <Image className="object-contain" alt="logo" height={60} width={60} src="/logo.png" />
      </Link>
      <div className="space-x-8 font-primary">
        <Link className="text-white text-lg hover:text-red transition-all duration-200 ease-linear" href="/signup">Home</Link>
        <Link className="text-white text-lg hover:text-red transition-all duration-200 ease-linear" href="/signup">Listings</Link>
        <Link className="text-white text-lg hover:text-red transition-all duration-200 ease-linear" href="/signup">About Us</Link>
        <Link className="text-white text-lg hover:text-red transition-all duration-200 ease-linear" href="/signup">Contact</Link>
      </div>
      <Link className="text-white" href="/signup">Sign Up</Link>
    </section>
  )
}