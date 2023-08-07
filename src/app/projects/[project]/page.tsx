import ImageCard from "@/components/cards/ImageCard";
import { H3 } from "@/components/typography/Typography";
import React from "react";

function Projects({ params }: { params: { project: string } }) {
  const projectTitle = params?.project.replace(/%20/g, " ");
  const Hero = () => {
    return (
      <section className="bg-primary1 flex flex-col text-center items-center pt-20 px-10 lg:px-16 sm:pt-24 lg:pt-24 lg:pb-12">
        <div className="w-full lg:p-4 max-w-[300px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[640px]">
          <ImageCard
            styTail="lg:max-w-none w-full"
            aspect="aspect-[1.78]"
            src={""}
            alt={""}
            type={"short"}
          />
          <H3 color="text-white" text={projectTitle || "Project Title"} />
        </div>
      </section>
    );
  };

  return (
    <div>
      <Hero />
    </div>
  );
}

export default Projects;
