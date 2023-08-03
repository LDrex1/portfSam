import { SubLink } from "./header";

type footerContent = {
  catchPhrase: string;
  socialMedia: Omit<SubLink, "tag">[];
};

export const footerContent: footerContent = {
  catchPhrase: "Lets build awesome products together",
  socialMedia: [
    { name: "LinkedIn", href: "" },
    { name: "Twitter", href: "" },
    { name: "Instagram", href: "" },
  ],
};
