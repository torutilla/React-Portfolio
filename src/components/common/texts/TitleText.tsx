import SlideAnimationText from "./SlideAnimationText.tsx";

type TitleTextProps = {
  text: string;
  trigger: string;
  override?: ScrollTrigger.Vars;
};
function TitleText({ text, trigger, override }: TitleTextProps) {
  return (
    <SlideAnimationText
      style={{ size: "2xl", variant: "title", color: "text" }}
      trigger={trigger}
      triggerOverrides={override}
    >
      {text}
    </SlideAnimationText>
  );
}

export default TitleText;
