import "./Button.css";
import { type MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
