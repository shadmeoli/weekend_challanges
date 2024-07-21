import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="h-auto space-y-48 font-primary">
      <HeroSection />
      <CategoriesSection />
      <VarietySection />
      <WhyusSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative flex h-[80vh] w-full flex-col items-start justify-center overflow-hidden bg-black">
      <Navbar />
      <section className="z-10 p-20">
        <h1 className="z-10 w-[65vw] font-primary text-8xl font-light text-white">
          Experience is everything with Moti
        </h1>
        <div className="flex flex-row items-center justify-start space-x-4">
          <LinkButton
            className="flex h-14 flex-row items-center justify-center space-x-2 bg-white px-8 text-black transition-all duration-300 ease-in-out hover:bg-red"
            text="Buy With Moti"
            location="/listing"
          />
          <LinkButton
            className="flex h-14 flex-row items-center justify-center space-x-2 bg-white px-8 text-black transition-all duration-300 ease-in-out hover:bg-red"
            text="Sell With Moti"
            location="/listing"
          />
        </div>
      </section>

      <Image
        src="/images/hero.jpg"
        height={800}
        width={1920}
        className="absolute top-0 object-contain opacity-60"
        alt="Hero"
      />
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="mt-20 flex h-60 w-full flex-col items-center justify-center gap-4 p-6 md:flex-row">
      <div className="relative flex h-60 w-96 flex-col items-start justify-center p-4">
        <Image
          src="/images/sports.jpg"
          height={800}
          width={1920}
          className="absolute inset-0 top-0 object-contain"
          alt="Hero"
        />
        <h1 className="z-10 text-4xl uppercase text-white">sports</h1>
        <LinkButton
          className="absolute bottom-4 right-4 flex flex-row items-center justify-center px-4 py-2 text-sm text-white transition-all duration-300 ease-in-out hover:bg-white/90 hover:bg-opacity-60 hover:text-black hover:backdrop-blur"
          text="View All"
          location="/categories/sports"
        />
      </div>
      <div className="relative flex h-60 w-96 flex-col items-start justify-center p-4">
        <Image
          src="/images/suv.jpg"
          height={800}
          width={1920}
          className="absolute inset-0 top-0 object-contain"
          alt="Hero"
        />
        <h1 className="z-10 text-4xl uppercase text-white">suvs</h1>
        <LinkButton
          className="absolute bottom-4 right-4 flex flex-row items-center justify-center px-4 py-2 text-sm text-white transition-all duration-300 ease-in-out hover:bg-white/90 hover:bg-opacity-60 hover:text-black hover:backdrop-blur"
          text="View All"
          location="/categories/sports"
        />
      </div>
      <div className="relative flex h-60 w-96 flex-col items-start justify-center p-4">
        <Image
          src="/images/trucks.jpg"
          height={800}
          width={1920}
          className="absolute inset-0 top-0 object-contain"
          alt="Hero"
        />
        <h1 className="z-10 text-4xl uppercase text-white">trucks</h1>
        <LinkButton
          className="absolute bottom-4 right-4 flex flex-row items-center justify-center px-4 py-2 text-sm text-white transition-all duration-300 ease-in-out hover:bg-white/90 hover:bg-opacity-60 hover:text-black hover:backdrop-blur"
          text="View All"
          location="/categories/sports"
        />
      </div>
    </section>
  );
}

function VarietySection() {
  return (
    <section className="flex h-[70vh] w-full items-center justify-center md:p-10">
      <div className="relative flex h-full w-[60vw] flex-col justify-center gap-4 md:flex-row">
        <div className="relative flex w-[60vw] flex-col gap-y-6 p-6">
          <h1 className="text-5xl">Variety and preference.</h1>
          <p className="text-balance">
            At Moti, we understand that every driver is unique. That's why we
            offer an extensive selection of cars to suit every taste and
            preference. Whether you're looking for a sleek, modern ride or a
            classic beauty, we have something for everyone. Explore our diverse
            range and find the perfect car that matches your style
          </p>

          <div className="flex h-36 w-full flex-row">
            <span className="flex h-36 w-48 flex-col justify-center border p-4">
              <h1 className="text-5xl font-light">300+</h1>
              <h4 className="text-xl font-light">Sellers</h4>
            </span>
            <span className="flex h-36 w-48 flex-col justify-center border p-4">
              <h1 className="text-5xl font-light">$50M+</h1>
              <h4 className="text-xl font-light">Transacted</h4>
            </span>
          </div>

          <LinkButton
            className="absolute bottom-6 right-28 flex w-28 items-center justify-center bg-lime p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
            text="View All"
            location="/aboutus"
          />
        </div>
        <div className="w-full md:w-[40vw]">
          <Image
            src="/images/variety_section.jpg"
            height={800}
            width={1920}
            className="object-rights h-full w-full object-cover"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}

function WhyusSection() {
  return (
    <section className="flex h-[70vh] w-full flex-col items-center p-10 font-primary">
      <h1 className="text-5xl">Why Sell/Buy with US?</h1>
    </section>
  );
}

interface LinkButtonProps {
  text: string;
  className: string;
  location: string;
  target?: boolean;
}

function LinkButton({ text, className, location, target }: LinkButtonProps) {
  return (
    <Link href={location} className={className}>
      <span>{text}</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </span>
    </Link>
  );
}

function Navbar() {
  return (
    <section className="absolute top-0 z-10 flex h-20 w-full flex-row items-center justify-between px-20 py-10 font-primary">
      <Link href="/">
        <Image
          className="object-contain"
          alt="logo"
          height={60}
          width={60}
          src="/logo.png"
        />
      </Link>
      <div className="space-x-8 font-primary">
        <Link
          className="text-lg text-white transition-all duration-200 ease-linear hover:text-red"
          href="/signup"
        >
          Home
        </Link>
        <Link
          className="text-lg text-white transition-all duration-200 ease-linear hover:text-red"
          href="/signup"
        >
          Listings
        </Link>
        <Link
          className="text-lg text-white transition-all duration-200 ease-linear hover:text-red"
          href="/signup"
        >
          About Us
        </Link>
        <Link
          className="text-lg text-white transition-all duration-200 ease-linear hover:text-red"
          href="/signup"
        >
          Contact
        </Link>
      </div>
      <Link className="text-white" href="/api/auth/signin">
        Sign Up
      </Link>
    </section>
  );
}
