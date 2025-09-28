interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  const adaptiveSize = `clamp(${(size - (size * 0.2) )/ 16}rem, 4vw, ${size / 16}rem)`
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      style={{
        width: adaptiveSize,
        height: adaptiveSize,
        objectFit: "contain",
        objectPosition: "center",
      }}
      {...props}
    />
  );
};
