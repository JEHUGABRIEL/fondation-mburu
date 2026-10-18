/** Line-and-fill palm tree, echoing the palm in the Mbûrü logo. Decorative only. */
export function PalmIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 320"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
        {/* trunk */}
        <path d="M112 318c-2-58 4-112 14-170" />
        <path d="M100 300h22M102 272h20M104 244h20M108 216h18M112 188h16M116 160h14" strokeWidth="4" />
      </g>
      <g fill="currentColor">
        {/* fronds */}
        <path d="M126 150c-30-34-74-46-118-30 40 2 74 16 102 40z" />
        <path d="M126 150c-14-44-44-76-84-92 26 30 44 62 52 100z" />
        <path d="M126 150c4-48 26-86 62-108-14 34-24 70-30 112z" />
        <path d="M126 150c30-30 70-40 110-28-38 6-72 22-98 46z" />
        <path d="M126 150c34-6 70 6 98 36-34-16-66-22-96-18z" />
        <path d="M126 150c-30-2-62 12-88 40 30-16 60-24 90-24z" />
      </g>
      <circle cx="126" cy="152" r="9" fill="currentColor" />
    </svg>
  );
}
