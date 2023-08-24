import React from "react";
interface HeadProps {
  params: { project: string };
}

function head({ params }: HeadProps) {
  return (
    <>
      <title>title shown</title>;
    </>
  );
}

export default head;
