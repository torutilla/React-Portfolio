import SlideAnimationText from "../../components/common/texts/SlideAnimationText.tsx";
import TitleText from "../../components/common/texts/TitleText.tsx";
import Socials from "../../components/layout/Socials.tsx";

function ContactFooter() {
  const overrides: ScrollTrigger.Vars = {
    start: "top bottom",
    end: "bottom bottom-=10%",
    trigger: "#Contact",
  };
  return (
    <div
      id="Contact"
      className="relative w-screen p-6 min-h-[40dvh] lg:min-h-[50dvh] flex flex-col justify-evenly"
    >
      <div className="my-4">
        <TitleText
          text="Get in Touch"
          override={{
            start: "top bottom+=20%",
            trigger: "#Contact",
          }}
        />
      </div>
      <div className="h-full p-3 flex flex-col justify-around">
        <div className="my-2">
          <SlideAnimationText
            style={{
              size: "lg",
              variant: "subtitle",
              weight: "bold",
              color: "primary",
            }}
            triggerOverrides={overrides}
          >
            Hey! I’d love to hear from you
          </SlideAnimationText>
          <SlideAnimationText
            style={{ size: "md", variant: "body", weight: "light" }}
            triggerOverrides={overrides}
          >
            Whether you’re working on a project, want to collaborate, or just
            have a question — feel free to reach out.
          </SlideAnimationText>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default ContactFooter;
