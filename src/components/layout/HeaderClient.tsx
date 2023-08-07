"use client";
import { navLinks } from "@/lib/navigation/header";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

// import { Title } from "../typography/Typography";
import React, { useState } from "react";

function HeaderClient({ children }: { children: React.ReactNode }) {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleNav = () => {
    setOpenNav((prev) => !prev);
  };
  console.log(openNav), "j";
  const className = ` ${
    openNav
      ? "h-60 translate-x-0"
      : "h-0 pt-0 -translate-x-[230px] md:-translate-x-[1000px]"
  } bg-white overflow-hidden flex -mt-2 pe-14 lg:pe-0 lg:mt-0 absolute md:static py-2 lg:py-0 px-4 lg:h-fit lg:translate-x-0 lg:px-0 lg:bg-transparent transition-all ease-in-out delay-30 duration-500 flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-14`;
  console.log(className);
  return (
    <header className="z-10 py-3 md:py-4 lg:py-8 px-3 md:px-10 lg:px-28 bg-bright font-medium fixed w-full transition-all ease-in-out delay-30 duration-1000">
      <nav className="lg:flex w-fit md:w-full justify-between items-center font-medium uppercase text-primary2">
        {children}
        <div>
          <ul className={className}>
            {navLinks.map(({ name, href }) => (
              <li key={name} className="text-base font-medium">
                <Link onClick={handleNav} href={href}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleNav}
          type="button"
          className="absolute text-primary1 right-3 top-3 lg:hidden"
        >
          <GiHamburgerMenu size="2em" />
        </button>
      </nav>
    </header>
  );
}

export default HeaderClient;
