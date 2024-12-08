// Define interface for each Visa Service
interface VisaService {
  id: number;
  image: string; // Image URL or path
  heading: string;
  subheading: string;
  action: {
    label: string; // Button text
    link: string; // URL to navigate to
  };
}

// Visa services data array
const visaServices: VisaService[] = [
  {
    id: 1,
    image: "/assets/tourist.jpg",
    heading: "Tourist Visa",
    subheading: "Explore the world with ease by applying for a tourist visa.",
    action: {
      label: "Learn More",
      link: "/services/tourist-visa",
    },
  },
  {
    id: 2,
    image: "/assets/business.jpg",
    heading: "Business Visa",
    subheading: "Travel for business with confidence and simplicity.",
    action: {
      label: "Learn More",
      link: "/services/business-visa",
    },
  },
  {
    id: 3,
    image: "/assets/study.jpg",
    heading: "Student Visa",
    subheading: "Pursue your education abroad with a smooth visa process.",
    action: {
      label: "Learn More",
      link: "/services/student-visa",
    },
  },
  {
    id: 4,
    image: "/assets/immigration.jpg",
    heading: "Work Visa",
    subheading: "Achieve your career goals with work visa assistance.",
    action: {
      label: "Learn More",
      link: "/services/work-visa",
    },
  },
  {
    id: 5,
    image: "/assets/residence.jpg",
    heading: "Permanent Residency Visa",
    subheading: "Settle in your desired country with our PR visa services.",
    action: {
      label: "Learn More",
      link: "/services/permanent-residency-visa",
    },
  },
];

export default visaServices;
