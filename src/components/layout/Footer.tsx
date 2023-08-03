import { footerContent } from "@/lib/navigation/footer";
import Link from "next/link";
import { H2, H3 } from "../typography/Typography";
import Button from "../custom-comps/Button";

function Footer(): React.ReactNode {
  return (
    <footer className="lg:py-10 lg:px-8 bg-dark text-bright">
      <div className="mt-3">
        <H3 text={footerContent.catchPhrase} />
        <div className="w-fit bg-gradient-to-r from-[#8BBAFF] to-[#C2D7F8] bg-clip-text text-transparent">
          <H2 text="Get in Touch" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 sm:mt-10 lg:mt-12">
        <ul className="flex gap-x-3">
          {footerContent.socialMedia.map(({ name, href }) => (
            <li className="underline">
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>

        <Button
          text={"Send me a mail"}
          background={"#4859F2"}
          bRadius={"3xl"}
          medium
        />
      </div>
    </footer>
  );
}

export default Footer;
