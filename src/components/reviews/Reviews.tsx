import React from "react";
// import { ReviewProp, } from "./reviews";
import Typography, { Body, Title } from "../typography/Typography";
import { ReviewProp, allReviews } from "./comments";

function Reviews() {
  return (
    <div className="flex flex-col md:grid gap-x-3 md:gap-x-5 w-full sm:w-[60vw] sm:min-w-[450px] md:min-w-[650px] lg:min-w-[550px] lg:gap-x-8 gap-y-6 md:gap-y-5 lg:gap-y-8 sm:grid-cols-2 sm:auto-rows-min">
      {allReviews.map(({ name, comment, company }: ReviewProp) => (
        <div className="bg-white h-fit pe-2 sm:pe-3 pt-4 pb-3 md:py-4 lg:pt-8 lg:py-6 ps-3 sm:ps-5 md:ps-6 lg:ps-8">
          <Body text={comment} />
          <Title styTail="mt-3 mb-2" medium color="text-dark" text={name} />
          <Typography styTail="font-medium" color="text-dark" text={company} />
        </div>
      ))}
    </div>
  );
}

export default Reviews;
