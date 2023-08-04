export type ReviewProp = {
  company: string;
  name: string;
  comment: string;
};

const allReviews: ReviewProp[] = [
  {
    company: "ABC Company",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ncididunt  elit, sed do  it, sed do it, sed do",
  },
  {
    company: "ABC Company",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ncididunt  elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ncididunt  elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    company: "ABC company",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ncididunt  elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ncididunt  elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
  },
  {
    company: "ABC Company",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt  elit, sed do eiusmod tempor incididunt ncididunt  elit, sed do  it, sed do it, sed do",
  },
];

export { allReviews };
