import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8, -2)">
      <g transform="translate(11, 5)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        <path
          /*d="M33 30 L42 30 C47 30 50 34 50 38 C50 42 47 46 42 46 L33 46 L33 61 L37 61 L37 46 L42 46 C45 46 47 44 47 38 C47 34 45 30 42 30 Z"
          fill="currentColor"*/
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
    <text x="30" y="70" fill="currentColor" fontSize="55px" fontFamily="Consolas, serif">
      P
    </text>
  </svg>
);

export default IconLogo;
