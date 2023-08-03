import React from "react";
import {
  ColorsType,
  FontSizeType,
  FontWeightType,
} from "../../lib/style-variables/styleVar";

type TypographyProp = {
  text: string;
  textType: "light-text" | "high-emphasis";
  fontSize: FontSizeType;
  fontWeight: FontWeightType;
};

type BodyProp = {
  text: string;
  medium?: true | false;
  color?: ColorsType;
  styTail?: string;
};

export const H1 = ({ text, medium, color }: BodyProp) => {
  const className = `font-bold text-3xl ${
    medium && "font-medium"
  } text-${color}`;
  return <h1 className={className}>{text}</h1>;
};
export const H2 = ({ text, medium, color }: BodyProp) => {
  const className = `font-semibold text-2xl ${medium && "font-medium"} ${
    color || "high-emphasis"
  } text-${color}`;
  return <h2 className={className}>{text}</h2>;
};
export const H3 = ({ text, medium, color }: BodyProp) => {
  const className = `font-semibold text-xl ${
    medium && "font-medium"
  } text-${color}`;
  return <h3 className={className}>{text}</h3>;
};
export const Body = ({ text, medium, color, styTail }: BodyProp) => {
  const className = `text-base font-normal ${medium && "font-medium"} text-${
    color ? color : "grey"
  } ${styTail}`;
  return <p className={className}>{text}</p>;
};
export const Title = ({ text, medium, color, styTail }: BodyProp) => {
  const className = `font-md ${
    medium && "font-semibold"
  } text-${color} ${styTail}`;
  return <p className={className}>{text}</p>;
};
export default function Typography({
  textType,
  text,
  fontSize,
  fontWeight,
}: TypographyProp): React.ReactNode {
  const className = `${textType}, ${fontSize} ${fontWeight}`;
  return <p className={className}>{text}</p>;
}
