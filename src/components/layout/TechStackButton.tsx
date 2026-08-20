type TechStackButtonProps = {
  heading: string;
  icon?: React.ReactNode;
};

function TechStackButton({ heading }: TechStackButtonProps) {
  return (
    <span
      key={heading}
      className="px-3 py-2 bg-surface border border-border/10 font-body text-sm text-secondary-text transition-colors duration-300 hover:text-text hover:border-primary/50"
    >
      {heading}
    </span>
  );
}

export default TechStackButton;
