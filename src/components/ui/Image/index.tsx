export const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ 
  src,
  width,
  height,
  ...props 
}) => {
  const imgWidth = typeof width == 'number' ? `${width / 16}rem`: ''
  return (
    <img
      src={`/${src}.png`}
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
