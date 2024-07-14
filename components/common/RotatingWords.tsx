export const RotatingWords = () => {
  return (
    <div className="flex items-center justify-center w-64 h-64 relative">
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
                  m -75, 0
                  a 75,75 0 1,1 150,0
                  a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text
          fill="#000"
          fontSize="15"
          fontWeight="bold"
          letterSpacing="3.7"
          className="uppercase"
        >
          <textPath xlinkHref="#circlePath" startOffset="0">
            Development // Design // Marketing //
          </textPath>
        </text>
      </svg>
      <div className="absolute flex items-center justify-center w-full h-full">
        <span className="text-6xl font-bold">U.</span>
      </div>
    </div>
  );
};
