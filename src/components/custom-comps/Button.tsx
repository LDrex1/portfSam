import { Braduis, ColorsType } from "@/lib/style-variables/styleVar";
import { HtmlProps } from "next/dist/shared/lib/html-context";
import React from "react";

type ButtonProp = {
  text: string;
  background: ColorsType;
  bRadius: Braduis;
  color?: ColorsType;
  medium?: boolean;
  styTail?: string;
  type?: "button" | "submit" | "reset";
  icon?: typeof React.Component;
};
export function Button({
  text,
  background,
  bRadius,
  color,
  medium,
  styTail,
  type,
  icon: Icon,
  ...rest
}: ButtonProp & React.HtmlHTMLAttributes<HTMLButtonElement>) {
  //   const bg = background[0] !== "#" ? background : `[${background}]`;
  //   const textColor = color || "";
  //   const mid = (medium && "font-medium") || "";
  const purpleButton = `bg-purple ${
    Icon && "flex gap-x-2 items-center"
  } text-white font-bold px-4 py-2 md:px-4 md:py-3 lg:px-6 rounded-s-3xl rounded-e-3xl ${
    styTail || ""
  }`;
  const className = background === "purple" ? purpleButton : "";
  return (
    <button {...rest} type={type || "button"} className={className}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  );
}

export default Button;
