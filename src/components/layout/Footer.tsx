import { footerContent } from "@/lib/navigation/footer";
import Link from "next/link";
import { H2, H3 } from "../typography/Typography";
import Button from "../custom-comps/Button";
import { useState } from "react";

function Footer(): React.ReactNode {
  const [copyNotification, setCopyNotification] = useState<string>("");
  const [showCopyNotification, setShowCopyNotification] =
    useState<boolean>(false);
  const handleMediaClick = (
    ev: React.MouseEvent<HTMLAnchorElement & { key: string }, MouseEvent>
  ): void => {
    const mediaText = ev.currentTarget.textContent;
    if (ev.currentTarget.id) {
      ev.preventDefault();
      const textCopy = footerContent.socialMedia.filter(
        ({ name }) => name === mediaText
      )[0].tag;
      navigator.clipboard.writeText(textCopy);
      setCopyNotification(ev.currentTarget.id);
      setShowCopyNotification(true);
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 1500);
      console.log(showCopyNotification);
    }
  };
  const classNameNotif = showCopyNotification
    ? "bg-white rounded text-center text-[12px] md:text-[14px] text-primary1 absolute left-10 -top-6 sm:-top-10"
    : "hidden";
  return (
    <footer className="py-5 sm:py-7 md:py-8 lg:py-10 px-3 sm:px-6 md:px-10 lg:px-28 bg-dark">
      <div className="mt-3">
        <H3 color="text-bright" text={footerContent.catchPhrase} />
        <div className="w-fit bg-gradient-to-r from-[#8BBAFF] to-[#C2D7F8] bg-clip-text text-transparent">
          <H2 text="Get in Touch" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-10 lg:mt-12">
        <ul id="contact" className="relative flex gap-x-3">
          {footerContent.socialMedia.map(
            ({ name, href, icon: Icon, iconColor, tag }) => {
              const className = `text-md ${iconColor}`; //can be text-linkedin or text-call or text-gmail
              console.log(iconColor);
              return (
                <li key={name} className="flex gap-x-1 items-center underline">
                  {
                    <div className={className}>
                      <Icon />
                    </div>
                  }
                  <Link
                    id={tag}
                    onClick={handleMediaClick}
                    target={name === "Phone" ? "" : "_blank"}
                    href={href}
                    className="text-bright"
                  >
                    {name}
                  </Link>
                </li>
              );
            }
          )}
          <span className={classNameNotif}>{`${copyNotification} copied`}</span>
        </ul>
        {/* <Link href={`mailto:${footerContent.mailTo}`}>
          <Button
            styTail="mt-4 md:mt-0 shadow-shade1"
            text="Send me a mail"
            background="purple"
            bRadius={"3xl"}
            medium
          />
        </Link> */}
      </div>
    </footer>
  );
}

export default Footer;
