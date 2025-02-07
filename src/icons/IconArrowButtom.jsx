export const IconArrowButton = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
      >
        <path
          opacity="0.4"
          d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
          stroke="#141B34"
          strokeWidth="1.5" // Cambié `stroke-width` a `strokeWidth` (camelCase)
          strokeLinecap="round" // Cambié `stroke-linecap` a `strokeLinecap` (camelCase)
          strokeLinejoin="round" // Cambié `stroke-linejoin` a `strokeLinejoin` (camelCase)
        />
        <path
          d="M12 15C13.5811 15 18 9.00005 18 9.00005"
          stroke="#141B34"
          strokeWidth="1.5" // Cambié `stroke-width` a `strokeWidth` (camelCase)
          strokeLinecap="round" // Cambié `stroke-linecap` a `strokeLinecap` (camelCase)
          strokeLinejoin="round" // Cambié `stroke-linejoin` a `strokeLinejoin` (camelCase)
        />
      </svg>
    );
};
  