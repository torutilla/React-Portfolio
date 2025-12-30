type TechStackButtonProps = {
  heading: string;
  icon?: React.ReactNode;
};

function TechStackButton({ heading }: TechStackButtonProps) {
  return (
    <button className="rounded-full bg-background text-text font-light font-body p-1 pl-2 pr-2 cursor-pointer">
      {heading}
    </button>
  );
}

export default TechStackButton;
