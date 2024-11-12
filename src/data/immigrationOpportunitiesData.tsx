import { ImmigrationOpportunity } from "@/app/Types/allTypes";

const immigrationOpportunitiesData: ImmigrationOpportunity[] = [
  {
    id: 1,
    image: "/assets/study.jpg",
    title: "Skilled Migration",
    description: "Immigrate based on your skills and professional experience.",
    action: {
      label: "Explore Skilled Migration",
      link: "/opportunities/skilled-migration",
    },
  },
  {
    id: 2,
    image: "/assets/study.jpg",
    title: "Family Sponsorship",
    description:
      "Join family members who can sponsor your immigration journey.",
    action: {
      label: "Learn about Family Sponsorship",
      link: "/opportunities/family-sponsorship",
    },
  },
  {
    id: 3,
    image: "/assets/study.jpg",
    title: "Investment Visa",
    description:
      "Invest in the local economy and gain residency or citizenship.",
    action: {
      label: "See Investment Options",
      link: "/opportunities/investment-visa",
    },
  },
  {
    id: 4,
    image: "/assets/study.jpg",
    title: "Entrepreneur Visa",
    description:
      "Start or expand a business and create opportunities in a new country.",
    action: {
      label: "Entrepreneur Visa Details",
      link: "/opportunities/entrepreneur-visa",
    },
  },
  {
    id: 5,
    image: "/assets/study.jpg",
    title: "Student to PR Pathway",
    description:
      "Study abroad with a potential pathway to permanent residency.",
    action: {
      label: "Discover PR Pathway",
      link: "/opportunities/student-to-pr",
    },
  },
];

export default immigrationOpportunitiesData;
