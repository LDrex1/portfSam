// import { Cube, Gear, Personnel, Puzzle } from "@/assets/svgs/Icons";
import Cube from "@/assets/svgs/Cube.svg";
import Gear from "@/assets/svgs/Gear.svg";
import Personnel from "@/assets/svgs/Personnel.svg";
import Puzzle from "@/assets/svgs/Puzzle.svg";
import { IntRange } from "../specTypes";
export const mySelf = "Samuel Ogbonna";
const intro = `I am a Technical Product Manager with 4 years of experience supporting and leading empowered cross-functional teams to deliver Enterprise grade applications across the logistics,marketing and commercial sectors.`;
const intro2 = `
I lead teams to create scalable tech solutions that are aligned with local and global business objectives, delighting users and driving sustainable process improvement.
  `;

const greeting = `Hello, I am ${mySelf}`;

const cvLink =
  "https://drive.google.com/file/d/1JGklJl_LxAOET2JRGZF5RBqZdzMgjke_/view?usp=drive_link";
const myPicture =
  "https://drive.google.com/file/d/1GYWSCjFkeVEJf73wnjtJO7ZmsGawJKzg/view";
type Skills = { skill: string; description: string; icon: any }[];
type WorkExp = {
  company: string;
  role: string;
  startDate: any;
  endDate: any;
  logo: string;
};
type ParNum = Record<`par${number}`, string | undefined> &
  Record<`li${number}`, string[]>;
export type ProjectDetails = {
  overview: ParNum;
  deliverables: ParNum;
  "key-learnings": Record<string, string>;
  "Technologies-and-tools": string[];
};
export type Project = {
  title: string;
  about: string;
  details: ProjectDetails;
  image: string;
};
type Landing = {
  section1: {
    greeting: string;
    cvLink: string;
    myPicture: string;
    intro: string;
    intro2?: string;
  };
};

export const landing: Landing = {
  section1: {
    greeting,
    cvLink,
    myPicture,
    intro,
    intro2,
  },
};

export const skills: Skills = [
  {
    skill: "Product Strategy",
    description: `Developing a clear product strategy aligned with business goals. This involves understanding market trends, customer needs, and technical possibilities to create a roadmap that maximizes the product's value and innovation.`,
    icon: <Puzzle />,
  },
  {
    skill: "Product Management",
    description: `Collaborating with cross-functional teams to define product requirements, prioritize features, and ensure the successful execution of the product roadmap. I oversee tasks such as market research, user feedback analysis, sprint planning, and continuous communication to drive the product's development, meet customer needs, and achieve business goals.`,
    icon: <Cube />,
  },
  {
    skill: "User Research",
    description: `I engage in various user research methods such as interviews, surveys, and usability testing to gain valuable insights into customer needs, behaviours, and preferences. This informs the development of user-centered products by guiding feature prioritisation, design decisions, and overall product strategy.`,
    icon: <Personnel />,
  },
  {
    skill: "Development Product Design",
    description: `Leveraging my deep understanding of the technical aspects of the product, including architecture, systems, and development processes, enables me to effectively communicate with engineering teams, solve problems, and make informed decisions about the product's technical direction.`,
    icon: <Gear />,
  },
];

export const workExp: WorkExp[] = [
  {
    company: "Anheuser Busch InBev",
    role: "Senior Product Manager",
    startDate: dateConverter([1, 7, 2022]),
    endDate: "Present",
    logo: "",
  },
  {
    company: "Anheuser Busch InBev",
    role: "Technical Product Manager",
    startDate: dateConverter([2, 3, 2021]),
    endDate: dateConverter([30, 6, 2022]),
    logo: "",
  },
  {
    company: "Anheuser Busch InBev",
    role: "Artificial Intelligence Engineer (Global Management Trainee)",
    startDate: dateConverter([1, 2, 2020]),
    endDate: dateConverter([1, 3, 2021]),
    logo: "",
  },
  {
    company: "FMDQ Securities Depository",
    role: "Tech Operations Researcher",
    startDate: dateConverter([1, 1, 2019]),
    endDate: dateConverter([30, 9, 2019]),
    logo: "",
  },
];

