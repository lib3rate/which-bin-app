import React from "react";
import styled, { keyframes } from "styled-components";

const Tree = (props) => {
  // const currentScore = props.treeTotal;
  const currentScore = 150;
  // console.log(currentScore);
  // const
  let startingBaseNumber = 0;
  let startingBaseLeavesNumber = 0;
  let startingRightBranchNumber = 0;
  let startingLeftBranchNumber = 0;
  let endingBaseNumber = 0;
  let endingBaseLeavesNumber = 0;
  let endingRightBranchNumber = 0;
  let endingLeftBranchNumber = 0;

  if (currentScore < 100) {
    startingBaseNumber = 1000;
    startingBaseLeavesNumber = 1000;
    startingRightBranchNumber = 1000;
    startingLeftBranchNumber = 1000;
    endingBaseNumber = 0;
    endingBaseLeavesNumber = 1000;
    endingRightBranchNumber = 1000;
    endingLeftBranchNumber = 1000;
  } else if (currentScore >= 100 && currentScore < 200) {
    startingBaseNumber = 1000;
    startingBaseLeavesNumber = 1000;
    startingRightBranchNumber = 1000;
    startingLeftBranchNumber = 1000;
    endingBaseNumber = 0;
    endingBaseLeavesNumber = 0;
    endingRightBranchNumber = 1000;
    endingLeftBranchNumber = 1000;
  } else if (currentScore >= 200 && currentScore < 300) {
    startingBaseNumber = 1000;
    startingBaseLeavesNumber = 1000;
    startingRightBranchNumber = 1000;
    startingLeftBranchNumber = 1000;
    endingBaseNumber = 0;
    endingBaseLeavesNumber = 0;
    endingRightBranchNumber = 0;
    endingLeftBranchNumber = 1000;
  } else if (currentScore >= 300 && currentScore < 400) {
    startingBaseNumber = 1000;
    startingBaseLeavesNumber = 1000;
    startingRightBranchNumber = 1000;
    startingLeftBranchNumber = 1000;
    endingBaseNumber = 0;
    endingBaseLeavesNumber = 0;
    endingRightBranchNumber = 0;
    endingLeftBranchNumber = 0;
  }

  return (
    <StyledTree
      currentScore={currentScore}
      startingBaseNumber={startingBaseNumber}
      startingBaseLeavesNumber={startingBaseLeavesNumber}
      startingRightBranchNumber={startingRightBranchNumber}
      startingLeftBranchNumber={startingLeftBranchNumber}
      endingBaseNumber={endingBaseNumber}
      endingBaseLeavesNumber={endingBaseLeavesNumber}
      endingRightBranchNumber={endingRightBranchNumber}
      endingLeftBranchNumber={endingLeftBranchNumber}
    >
      {/* // <StyledTree> */}
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 267.44 452.56"
        height="300"
      >
        <title>test-tree</title>
        <g id="base">
          <path
            d="M289.47,487.25a150.44,150.44,0,0,1-11.76-65c.95-22.31,7.43-43.2,16.73-63.36,8.55-18.55,18.61-36.46,25.32-55.81a129.86,129.86,0,0,0-16.27-118.19c-1.1-1.57-3.71-.07-2.59,1.51C325.28,221,330.38,265.12,316,304.69c-7.29,20.08-18.06,38.64-26.63,58.16-8.19,18.66-13.64,38.09-14.63,58.52a153.82,153.82,0,0,0,12.14,67.39c.75,1.77,3.34.24,2.59-1.51Z"
            transform="translate(-154.91 -37)"
          />
        </g>
        <g id="rightBranch">
          <path
            d="M325.8,289.42c2.1-14.82,4.21-29.88,9.62-43.92,5.63-14.61,15.47-26.32,25.11-38.42,8.34-10.47,15.64-21.41,20.18-34.09a115.78,115.78,0,0,0,6.41-39.75,151.57,151.57,0,0,0-7.81-45.93c-.6-1.83-3.5-1-2.89.8,11.13,34.07,11.61,73.42-8.69,104.25-9.76,14.83-23,27.23-31.14,43.16-8.4,16.48-11.1,35-13.67,53.11-.27,1.89,2.62,2.7,2.89.8Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M371.31,187.74c8.21-23.21,1.33-50.13-20.75-62.79a1.52,1.52,0,0,0-2.2.9c-4.91,20.33,5.41,42.43,24.3,51.53,1.73.83,3.25-1.75,1.51-2.59-17.67-8.51-27.53-29-22.92-48.14l-2.2.9c21,12,27.14,37.44,19.37,59.4-.65,1.82,2.25,2.61,2.89.8Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M379.59,86.93a81.05,81.05,0,0,1,23.89-47.39l-2.36-.3c4.31,9.54,8.85,21.85,2.84,31.67-5.68,9.27-17.79,14.39-28.07,16l1.85,1A44.31,44.31,0,0,0,347,54.05a1.52,1.52,0,0,0-1.69.69c-4.49,8.72-2.37,19.17,4.14,26.32,7.36,8.09,18.87,10.5,29.38,10,1.92-.09,1.93-3.09,0-3-8.71.39-17.8-1.13-24.72-6.78-7.3-6-10.65-16.41-6.2-25.05l-1.69.69a41.31,41.31,0,0,1,28.66,31.8,1.54,1.54,0,0,0,1.85,1c11.44-1.78,25-8,30.63-18.72s.94-23.27-3.61-33.34a1.51,1.51,0,0,0-2.36-.3A83.64,83.64,0,0,0,376.7,86.13c-.26,1.89,2.63,2.7,2.89.8Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M388.75,152.32A51.69,51.69,0,0,1,420,115.79l-1.85-1c3.4,8.84-.91,18.13-8,23.75-7.38,5.85-16.88,8-25.86,10.07-1.88.44-1.08,3.33.8,2.89,10.49-2.44,22.06-5.15,29.82-13.2,6.2-6.42,9.45-15.73,6.14-24.32a1.52,1.52,0,0,0-1.85-1,54.8,54.8,0,0,0-33.34,38.63c-.43,1.88,2.46,2.68,2.89.8Z"
            transform="translate(-154.91 -37)"
          />
        </g>
        <g id="baseLeaves">
          <path
            d="M285.26,372.24a47,47,0,0,0-4.41-33.34c-3.11-5.7-6.95-11-10.07-16.67a142.33,142.33,0,0,1-8.93-19.9,1.52,1.52,0,0,0-2.74-.36c-7.61,10.44-10.78,24.8-5.9,37.09,5.72,14.39,21.72,17.3,30.37,29,1.14,1.53,3.74,0,2.59-1.51-7.59-10.22-21.5-13.57-28.17-24.51-7.31-12-4.21-27.66,3.7-38.5l-2.74-.36a158.51,158.51,0,0,0,15.65,31.24c7.31,11.47,10.88,23.51,7.76,37.07-.43,1.88,2.46,2.68,2.89.8Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M304.7,185.86a56.58,56.58,0,0,0-9.16-42.23,58,58,0,0,0-16.32-15.39,82.72,82.72,0,0,0-11.71-6.72c-1.82-.78-3.91-1.76-5.73-.32s-1.49,4-1.43,6a103.69,103.69,0,0,0,1.18,12.51,74.66,74.66,0,0,0,8.09,24.9c7.18,13,19.63,23.18,34.57,25.28,1.89.27,2.7-2.63.8-2.89-12.84-1.8-23.75-9.73-30.74-20.5a64.05,64.05,0,0,1-8.11-19.08A87.75,87.75,0,0,1,264,135.86q-.3-2.59-.48-5.2c-.06-.83-.65-4.47-.24-5.2,1.84-3.34,8.06,1.55,10.1,2.73a88.3,88.3,0,0,1,7.8,5,51.46,51.46,0,0,1,13.4,14.41,53.47,53.47,0,0,1,7.22,37.43c-.34,1.89,2.55,2.7,2.89.8Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M324,299c-1.16-10.79,10.64-15.72,18.6-19.78,8.9-4.55,18.12-8.32,28.31-7.84l-1.45-1.1c2.06,12.74,4.19,33.23-11.64,38.44-3,1-6.38,1-9.53,1.45-4.05.59-8.07,1.59-12.17,1.81-7.18.39-16.8-3-16.06-11.75.16-1.92-2.84-1.91-3,0-.56,6.7,4.57,11.94,10.67,13.9,4,1.28,8.3,1,12.38.43,5.61-.79,11.48-1.29,17-2.54,19.05-4.35,17.63-27.85,15.26-42.53a1.51,1.51,0,0,0-1.45-1.1c-11.95-.56-22.72,4.48-33,9.93-8.17,4.32-18,10-16.86,20.69.2,1.9,3.21,1.92,3,0Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M328.26,269.69c.25-9.84-5.77-17.85-13.6-23.22-10.4-7.13-23.18-11.35-34.66-16.42-1.11-.49-2.62.33-2.2,1.69C284,252,305.42,264.87,326.17,261c1.9-.35,1.09-3.24-.8-2.89-19.12,3.55-39-8.61-44.69-27.18l-2.2,1.69c9.64,4.26,19.6,8.13,28.94,13s18.12,12.65,17.83,24c0,1.93,3,1.93,3,0Z"
            transform="translate(-154.91 -37)"
          />
        </g>
        <g id="leftBranch">
          <path
            d="M275.18,415.43c-2.25-11.73-10.46-20.12-19.79-26.95-11.35-8.32-23.9-14.71-34.12-24.52-23.16-22.23-34.78-53.48-40-84.54-3.48-20.62-4.41-41.57-5.23-62.44-.08-1.92-3.08-1.93-3,0,1.34,34.29,3,69.55,15.68,101.87a139,139,0,0,0,21.45,37.46c8.94,10.94,19.77,19.07,31.59,26.63,12.8,8.19,27.46,17.2,30.55,33.29.36,1.89,3.26,1.09,2.89-.8Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M174.16,219.72a334.76,334.76,0,0,1-13.59-56l-1.85,1.85c10,1.62,18.77,8.41,22,18.15,3.86,11.52-.53,23.84-4.38,34.74-.65,1.82,2.25,2.61,2.89.8,4.29-12.11,8.87-25.92,3.58-38.49a30.67,30.67,0,0,0-23.32-18.09,1.53,1.53,0,0,0-1.85,1.85,334.76,334.76,0,0,0,13.59,56c.61,1.82,3.51,1,2.89-.8Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M185.52,294.49a52,52,0,0,1,28.59-46.31l-2.05-.54c4.65,10.76,6,21.55-1.15,31.67-6.38,9-16.89,13.69-27.65,14.79-1.9.19-1.92,3.2,0,3,11.82-1.21,23.32-6.26,30.24-16.28,7.73-11.18,6.28-22.85,1.15-34.7a1.52,1.52,0,0,0-2.05-.54,55,55,0,0,0-30.08,48.91,1.5,1.5,0,0,0,3,0Z"
            transform="translate(-154.91 -37)"
          />
          <path
            d="M201.54,345.35c-4.13-9.34-14-13.72-23.6-15.11-8.15-1.18-18.69-.47-22.85,7.83a1.54,1.54,0,0,0,.54,2.05c14.9,9.7,33.5,16,50.9,9.45,1.79-.68,1-3.58-.8-2.89-16.71,6.32-34.3.15-48.59-9.15l.54,2.05c3.95-7.88,14.76-7.48,22.17-6,8,1.62,15.65,5.49,19.09,13.27.78,1.76,3.37.24,2.59-1.51Z"
            transform="translate(-154.91 -37)"
          />
        </g>
      </svg>
    </StyledTree>
  );
};

