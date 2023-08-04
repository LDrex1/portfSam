import React from "react";
// import { ReviewProp, } from "./reviews";
import Typography, { Body, Title } from "../typography/Typography";
import { ReviewProp, allReviews } from "./comments";

function Reviews() {
  return (
    <div className="md:grid gap-x-3 md:gap-x-5 lg:gap-x-8 gap-y-3 md:gap-y-5 lg:gap-y-8 sm:grid-cols-2 sm:auto-rows-min">
      {allReviews.map(({ name, comment, company }: ReviewProp) => (
        <div className="bg-white h-fit pe-2 sm:pe-3 md:py-4 lg:py-8 ps-3 sm:ps-5 md:ps-6 lg:ps-8">
          <Body text={comment} />
          <Title styTail="mt-3 mb-2" color="text-dark" text={name} />
          <Typography color="text-dark" text={company} />
        </div>
      ))}
    </div>
  );
}

export default Reviews;
