// import { Cube, Gear, Personnel, Puzzle } from "@/assets/svgs/Icons";
import Cube from "@/assets/svgs/Cube.svg";
import Gear from "@/assets/svgs/Gear.svg";
import Personnel from "@/assets/svgs/Personnel.svg";
import Puzzle from "@/assets/svgs/Puzzle.svg";
import { IntRange } from "../specTypes";
export const mySelf = "Oluwadamilare Abiola";
const intro = `I am a Cloud/Devops enginner with 3 years of experience in frontend web development.`;
const intro2 = `
I am AWS certified and ready to put the knowledge I've aquired to exel in roles such as DevOps Engineer, Cloud Engineer, Cloud Administrator, Cloud Architect, Solutions Atchitect and Cloud Support.
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
type Education = Omit<WorkExp, "company"> & { school: string };
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
    skill: "COntainerization",
    description: `Managing microservices in containers such as Docker, ECS and Kubenetes`,
    icon: <Puzzle />,
  },
  {
    skill: "Systems Administration",
    description: `Linux and Bash Scripting`,
    icon: <Cube />,
  },
  {
    skill: "Communication Skill",
    description: `Accurately conveing a message to a person or group of people while being polite and encouraging feedbacks`,
    icon: <Personnel />,
  },
  {
    skill: "Cloud Infrastructure",
    description: `Seamless integration and automation of AWS services such as S3, EC2, EKS, API Gateway, and many more. Operation of the AWS VPC.`,
    icon: <Gear />,
  },
];

export const workExp: WorkExp[] = [
  {
    company: "Areabox",
    role: "Senior Frontend Developer",
    startDate: dateConverter([1, 3, 2022]),
    endDate: dateConverter([30, 10, 2022]),
    logo: "",
  },
  {
    company: "Areabox",
    role: "Senior Frontend Developer",
    startDate: dateConverter([1, 3, 2022]),
    endDate: dateConverter([30, 10, 2022]),
    logo: "",
  },
];
export const education: Education[] = [
  {
    school: "Teesside University",
    role: "Aerospace Engineering (Distinction)",
    startDate: dateConverter([17, 1, 2023]),
    endDate: dateConverter([14, 5, 2024]),
    logo: "",
  },
  {
    school: "Samara National Research University",
    role: "Maintainance of Aircraft and Engines (1st Class)",
    startDate: dateConverter([1, 9, 2016]),
    endDate: dateConverter([12, 2, 2021]),
    logo: "",
  },
];

export const projects: Project[] = [
  {
    title: "Spotlight",
    about: `Cloud-Native application deployment and management using Amaon EKS and Docker`,
    details: {
      overview: {
        par1: `Orchestating AWS infrastructure using Terrafoam configuaration files , ensuring standerdized and scalable enviroments.`,
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
