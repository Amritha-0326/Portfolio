export function ResearchIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      {/* Background circle */}
      <circle
        cx="19"
        cy="19"
        r="19"
        fill="#4C5C68"
      />

      {/* Magnifier handle */}
      <line
        x1="20.5"
        y1="21.5"
        x2="27"
        y2="28"
        stroke="white"
        strokeWidth="2"
      />

      {/* Inner lens */}
      <circle
        cx="17"
        cy="17"
        r="6"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
