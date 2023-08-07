"use client";
import { useRouter } from "next/navigation";
import { Body, Title } from "../typography/Typography";
import ImageCard from "./ImageCard";
import { Project } from "@/lib/landing/landContent";

function ProjectCard({
  styTail,
  project,
}: {
  styTail?: string;
  project: Project;
}) {
  const router = useRouter();
  const handleRoute = (): void => {
    router.push(`/projects/${project.title}`);
  };
  return (
    <div
      onClick={handleRoute}
      className="px-4 bg-primary1 bg-opacity-60 pt-5 rounded-xl md:rounded-3xl flex flex-col flex-1 items-center md:flex-row md:items-stretch md:gap-x-6 lg:gap-x-10 md:px-8 md:pt-10"
    >
      <ImageCard
        styTail={styTail}
        rounded="t-2xl"
        src={""}
        alt={""}
        aspect="aut"
        type={"long"}
      />
      <div className="flex flex-col sm:max-w-[550px] md:gap-y-4 md:justify-self-start lg:max-w-[552px] ">
        <Title
          styTail="text-[24px]"
          medium
          color="text-white"
          text={project.title}
        />
        <Body color="text-light-blue" text={project.about} />
      </div>
    </div>
  );
}

export default ProjectCard;
