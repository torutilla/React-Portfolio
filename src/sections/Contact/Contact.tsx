import SlideAnimationText from "../../components/common/texts/SlideAnimationText.tsx";
import TitleText from "../../components/common/texts/TitleText.tsx";
import Socials from "../../components/layout/Socials.tsx";

function Contact() {
  const overrides: ScrollTrigger.Vars = {
    start: "center bottom",
    end: "bottom bottom",
  };
  return (
    <div id="Contact" className="relative h-[70vh] lg:h-[50vh] w-screen p-6">
      <TitleText
        text="Get in Touch"
        trigger="#Contact"
        override={{ start: "top+=20% bottom" }}
      ></TitleText>
      <div className="h-full p-3 flex flex-col justify-around">
        <div>
          <SlideAnimationText
            style={{
              size: "lg",
              variant: "subtitle",
              weight: "bold",
              color: "primary",
            }}
            trigger="#Contact"
            triggerOverrides={overrides}
          >
            Hey! I’d love to hear from you
          </SlideAnimationText>
          <SlideAnimationText
            style={{ size: "md", variant: "body", weight: "light" }}
            trigger="#Contact"
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

export default Contact;
