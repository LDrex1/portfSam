import { SubLink } from "./header";
import { FaLinkedinIn } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import React, { JSXElementConstructor } from "react";
type footerContent = {
  catchPhrase: string;
  socialMedia: (Omit<SubLink, "tag"> & {
    icon: typeof React.Component;
    tag: string;
    iconColor: "text-linkedin" | "text-gmail" | "text-call";
  })[];
  mailTo: string;
};

export const footerContent: footerContent = {
  catchPhrase: "Lets build awesome products together",
  socialMedia: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aanuoluwapo-abiola-6a4b76101/",
      icon: FaLinkedinIn,
      iconColor: "text-linkedin",
      tag: "",
    },
    {
      name: "Email",
      href: "mailto:aanu.abiola@gmail.com",
      icon: SiGmail,
      iconColor: "text-gmail",
      tag: "",
    },
    {
      name: "Phone",
      href: "",
      icon: BiSolidPhoneCall,
      iconColor: "text-call",
      tag: "+123456789",
    },
    // { name: "Instagram", href: "" },
  ],
  mailTo: "aanu.abiola@gmail.com",
};
