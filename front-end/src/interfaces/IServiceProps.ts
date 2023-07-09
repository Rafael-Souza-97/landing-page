import { StaticImageData } from "next/image";

interface IServiceProps {
  title: string;
  text: string;
  src: StaticImageData;
  imgWidth: number;
  imgSide?: 'left' | 'right';
}

export default IServiceProps;
