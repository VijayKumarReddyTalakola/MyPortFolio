import React from 'react'

const Wave = () => {
  return (
    <div className="lg:mt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        className=" w-full h-18 sm:h-20 lg:h-[15vh]"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g class="waves">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="#f5f5f5"
            fill-opacity=".2"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            fill="#f5f5f5"
            fill-opacity=".5"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            fill="#f5f5f5"
            fill-opacity=".9"
          />
        </g>
      </svg>
    </div>
  );
}

export default Wave