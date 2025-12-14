import svgPaths from "./svg";

export default function PrototypeIcon() {
  return (
    <svg
      width="41"
      height="47"
      viewBox="0 0 44 44"
      fill="none"
    > 
    {/* Background circle */}
    <circle
        cx="22.5"
        cy="18"
        r="21"
        fill="#4C5C68"
      />
      {/* Icon */}
      <path d={svgPaths.p20aa00d8} id="Line 4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
      <path d={svgPaths.p3aeda500} id="Vector 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
      <path d={svgPaths.p3e2a3f00} id="Vector 9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
        
      </svg>
  );
}
