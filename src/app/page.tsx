import ImageCard from "@/components/cards/ImageCard";
import Button from "@/components/custom-comps/Button";
import Typography, {
  Body,
  H1,
  H2,
  H3,
  Title,
} from "@/components/typography/Typography";
import { landing, skills, workExp } from "@/lib/landing/landContent";
import Image from "next/image";

export default function Home() {
  const { greeting, myPicture, cvLink, intro } = landing.section1;
  const Section1 = () => {
    return (
      <section className="bg-bright px-3 md:px-10 lg:px-28">
        <div className="flex flex-col mt-4 justify-between items-center md:grid md:grid-cols-[300px_minmax(400px,_1fr)_5px] md:grid-flow-dense md:justify-stretch md:gap-x-10 lg:gap-x-28">
          <ImageCard
            width={["[80%]", "[200px]", "[500px]"]}
            src={""}
            alt={""}
          />
          <div>
            <H1 text={greeting} />
            <Body text={intro} />
            <Button
              styTail="mt-5"
              text="Download CV"
              background={"primary1"}
              bRadius={"lg"}
            />
          </div>
        </div>
      </section>
    );
  };

  const Section2 = () => {
    return (
      <section className="py-6 md:h-[50vw] md:py-10 py-15 bg-bright-yellow grid grid-cols-5 lg:px-28 items-center gap-x-6 justify-between lg: px-4">
        <div className="col-span-2">
          <H3 color="primary2" text="My Skills" />
          <Body text={intro} />
        </div>
        <div className="col-span-3 grid sm:grid-cols-2 md:gap-x-4 lg:gap-x-6 lg:gap-y-6">
          {skills.map(({ skill, description, icon }) => (
            <div className="bg-white px-7 md:px-6 lg:px-8 py-3 md:py-6 lg:py-8">
              <Title
                styTail="text-center"
                medium
                color="primary2"
                text={skill}
              />
              <Body
                styTail="py-3 md:py-5 lg:py-7"
                color="grey"
                text={description}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  const Section3 = () => {
    return (
      <section className="bg-white flex flex-col justify-center py-6 md:h-[50vw] md:py-10 py-15 lg:px-28">
        <div className="md:grid grid-cols-2">
          <div className="">
            <H3 text="Work Experience" />
            <div className="mt-6 flex flex-col lg:gap-y-9">
              {workExp.map(({ company, role, startDate, endDate, logo }) => (
                <div key={company} className="flex gap-x-3">
                  <span>logo</span>
                  <div>
                    <Typography
                      text={company}
                      textType={"light-text"}
                      fontSize={"link"}
                      fontWeight={"v-high"}
                    />
                    <Body text={role} />
                    <Body text={`${startDate} - ${endDate}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="justify justify-self-end">
            <H3 text="Education" />
            <div className="mt-6 flex flex-col lg:gap-y-9">
              {workExp.map(({ company, role, startDate, endDate, logo }) => (
                <div key={company} className="flex gap-x-3">
                  <span>logo</span>
                  <div>
                    <Typography
                      text={"Kwame Nkrumah University"}
                      textType={"light-text"}
                      fontSize={"xl"}
                      fontWeight={"v-high"}
                    />
                    <Body text={role} />
                    <Body text={`${startDate} - ${endDate}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <main className="">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
