type DropdownItem = {
  heading: string;
  subtitle?: string | undefined;
  onClick: () => void;
};
type DropdownProps = {
  items: DropdownItem[];
};

function Dropdown({ items }: DropdownProps) {
  return (
    <div className="flex flex-col gap-2">
      <button className="bg-accent"></button>
      <ul className="">
        {items.map((item) => {
          return (
            <div className="flex flex-col gap-1">
              <p>{item.heading}</p>
              {item.subtitle && <p>{item.subtitle}</p>}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
