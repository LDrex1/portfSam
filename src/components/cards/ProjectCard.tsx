import { Body, Title } from "../typography/Typography";
import ImageCard from "./ImageCard";

function ProjectCard({ styTail }: { styTail?: string }) {
  return (
    <div className="bg-primary1-white px-4 pt-5 rounded-2xl flex flex-col flex-1 items-center md:flex-row md:items-stretch md:gap-x-6 lg:gap-x-10 md:px-8 md:pt-10">
      <ImageCard
        styTail={styTail}
        rounded="t-2xl"
        src={""}
        alt={""}
        aspect="aut"
        type={"long"}
      />
      <div className="flex flex-col md:gap-y-4 md:justify-self-start">
        <Title
          styTail="text-[24px]"
          medium
          color="text-white"
          text={"Projects Title"}
        />
        <Body
          color="text-light-blue"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
