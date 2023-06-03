interface arrowIconProps {
  color: string;
  className?: string;
  width: number;
  height: number;
}

export const ArrowIcon = ({
//   color,
  className,
  width,
  height,
}: arrowIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.8954 21.7901L22.0381 12.1398M22.0381 12.1398L12.1416 11.8936M22.0381 12.1398L21.7919 22.0362"
        stroke="#F1EABA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