export const projects: Project[] = [
  {
    title: "Spotlight",
    about: `Spotlight is an ecosystem of logistics technologies that is designed to manage the end-to-end logistics operations of AB InBev. 
    It's a modular system that covers specific critical functions like fleet management, delivery management, payments orchestration, 
    operational safety management, and analytics.`,
    details: {
      overview: {
        par1: `Spotlight is an ecosystem of logistics technologies that is designed to manage the end-to-end logistics operations of AB InBev. 
            It's a modular system that covers specific critical functions like fleet management, delivery management, payments orchestration, 
            operational safety management, and analytics.`,
        par2: `With its microservice architecture, Spotlight is designed to evolve with the needs of the industry, and more modules can be 
            added as the need arises.`,
        li1: [],
      },
      deliverables: {
        par1: `In designing this tech ecosystem, the continent wide logistics operation into 5 core areas covered by 5 web applications that handle:`,
        li1: [
          "Fleet management",
          "Delivery management",
          "Load schedule planning",
          "Logistics partner payment",
          "Driver behaviour management",
        ],
        par2: `Applications in the ecosystem shared data as a group and user interactions were tied together with a super mobile app which allowed the 
        system to interact in real time with logistics operators who aren't tied to their desks`,
      },
      "Technologies-and-tools": [
        "Javascript",
        "React",
        "NectJS",
        "Microsoft Azure",
        "Telematics data",
      ],
      "key-learnings": {
        "Platform Ecostystem Development": `In designing a solutions for a large problem that spans and entire continent, we had to develop an ecosystem of
         related applications that served a wide range of user types across the entire operation. `,
        "Scrum of Scrums": `As the senior Product Manager for this project, I managed a team of  junior POs who were responsible for managing the individual 
         applications in the system. I led the formation and operation of a Scrum of Scrums within the ecosystem`,
        "AR & VR": `This was my first experience driving the creation and application of Augmented Reality (AR) and Virtual Reality (VR) experiences for users.`,
      },
    },
    image: "",
  },

  {
    title: "MarketEye",
    about: `With MarketEye, the team was tasked with using technology to improve ABInBev’s performance in the Supermarket sales channel across West Africa. To solve this 
     problem, we setup a realtime feedback cycle between the key supermarket and our sales team. `,
    details: {
      overview: {
        par1: `With MarketEye, the team was tasked with using technology to improve ABInBev’s performance in the Supermarket sales channel across West Africa. 
        To solve this problem, we setup a realtime feedback cycle between the key supermarket and our sales team.`,
        par2: `We developed custom IoT cameras that streamed a live feed of shoppers in the supermarkets. This live feed was immediately analyse by our AI models in the 
    cloud and in real time, we were able to analyse the impact of product placement and different in-store marketing methods on shopper behaviour.`,
        par3: `With this feedback loop setup, the sales team was able to obtain realtime intelligence from the field and this led to the development of new sales strategies 
        that were more appropriate for the sales channel and the local environment.`,
      },
      deliverables: {
        par1: `To achieve the goal of creating a realtime feedback loop in supermarkets, the team was tasked with delivering:`,
        li1: [
          "Custom IOT camera: that was motion activated and capable of live streaming",
          "Web Dashboard: to review insights and live video from the cameras",
          "Mobile app: for in-store personnel to review key metrics and provide feedback to the team",
        ],
      },
      "Technologies-and-tools": [
        "Javascript",
        "React",
        "ReactNative",
        "NectJS",
        "AWS",
        "IoT Development",
      ],
      "key-learnings": {
        "Internet of Things Development": `This was my first experience working withIoT technology and designing custom hardware for mass production. Applying agile 
          methodologies to hardware development was a particularly challenging notion.`,
        "Advanced Stakeholder Management": `The stakeholder landscape for this project was particularly complex because it involved networks of internal and external 
          users with a wide range of motivations. `,
      },
    },
    image: "",
  },
];

type DateType = [IntRange<1, 31>, IntRange<1, 12>, number];
function dateConverter([date, month, year]: DateType) {
  const convDate = new Date(year, month - 1, date);
  return convDate.toDateString().substring(4);
}
