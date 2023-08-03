import { IntRange } from "./../specTypes";
const intro =
  "I’m a Product Mananger with X years of experience leading and working with empowered teams across a variety of Enterprise, B2C, B2B, and Platform industries . I lead teams to create software products that people love to use, and that enable sustainable product-led businesses.";

const greeting = "Hello, I am Samuel Ogbonna";

const cvLink = "";
const myPicture = "";
type Skills = { skill: string; description: string; icon: string }[];
type WorkExp = { company: string; role: string; startDate: Date };
type Landing = {
  section1: {
    greeting: string;
    cvLink: string;
    myPicture: string;
    intro: string;
  };
};

export const landing = {
  section1: {
    greeting,
    cvLink,
    myPicture,
    intro,
  },
};

export const skills: Skills = [
  {
    skill: "Product Strategy",
    description:
      "dfdsfdfwe fsdihf dhs hdfs hdf ddf dfd s dfskdf dhs dfsdf ds dfsdfd dff",
    icon: "",
  },
  {
    skill: "Product Strategy",
    description:
      "dfdsfdfwe fsdihf dhs hdfs hdf ddf dfd s dfskdf dhs dfsdf ds dfsdfd dff",
    icon: "",
  },
  {
    skill: "Product Strategy",
    description:
      "dfdsfdfwe fsdihf dhs hdfs hdf ddf dfd s dfskdf dhs dfsdf ds dfsdfd dff",
    icon: "",
  },
  {
    skill: "Product Strategy",
    description:
      "dfdsfdfwe fsdihf dhs hdfs hdf ddf dfd s dfskdf dhs dfsdf ds dfsdfd dff",
    icon: "",
  },
];

export const workExp = [
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

type DateType = [IntRange<1, 31>, IntRange<1, 12>, number];
function dateConverter([date, month, year]: DateType) {
  const convDate = new Date(year, month - 1, date);
  return convDate.toDateString().substring(4);
}
