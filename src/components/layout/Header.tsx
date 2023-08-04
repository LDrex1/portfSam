import { navLinks } from "@/lib/navigation/header";
import Link from "next/link";
import { H3, Title } from "../typography/Typography";

function Header() {
  return (
    <header className="z-10 py-5 px-3 lg:px-28 bg-bright font-medium md:fixed w-full">
      <nav className="absolute md:flex md:static justify-between items-center font-medium py-3 uppercase text-primary2">
        <Title medium text={"Samuel Ogbonna"} />
        <div>
          <ul className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-10 lg:gap-x-14">
            {navLinks.map(({ name, href }) => (
              <li className="text-base font-medium">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <button className="md:hidden">dddd</button>
      </nav>
    </header>
  );
}

export default Header;
