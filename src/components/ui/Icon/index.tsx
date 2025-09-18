interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      style={{
        width: `${size / 16}rem`,
        height: `${size / 16}rem`,
        objectFit: "contain",
        objectPosition: "center",
      }}
      {...props}
    />
  );
};
