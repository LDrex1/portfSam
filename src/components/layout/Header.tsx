import { navLinks } from "@/lib/navigation/header";
import Link from "next/link";
import { H3, Title } from "../typography/Typography";

function Header() {
  return (
    <header className="z-10 -mt-4 px-3 lg:px-28 bg-bright font-medium md:fixed w-full">
      <nav className="absolute md:flex md:static justify-between items-center font-medium py-3 uppercase text-primary2">
        <Title medium text={"Samuel Ogbonna"} />
        <div>
          <ul className="flex flex-col md:flex-row gap-y-2 md:gap-x-4">
            {navLinks.map(({ name, href }) => (
              <li className="text-sm">
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
