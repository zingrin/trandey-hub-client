export default function Logo() {
  return (
    <svg
      viewBox="0 0 900 220"
      width="320"           
      height="90"          
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Trendy Product Hub logo"
    >
      {/* Left monogram "Th" */}
      <g transform="translate(40,40)">
        <text
          x="0"
          y="90"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="110"
          fontWeight="700"
          fill="#f5738a"
        >
          T
        </text>

        <text
          x="52"
          y="110"
          fontFamily="Comic Sans MS, 'Brush Script MT', cursive"
          fontSize="88"
          fontWeight="700"
          fill="#f5738a"
        >
          h
        </text>

        <path
          d="M6 128 C 40 160, 90 160, 120 130"
          fill="none"
          stroke="#f5738a"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
      </g>

      {/* Divider line */}
      <line
        x1="260"
        y1="20"
        x2="260"
        y2="200"
        stroke="#e0b755"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Right side text */}
      <g transform="translate(290,40)" fontFamily="Arial, Helvetica, sans-serif">
        <text
          x="0"
          y="45"
          fontSize="30"
          letterSpacing="6"
          fill="#e0b755"
          fontWeight="700"
        >
          TRENDY
        </text>

        <g transform="translate(0,25)">
          {/* Bag icon */}
          <g transform="translate(0,58)">
            <rect
              x="0"
              y="0"
              width="38"
              height="40"
              rx="6"
              ry="6"
              fill="#f5738a"
            />
            <path
              d="M 10 0 C 10 -12, 28 -12, 28 0"
              fill="none"
              stroke="#e0b755"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          <text
            x="48"
            y="98"
            fontSize="44"
            fill="#e0b755"
            fontWeight="700"
          >
            PRODUCT
          </text>
        </g>

        <text
          x="0"
          y="155"
          fontSize="28"
          fill="#e0b755"
          fontWeight="600"
          letterSpacing="4"
        >
          HUB
        </text>
      </g>

      <path
        d="M 350 165 H 760"
        stroke="#e0b755"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
