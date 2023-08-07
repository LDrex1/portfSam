import { Puzzle } from "@/assets/svgs/Icons";
import ImageCard from "@/components/cards/ImageCard";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/custom-comps/Button";
import Gallery from "@/components/gallery/Gallery";
import Reviews from "@/components/reviews/Reviews";
import Typography, {
  Body,
  H1,
  H3,
  Title,
} from "@/components/typography/Typography";
import { landing, projects, skills, workExp } from "@/lib/landing/landContent";

export default function Home() {
  const { greeting, myPicture, cvLink, intro } = landing.section1;
  const Section1 = () => {
    return (
      <section className="bg-bright px-4 pt-16 sm:pt-20 pb-12 lg:pt-0 lg:flex lg:flex-col lg:justify-center lg:h-[90vh] md:px-10 lg:px-28">
        <div className="flex flex-col md:gap-x-[calc(14px+4vw)] md:grid-cols-[minmax(350px,_700px)_minmax(300px,_400px)] lg:justify-between items-center md:grid lg:grid-cols-[minmax(200px,_700px)_minmax(200px,_500px)] md:grid-flow-dense lg:gap-x-[calc(14px+7vw)]">
          <div>
            <H1
              styTail="w-fit bg-gradient-to-r from-[#012760] to-[#4859f2] bg-gradient-170 bg-clip-text text-transparent"
              text={greeting}
            />
            <Body styTail="mt-2 md:mt-3 lg:mt-9" text={intro} />
            <Button
              styTail="mt-5 md:mt-7 mb-9 md:mb-0 ms-8 md:ms-0 lg:mt-16 text-white shadow-shade1"
              text="Download Resume"
              background="purple"
              bRadius="lg"
            />
          </div>

          <ImageCard
            src={""}
            alt={""}
            styTail="mix-blend-multiply  md:rounded-3xl lg:rounded-[90px] md:justify-self-center lg:justify-self-end"
            type={"short"}
          />
        </div>
      </section>
    );
  };

  const Section2 = () => {
    return (
      <section className="py-6 lg:h-[100vh] md:py-10 py-15 bg-bright-yellow md:grid grid-cols-5 lg:px-28 items-center md:gap-x-6 lg:gap-x-36 justify-between px-4 sm:px-9">
        <div className="col-span-2 flex flex-col gap-y-7">
          <H3 color="text-primary2" text="My Skills" />
          <Body text={intro} />
        </div>
        <div
          id="skills"
          className="col-span-3 grid mt-4 md:mt-0 sm:grid-cols-2 gap-x-2 gap-y-2 md:gap-x-4 lg:gap-x-6 lg:gap-y-6"
        >
          {skills.map(({ skill, description, icon }) => (
            <div
              key={skill}
              className="bg-white flex flex-col items-center px-7 md:px-6 lg:px-8 py-3 md:py-6 lg:py-8"
            >
              <div className="text-[50px] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                {icon}
              </div>
              <Title
                styTail="text-center"
                medium
                color="text-primary2"
                text={skill}
              />
              <Body
                styTail="py-3 md:py-5 lg:py-7 justify-self-start"
                color="text-grey"
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
      <section className="bg-white px-4 sm:px-6 md:px-8 flex flex-col py-6 lg:py-20 lg:h-[100vh] sm:py-10 md:py-15 lg:px-28">
        <div className="sm:grid grid-cols-2 gap">
          <div id="resume" className="">
            <H3 text="Work Experience" color="text-primary2" />

            <div className="relative mt-4 md:mt-6 flex flex-col gap-y-3 sm:gap-y-6 md:gap-y-7 lg:gap-y-9">
              <span className="absolute w-1 border-dashed border-r-2 h-full left-4 top-0"></span>

              {workExp.map(({ company, role, startDate, endDate, logo }) => (
                <div key={company} className="flex gap-x-3">
                  <span>logo</span>
                  <div>
                    <Typography
                      styTail="sm:text-[22px] lg:text-[26px]"
                      text={company}
                      textType={"light-text"}
                      fontSize={"text-md"}
                      fontWeight={"text-v-high"}
                    />
                    <Body text={role} />
                    <Body text={`${startDate} - ${endDate}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 sm:mt-0 justify justify-self-end">
            <H3 text="Education" color="text-primary2" />
            <div className="relative mt-4 md:mt-6 gap-y-3 sm:gap-y-6 md:gap-y-7 flex flex-col lg:gap-y-9">
              <span className="absolute w-1 border-r-2 border-dashed h-full left-4 top-0"></span>

              {workExp.map(({ company, role, startDate, endDate, logo }) => (
                <div key={company} className="flex gap-x-3">
                  <span>logo</span>
                  <div>
                    <Typography
                      styTail="sm:text-[22px] lg:text-[26px]"
                      text={"Kwame Nkrumah University"}
                      textType={"light-text"}
                      fontSize={"text-md"}
                      fontWeight={"text-v-high"}
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

  const Section4 = () => {
    return (
      <section
        id="projects"
        className="bg-primary1 pt-3 sm:pt-6 md:pt-10 pb-4 sm:pb-8 md:pb-11 lg:pb-20 px-4 sm:px-6 md:px-8 lg:pt-16 lg:px-28 flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-8"
      >
        <H3 color="text-white" text="Projects" />
        {projects.map((project) => (
          <div className="bg-white-lin rounded-xl md:rounded-3xl">
            <div className="m-1 bg-dark-rad bg-opacity-30 rounded-xl md:rounded-3xl">
              <ProjectCard project={project} styTail="items-center" />
            </div>
          </div>
        ))}
      </section>
    );
  };

  const Section5 = () => {
    return (
      <section className="bg-white px-4 sm:px-6 md:px-8 lg:pt-16 lg:px-28 flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-8">
        <Typography
          styTail="text-[26px] md:text-[30px] lg:text-[40px] font-medium"
          color="text-primary2"
          text="Sharing some beautiful moments with you"
        />
        <Gallery />
      </section>
    );
  };

  const Section6 = () => {
    return (
      <section
        id="testimonials"
        className="bg-sky-blue py-6 sm:py-10 md:py-15 px-4 sm:px-6 md:px-8 lg:pt-16 lg:px-28 flex flex-col md:flex-row md:gap-x-9 lg:gap-x-10"
      >
        <Typography
          styTail="w-full shrink-1 grow-1 basis-[50%] sm:min-w-[180px] lg:min-w-[230px] lg:max-w-[450px] text-[26px] md:text-[30px] lg:text-[40px] font-medium"
          color="text-primary2"
          text="Hear from cool people I worked with"
        />
        <Reviews />
      </section>
    );
  };
  return (
    <main className="">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
