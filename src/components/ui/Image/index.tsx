interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width: number,
  height?: number
}

export const Image: React.FC<ImageProps> = ({ src, width, height, ...props }) => {
  return (
    <img
      src={`/${src}.png`}
      style={{
        width: `${width / 16}rem`,
        height: `${height ? (height / 16) : (width / 16)}rem`,
        objectFit: 'contain',
        objectPosition: 'center'
      }}
      {...props}
    />
  );
};
