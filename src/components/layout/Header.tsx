import Link from "next/link";
import { Title } from "../typography/Typography";
import HeaderClient from "./HeaderClient";
import { mySelf } from "@/lib/landing/landContent";

function Header() {
  return (
    <HeaderClient>
      <Link href="/">
        <Title medium text={mySelf} />
      </Link>
    </HeaderClient>
  );
}

export default Header;
