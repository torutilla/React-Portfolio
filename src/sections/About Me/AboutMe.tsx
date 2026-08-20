import { useRef } from "react";
import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import SlideAnimationText from "../../components/common/texts/SlideAnimationText.tsx";
import Avatar from "../../components/layout/Avatar.tsx";
import TechStackButton from "../../components/layout/TechStackButton.tsx";
import useSlideAnimation from "../../hooks/useSlideAnimation.ts";
import TabContainer from "../../components/layout/TabContainer.tsx";
import imgMe from "../../assets/images/me.jpg";
import { CodeOff, Palette } from "@mui/icons-material";

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
    { heading: "Firebase", icon: "./" },
    { heading: "Arduino", icon: "./" },
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
      className="relative lg:min-h-[60vh] flex justify-center items-center p-3 w-dvw"
    >
      <div className="border rounded-[2.5rem] border-white/10 bg-black/20 backdrop-blur-3xl w-full flex justify-center p-6 lg:p-10 shadow-2xl">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col gap-2">
              {/* <p className="font-title text-xl uppercase tracking-wider text-gray-400">
                My Toolkit
              </p> */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <Avatar imgSrc={imgMe} ref={avatarRef} />
                <SlideAnimationText
                  style={{ size: "xl", variant: "title" }}
                  trigger="#About"
                  triggerOverrides={{ start: "top bottom-=20" }}
                >
                  Hi, I'm Christian
                </SlideAnimationText>
              </div>
            </div>

            <div className="w-full text-gray-300 leading-relaxed font-body">
              <SlideAnimationText
                style={{ size: "md", variant: "body" }}
                trigger="#About"
                triggerOverrides={{ start: "top bottom-=20" }}
              >
                I am a programmer and graphic designer with a strong interest in{" "}
                <strong className="text-white font-semibold">
                  UI design, media, and illustration
                </strong>
                . I enjoy blending technology and creativity to craft{" "}
                <strong className="text-white font-semibold">
                  intuitive interfaces
                </strong>
                , engaging visuals, and meaningful digital experiences.
              </SlideAnimationText>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 self-start lg:border-l lg:border-white/5 lg:pl-10">
            <WipeAnimator
              direction="left"
              trigger={{
                trigger: "#About",
                start: "center-=20 center",
              }}
            >
              <div className="w-full">
                <TabContainer
                  headingStyle={{ size: "sm", variant: "title" }}
                  tabs={[
                    {
                      heading: <CodeOff className="text-xl" />,
                      content: (
                        <div className="w-full flex flex-wrap gap-2.5 pt-4">
                          {developmentStack.map((tech, index) => (
                            <TechStackButton
                              key={index}
                              heading={tech.heading}
                            />
                          ))}
                        </div>
                      ),
                    },
                    {
                      heading: <Palette className="text-xl" />,
                      content: (
                        <div className="w-full flex flex-wrap gap-2.5 pt-4">
                          {designStack.map((tech, index) => (
                            <TechStackButton
                              key={index}
                              heading={tech.heading}
                            />
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </WipeAnimator>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
