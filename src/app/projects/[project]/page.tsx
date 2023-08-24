import ImageCard from "@/components/cards/ImageCard";
import { Body, H3 } from "@/components/typography/Typography";
import { projects } from "@/lib/landing/landContent";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { project: String };
}) {
  return {
    title: params.project,
  };
}

function Projects({ params }: { params: { project: string } }) {
  const projectTitle = params?.project.replace(/%20/g, " ");
  const { details } = projects.filter(({ title }) => title === projectTitle)[0];
  const {
    overview,
    deliverables,
    "Technologies-and-tools": tech,
    "key-learnings": keys,
  } = details;
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

  const Details = () => {
    return (
      <section className="mt-1 sm:mt-3 md:mt-4 lg:mt-7 xl:mt-8 mb-8 md:mb-20 lg:mb-24 xl:mb-28 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28">
        <article>
          <div>
            <H3 color="text-primary1" text="Overview" />
            {overview.par1 && <Body text={overview.par1} />}
            {overview.par2 && <Body text={overview.par2} />}
          </div>
          <div>
            <H3 color="text-primary1" text="Deliverables" />
            {deliverables.par1 && <Body text={deliverables.par1} />}
            {deliverables.li1.length && (
              <ul className="text-grey list-disc list-inside">
                {deliverables.li1.map((point) => (
                  <li key={point} className="">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {deliverables.par2 && <Body text={deliverables.par2} />}
            {deliverables.li2?.length && (
              <ul>
                {deliverables.li2.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            {deliverables.par3 && <Body text={deliverables.par3} />}
          </div>
          <div>
            <H3 color="text-primary1" text="Technologies and Tools" />

            <Body text={tech.join(", ")} />
          </div>
          <div>
            <H3 color="text-primary1" text="Key Learnings" />
            <ul>
              {Object.keys(keys).map((key) => (
                <li key={key} className="">
                  <span className="font-semibold w-fit">{key}:</span>
                  <Body text={keys[key]} />
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    );
  };

  return (
    <div>
      <Hero />
      <Details />
    </div>
  );
}

export default Projects;
