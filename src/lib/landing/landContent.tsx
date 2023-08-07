import { Cube, Gear, Personnel, Puzzle } from "@/assets/svgs/Icons";
import { IntRange } from "../specTypes";
export const mySelf = "Samuel Ogbonna";
const intro =
  "I’m a Product Mananger with X years of experience leading and working with empowered teams across a variety of Enterprise, B2C, B2B, and Platform industries . I lead teams to create software products that people love to use, and that enable sustainable product-led businesses.";

const greeting = `Hello, I am ${mySelf}`;

const cvLink = "";
const myPicture = "";
type Skills = { skill: string; description: string; icon: any }[];
type WorkExp = {
  company: string;
  role: string;
  startDate: any;
  endDate: any;
  logo: string;
};
export type Project = { title: string; about: string; image: string };
type Landing = {
  section1: {
    greeting: string;
    cvLink: string;
    myPicture: string;
    intro: string;
  };
};

export const landing: Landing = {
  section1: {
    greeting,
    cvLink,
    myPicture,
    intro,
  },
};

export const skills: Skills = [
  {
    skill: "Team Work",
    description:
      "I work well in a team and I am good with people. They love me and I love them",
    icon: <Puzzle />,
  },
  {
    skill: "Product Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    icon: <Cube />,
  },
  {
    skill: "Product Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: <Personnel />,
  },
  {
    skill: "Product Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: <Gear />,
  },
];

export const workExp: WorkExp[] = [
  {
    company: "AB InBEv",
    role: "Senior Product Manager",
    startDate: dateConverter([12, 1, 2000]),
    endDate: "Present",
    logo: "",
  },
  {
    company: "ABC Company",
    role: "XXY Role",
    startDate: dateConverter([12, 1, 2000]),
    endDate: "Present",
    logo: "",
  },
  {
    company: "FriesLandCamp",
    role: "Intern",
    startDate: dateConverter([12, 1, 2000]),
    endDate: "Present",
    logo: "",
  },
];

export const projects: Project[] = [
  {
    title: "KUJA",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    image: "",
  },
  {
    title: "Project Title2",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    image: "",
  },
  {
    title: "Project Title3",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    image: "",
  },
];

type DateType = [IntRange<1, 31>, IntRange<1, 12>, number];
function dateConverter([date, month, year]: DateType) {
  const convDate = new Date(year, month - 1, date);
  return convDate.toDateString().substring(4);
}
