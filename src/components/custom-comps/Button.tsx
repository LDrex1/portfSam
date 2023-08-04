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
  //   const bg = background[0] !== "#" ? background : `[${background}]`;
  //   const textColor = color || "";
  //   const mid = (medium && "font-medium") || "";
  const purpleButton = `bg-purple text-white font-bold py-3 px-6 rounded-s-3xl rounded-e-3xl ${
    styTail || ""
  }`;
  const className = background === "purple" ? purpleButton : "";
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
}

export default Button;
