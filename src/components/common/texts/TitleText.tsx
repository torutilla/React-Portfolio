import SlideAnimationText from "./SlideAnimationText.tsx";

type TitleTextProps = {
  text: string;
  override?: ScrollTrigger.Vars;
};
function TitleText({ text, override }: TitleTextProps) {
  return (
    <SlideAnimationText
      style={{ size: "2xl", variant: "title", color: "text" }}
      triggerOverrides={override}
    >
      {text}
    </SlideAnimationText>
  );
}

export default TitleText;
