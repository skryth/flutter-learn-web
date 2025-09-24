interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  local?: boolean,
}
export const Image: React.FC<ImageProps> = ({ 
  src,
  width,
  height,
  local = true,
  ...props 
}) => {
  const imgWidth = typeof width == 'number' ? `${width / 16}rem`: ''
  return (
    <img
      src={local ? `/${src}.png` : src}
      style={{
        width: imgWidth,
        height: `${typeof height == 'number' ? (height / 16) : imgWidth}`,
        objectFit: 'contain',
        objectPosition: 'center'
      }}
      {...props}
    />
  );
};
