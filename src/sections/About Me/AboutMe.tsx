import { useRef } from "react";
import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import SlideAnimationText from "../../components/common/texts/SlideAnimationText.tsx";
import Avatar from "../../components/layout/Avatar.tsx";
import TechStackButton from "../../components/layout/TechStackButton.tsx";
import useSlideAnimation from "../../hooks/useSlideAnimation.ts";

function AboutMe() {
  const stack = [
    { heading: "TypeScript", icon: "./" },
    { heading: "JavaScript", icon: "./" },
    { heading: "Flutter/Dart", icon: "./" },
    { heading: "Python", icon: "./" },
    { heading: "HTML", icon: "./" },
    { heading: "CSS", icon: "./" },
    { heading: "Tailwind", icon: "./" },
    { heading: "Godot Engine", icon: "./" },
    { heading: "Node.js", icon: "./" },
    { heading: "Express.js", icon: "./" },
  ];
  const avatarRef = useRef<HTMLDivElement>(null);
  useSlideAnimation("#About", avatarRef);
  return (
    <div
      id="About"
      className="relative lg:h-[50dvh] flex justify-center p-3 w-dvw"
    >
      <div className="border rounded-3xl border-gray-400/75 bg-black/30 backdrop-blur-3xl w-full h-full flex justify-center p-3">
        <div className="grid w-full h-full grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 p-3 lg:p-6 lg:gap-10">
          <div className="col-span-2 flex flex-col gap-3 items-center lg:items-start">
            <Avatar imgSrc="./src/assets/images/me.jpg" ref={avatarRef} />
            <div className="flex flex-col items-center lg:items-start w-full">
              <SlideAnimationText
                style={{ size: "xl", variant: "title" }}
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
          <div className="flex flex-col justify-evenly lg:justify-self-start">
            <WipeAnimator
              direction="left"
              trigger={{ trigger: "#About", start: "top center" }}
            >
              <p className="font-title text-2xl text-text w-fit">Tech Stack</p>
            </WipeAnimator>

            <div className="flex flex-wrap gap-2">
              {stack.map((tech, index) => {
                return (
                  <TechStackButton
                    key={index}
                    heading={tech.heading}
                  ></TechStackButton>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
