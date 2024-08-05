import Link from "next/link";
import Image from "next/image";
import { Variant, PositionStyle, NavbarProps } from "@/app/interfaces";

export default function Navbar({ variant, positionStyle }: NavbarProps) {
  return (
    <section
      className={`${positionStyle ? positionStyle : PositionStyle.Absolute} top-0 z-10 flex h-20 w-full flex-row items-center justify-between px-20 py-10 font-primary ${
        variant === Variant.Transparent
          ? "bg-none"
          : variant === Variant.Dark
            ? "bg-black"
            : "bg-white text-black"
      }`}
    >
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
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-lg text-white transition-all duration-200 ease-linear hover:text-red"
          href="/listing"
        >
          Listings
        </Link>
        <Link
          className="text-lg text-white transition-all duration-200 ease-linear hover:text-red"
          href="/aboutus"
        >
          About Us
        </Link>
        <Link
          className="text-lg text-white transition-all duration-200 ease-linear hover:text-red"
          href="/contact"
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
