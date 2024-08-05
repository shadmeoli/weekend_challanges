"use client";
import Image from "next/image";
import Navbar from "@/components/narbar";
import { Variant, PositionStyle } from "@/app/interfaces";
import React, { ChangeEvent, useState } from "react";

const carData: { [brand: string]: string[] } = {
  Toyota: ["Camry", "Corolla", "Prius"],
  Honda: ["Accord", "Civic", "Fit"],
  Ford: ["Mustang", "Explorer", "F-150"],
};

export default function Listing() {
  return (
    <main className="max-w-screen max-h-auto flex h-screen w-screen flex-col items-center space-y-10">
      <Navbar variant={Variant.Dark} positionStyle={PositionStyle.Normal} />
      <AdvertBanner />
      <FilterActions />
      <ContentSection />
    </main>
  );
}

function AdvertBanner() {
  return (
    <section className="h-[30%] w-[50%] overflow-hidden rounded-2xl bg-black/10">
      <Image
        height={1080}
        width={1920}
        alt="ad_image_banner"
        src="/ad.png"
        className="object-cover"
      />
    </section>
  );
}

function FilterActions() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<string[]>([]);

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setModels(carData[brand] || []);
  };

  return (
    <div className="flex h-16 w-[60%] flex-row items-center justify-between rounded-2xl bg-base">
      <select
        className="ountline-none h-full w-[30%] rounded-l-2xl border-none bg-base p-4 outline-none hover:outline-none focus:outline-none active:outline-none"
        onChange={handleBrandChange}
        value={selectedBrand}
      >
        <option value="">Select a brand</option>
        {Object.keys(carData).map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select
        className="ountline-none h-full w-[30%] border-none bg-base p-4 outline-none hover:outline-none focus:outline-none active:outline-none"
        disabled={!selectedBrand}
      >
        <option value="">Select a model</option>
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
      <input
        className="h-full border-none bg-base p-4 outline-none hover:outline-none focus:outline-none active:outline-none"
        placeholder="Location"
      />
      <span className="stroke-base_gray/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      </span>
      <button className="ountline-none flex h-full w-24 items-center justify-center rounded-r-2xl border-none bg-lime">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
}

function ContentSection() {
  return (
    <section className="relative h-full w-full overflow-hidden">
      <FiltersSideBar />
    </section>
  );
}

function FiltersSideBar() {
  return <div className="absolute left-0 flex h-full flex-col"></div>;
}
