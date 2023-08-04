import React from "react";
import {
  ColorsType,
  FontSizeType,
  FontWeightType,
} from "../../lib/style-variables/styleVar";

type TypographyProp = {
  text: string;
  textType?: "light-text" | "high-emphasis";
  fontSize?: `text-${FontSizeType}`;
  fontWeight?: `text-${FontWeightType}`;
  color?: `text-${ColorsType}`;
  styTail?: string;
};

type BodyProp = {
  text: string;
  medium?: true | false;
  color?: `text-${ColorsType}`;
  styTail?: string;
};

export const H1 = ({ text, medium, color, styTail }: BodyProp) => {
  const className = `font-bold text-[34px] lg:text-3xl md:text-xl ${
    medium && "font-medium"
  } ${color} ${styTail}`;
  return <h1 className={className}>{text}</h1>;
};
export const H2 = ({ text, medium, color }: BodyProp) => {
  const className = `font-semibold text-2xl ${medium && "font-medium"} ${
    color ? color : "text-high-emphasis"
  } `;
  return <h2 className={className}>{text}</h2>;
};
export const H3 = ({ text, medium, color }: BodyProp) => {
  const className = `font-semibold md:text-[37px] text-xl ${
    medium && "font-medium"
  } ${color}`;
  return <h3 className={className}>{text}</h3>;
};
export const Body = ({ text, medium, color, styTail }: BodyProp) => {
  const className = `text-base font-normal ${medium && "font-medium"} ${
    color || "text-grey"
  } ${styTail}`;
  return <p className={className}>{text}</p>;
};
export const Title = ({ text, medium, color, styTail }: BodyProp) => {
  const className = `text-md ${medium && "font-semibold"} ${color} ${styTail}`;
  return <p className={className}>{text}</p>;
};
export default function Typography({
  textType,
  text,
  fontSize,
  fontWeight,
  color,
  styTail,
}: TypographyProp): React.ReactNode {
  const className = `${textType}, ${fontSize} ${fontWeight} ${styTail}`;
  return <p className={className}>{text}</p>;
}
