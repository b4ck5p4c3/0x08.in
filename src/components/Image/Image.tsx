import NextImage, { ImageProps } from "next/image";

const customLoader = ({ src }) => {
  return src
}

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}
