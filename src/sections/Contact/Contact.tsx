import SlideAnimationText from "../../components/common/texts/SlideAnimationText.tsx";
import TitleText from "../../components/common/texts/TitleText.tsx";

function Contact() {
  return (
    <div id="Contact" className="relative h-[60dvh] w-screen">
      <div className="bg-background h-full p-6">
        <TitleText text="Get in Touch" trigger="#Contact"></TitleText>
        <SlideAnimationText
          style={{ size: "xl", variant: "subtitle" }}
          trigger="#Contact"
        >
          Hey! I’d love to hear from you
        </SlideAnimationText>
        <SlideAnimationText
          style={{ size: "lg", variant: "body" }}
          trigger="#Contact"
        >
          Whether you’re working on a project, want to collaborate, or just have
          a question — feel free to reach out.
        </SlideAnimationText>
      </div>
    </div>
  );
}

export default Contact;