const branchStyle = {
  fill: "white",
  stroke: "green",
  "stroke-width": "3px",
  "stroke-linejoin": "round",
  "stroke-linecap": "round",
  "stroke-dasharray": 1000,
  "stroke-dashoffset": 1000,
};

const StyledTree = styled.svg`
  #leftBranch,
  #rightBranch,
  #baseLeaves,
  #base {
    ${{ ...branchStyle }}
  }
  #base {
    animation: base 4s forwards;
  }
  #baseLeaves {
    animation: baseLeaves 4s 1.4s forwards;
  }
  #rightBranch {
    animation: rightBranch 4s 2.3s forwards;
  }
  #leftBranch {
    animation: leftBranch 4s 3.2s forwards;
  }
  @keyframes base {
    25% {
      stroke-dashoffset: ${(props) => props.startingBaseNumber};
    }
    25% {
      stroke-dasharray: 1000 1000;
    }
    50% {
      stroke-dashoffset: 500;
    }
    50% {
      stroke-dasharray: 1000 1000;
    }
    100% {
      stroke-dashoffset: ${(props) => props.endingBaseNumber};
    }
  }
  @keyframes baseLeaves {
    0% {
      stroke-dashoffset: ${(props) => props.startingBaseLeavesNumber};
    }
    100% {
      stroke-dashoffset: ${(props) => props.endingBaseLeavesNumber};
    }
  }
  @keyframes rightBranch {
    0% {
      stroke-dashoffset: ${(props) => props.startingRightBranchNumber};
    }
    100% {
      stroke-dashoffset: ${(props) => props.endingRightBranchNumber};
    }
  }
  @keyframes leftBranch {
    0% {
      stroke-dashoffset: ${(props) => props.startingLeftBranchNumber};
    }
    100% {
      stroke-dashoffset: ${(props) => props.endingLeftBranchNumber};
    }
  }
`;

export default Tree;
