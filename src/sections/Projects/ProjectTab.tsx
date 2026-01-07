type ProjectTabProps = {
  children?: React.ReactNode;
};
function ProjectTab({ children }: ProjectTabProps) {
  return (
    <div className="w-full text-text grid mobile-xl:grid-cols-2 gap-3">
      {children}
    </div>
  );
}

export default ProjectTab;
