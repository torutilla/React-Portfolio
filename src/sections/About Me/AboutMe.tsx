import { useRef } from "react";
import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import SlideAnimationText from "../../components/common/texts/SlideAnimationText.tsx";
import Avatar from "../../components/layout/Avatar.tsx";
import TechStackButton from "../../components/layout/TechStackButton.tsx";
import useSlideAnimation from "../../hooks/useSlideAnimation.ts";
import TabContainer from "../../components/layout/TabContainer.tsx";
import imgMe from "../../assets/images/me.jpg";

function AboutMe() {
  const developmentStack = [
    { heading: "TypeScript", icon: "./" },
    { heading: "JavaScript", icon: "./" },
    { heading: "React", icon: "./" },
    { heading: "Flutter/Dart", icon: "./" },
    { heading: "Python", icon: "./" },
    { heading: "HTML", icon: "./" },
    { heading: "CSS", icon: "./" },
    { heading: "Tailwind", icon: "./" },
    { heading: "Godot Engine", icon: "./" },
    { heading: "Node.js", icon: "./" },
    { heading: "Express.js", icon: "./" },
  ];
  const designStack = [
    { heading: "Adobe Illustrator", icon: "./" },
    { heading: "Adobe Photoshop", icon: "./" },
    { heading: "Adobe InDesign", icon: "./" },
    { heading: "Aseprite", icon: "./" },
    { heading: "Figma", icon: "./" },
  ];
  const avatarRef = useRef<HTMLDivElement>(null);
  useSlideAnimation("#About", avatarRef);
  return (
    <div
      id="About"
      className="relative lg:h-[50vh] flex justify-center p-3 w-dvw"
    >
      <div className="border rounded-3xl border-gray-400/75 bg-black/30 backdrop-blur-3xl w-full h-full flex justify-center p-3">
        <div className="grid w-full h-full grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-8 p-3 lg:p-6 lg:gap-10">
          <div className="col-span-2 flex flex-col gap-3 items-center lg:items-start">
            <Avatar imgSrc={imgMe} ref={avatarRef} />
            <div className="flex flex-col items-center lg:items-start w-full">
              <SlideAnimationText
                style={{ size: "lg", variant: "title" }}
                trigger="#About"
                triggerOverrides={{ start: "top bottom-=20" }}
              >
                Hi, I'm Christian
              </SlideAnimationText>
              <SlideAnimationText
                style={{ size: "md", variant: "body" }}
                trigger="#About"
                triggerOverrides={{ start: "top bottom-=20" }}
              >
                I am a programmer and graphic designer with a strong interest in
                UI design, media, and illustration. I enjoy blending technology
                and creativity to craft intuitive interfaces, engaging visuals,
                and meaningful digital experiences.
              </SlideAnimationText>
            </div>
          </div>
          <div className="flex flex-col justify-evenly lg:justify-self-start gap-3">
            <WipeAnimator
              direction="left"
              trigger={{ trigger: "#About", start: "top center" }}
            >
              <p className="font-title text-xl text-text w-fit">My Toolkit</p>
            </WipeAnimator>
            <TabContainer
              headingStyle={{ size: "md", variant: "body" }}
              tabs={[
                {
                  heading: "Development",
                  content: (
                    <div className="w-full flex flex-wrap gap-2">
                      {developmentStack.map((tech, index) => (
                        <TechStackButton key={index} heading={tech.heading} />
                      ))}
                    </div>
                  ),
                },
                {
                  heading: "Graphic Design & UI",
                  content: (
                    <div className="w-full flex flex-wrap gap-2">
                      {designStack.map((tech, index) => (
                        <TechStackButton key={index} heading={tech.heading} />
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
