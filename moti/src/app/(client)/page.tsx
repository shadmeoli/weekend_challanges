import Link from "next/link";
import Image from "next/image";

interface Features {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function HomePage() {
  const features: Features[] = [
    {
      title: "Unmatched Quality",
      description: "Experience the highest standards in every car we offer.",
      icon: (
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
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
      ),
    },
    {
      title: "Exceptional Service",
      description:
        "Our dedicated team is here to ensure your car-buying journey is smooth and satisfying.",
      icon: (
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
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
    },
    {
      title: "Diverse Inventory",
      description:
        "We pride ourselves on a wide selection of cars to suit every taste and preference.",
      icon: (
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
            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Competitive Pricing",
      description: "Get the best value with our competitive prices.",
      icon: (
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
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      ),
    },
    {
      title: "Customer-First Approach",
      description:
        "Discover why so many trust Moti for their automotive needs and drive away with confidence.",
      icon: (
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
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="h-auto space-y-48 font-primary">
      <HeroSection />
      <CategoriesSection />
      <VarietySection />
      <WhyusSection features={features} />
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

interface WhyusProps {
  features: Features[];
}

function WhyusSection({ features }: WhyusProps) {
  return (
    <section className="flex h-[70vh] w-full flex-col items-center space-y-10 p-10 font-primary">
      <h1 className="text-5xl">Why Sell/Buy with US?</h1>
      <div className="flex w-[60vw] flex-wrap items-center justify-center gap-4">
        {features.map((feature, index) => (
          <div
            className="bg-base flex h-48 w-80 flex-col items-start justify-start space-y-4 rounded-2xl p-2 p-6"
            key={index}
          >
            <span className="flex flex-row items-center space-x-2">
              <span className="rounded bg-lime p-2">{feature.icon}</span>
              <h1>{feature.title}</h1>
            </span>

            <p className="text-balance text-start text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
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
