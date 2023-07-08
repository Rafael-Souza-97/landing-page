import { StaticImageData } from "next/image";

interface ITestimonialProps {
  testimonial: string;
  src: StaticImageData;
  person: string;
  job: string;
}

export default ITestimonialProps;
