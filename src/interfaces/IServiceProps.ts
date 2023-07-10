import { StaticImageData } from "next/image";
import { AnchorHTMLAttributes } from "react";


interface IServiceProps {
  title: string;
  text: string;
  src: StaticImageData;
  imgWidth: number;
  imgSide?: 'left' | 'right';
  button?: boolean;
  link?: any;
  buttonText?: string;
}

export default IServiceProps;
