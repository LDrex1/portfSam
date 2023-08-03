import { Braduis, ColorsType } from "@/lib/style-variables/styleVar";

type ButtonProp = {
  text: string;
  background: ColorsType;
  bRadius: Braduis;
  color?: ColorsType;
  medium?: boolean;
  styTail?: string;
};
export function Button({
  text,
  background,
  bRadius,
  color,
  medium,
  styTail,
}: ButtonProp) {
  const className = `bg-${
    background[0] === "#" ? `[${background}]` : background
  }  text-${color} ${
    medium && "font-medium"
  } py-3 px-4 rounded-s-3xl rounded-e-3xl ${styTail}`;
  return <button className={className}>{text}</button>;
}

export default Button;
