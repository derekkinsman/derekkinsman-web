export interface ImageProps {
  url: string;
  height: number;
  noContainer?: boolean;
  width: number;
  isBackground?: boolean;
  imgClassName?: string;
  alt?: string;
  className?: string;
  title?: string;
  responsiveImage: {
    alt: string;
    aspectRatio: number;
    base64: string;
    height: number;
    sizes: string;
    src: string;
    title?: string;
    width: number;
  };
}
