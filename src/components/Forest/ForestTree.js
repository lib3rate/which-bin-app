import React from "react";
import styled from "styled-components";

const ForestTree = (props) => {
  const currentScore = props.treeTotal;
  // const currentScore = props.treeTotal < 25 ? 27 : props.treeTotal ;
  // const currentScore = 25
    
  let baseRender = 0;
  let baseLeavesRender = 0;
  let almostTreeRender = 0;
  let fullTreeRender = 0;

  console.log("currentScore: ", currentScore)

  if (currentScore < 24 || currentScore === 0) {
    baseRender = 1;
    baseLeavesRender = 0;
    almostTreeRender = 0;
    fullTreeRender = 0;
  } else if (currentScore >= 25 && currentScore < 49) {
    almostTreeRender = 0;
    baseLeavesRender = 1;
    baseRender = 0;
    fullTreeRender = 0;
  } else if (currentScore >= 50 && currentScore < 76 ) {
    almostTreeRender = 1;
    baseLeavesRender = 0;
    baseRender = 0;
    fullTreeRender = 0;
  } else if (currentScore >= 100) {
    fullTreeRender = 1;
    almostTreeRender = 0;
    baseLeavesRender = 0;
    baseRender = 0;
  }
  
  return (
    <StyledTree
      currentScore={currentScore}
      baseRender={baseRender}
      baseLeavesRender={baseLeavesRender}
      almostTreeRender={almostTreeRender}
      fullTreeRender={fullTreeRender}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.91 340.82">
        <title>new-tree</title>
        <g id="Full_Tree" data-name="Full Tree">
          <g id="fullTree">
            <path
              className="cls-1"
              d="M253.76,406q-2.27-115.62-7.89-231.14-1.6-32.86-3.48-65.7c-.11-1.92-3.11-1.93-3,0Q246,224.58,249.21,340.2q.92,32.89,1.56,65.78c0,1.93,3,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M241.53,106.79c-5.1-5.43-7.26-10.13-7.23-17.7,0-6.26.09-12.52.13-18.78l-2.26,1.3c6.46,4.09,13.42,8.7,14.4,16.94,1,8.4-2.79,18-6.09,25.52-.76,1.75,1.82,3.28,2.59,1.51,3.71-8.52,8-19,6.36-28.51C248,78.48,240.55,73.36,233.69,69a1.51,1.51,0,0,0-2.26,1.3c-.06,8-.87,16.5,0,24.49.65,5.84,4,10,7.95,14.11,1.32,1.41,3.44-.71,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M245.68,142c-1.85-15.21,15.27-23.2,22.56-34.25l-2.8-.76c.2,8.7,7.06,17.52,1,25.56-5.57,7.42-15.68,9-23.66,12.7-1.75.82-.23,3.4,1.51,2.59,8.63-4,19.34-5.77,25.08-14.18,6.06-8.87-.73-17.34-.95-26.67a1.51,1.51,0,0,0-2.8-.76c-7.68,11.65-24.94,19.54-23,35.77.23,1.89,3.23,1.92,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M242.28,129.6c-4.22-16-18.84-24.56-33.7-29.2a1.51,1.51,0,0,0-1.85,1.85c3,11.25,10.32,20.42,19.12,27.84,4.85,4.09,17,11.91,19.65,1.08.46-1.88-2.44-2.68-2.89-.8-2.55,10.48-18.62-5.8-21.5-8.9a47.43,47.43,0,0,1-11.49-20l-1.85,1.85c13.84,4.32,27.66,12.12,31.6,27.1a1.5,1.5,0,0,0,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M242.94,169.06a62.9,62.9,0,0,1-21.53-10.49c-1.55-1.16-3,1.45-1.51,2.59A65.1,65.1,0,0,0,242.14,172a1.5,1.5,0,0,0,.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M223.06,159.69a36.46,36.46,0,0,0-14.12-18.27c-2.6-1.74-14.56-8.92-16.36-3.45-1.87,5.7,4.45,14.35,8.19,17.93a27.78,27.78,0,0,0,20.92,7.82c1.92-.12,1.93-3.12,0-3-11.74.72-23.21-7.41-25.81-19.06-.49-2.18-.67-2.26,1.43-2.17a12.38,12.38,0,0,1,3.44,1.06,32.77,32.77,0,0,1,9.27,5.38,33.15,33.15,0,0,1,10.15,14.56c.64,1.81,3.54,1,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M247.12,191.61c.11-3.58,6.6-8.3,8.93-10.89q4.15-4.64,8.07-9.49a250.54,250.54,0,0,0,14.83-20.49c1.06-1.62-1.54-3.13-2.59-1.51A241.93,241.93,0,0,1,258,173.9q-4.61,5.43-9.54,10.57c-2.09,2.18-4.26,4-4.36,7.14-.06,1.93,2.94,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M278.62,148.13c-4.42-7.48,10.84-19.63,16.21-23.51l-2.05-.54c6.07,11.18-4,29.92-17.53,28.42-1.92-.21-1.9,2.79,0,3,15.89,1.76,27.19-19.91,20.12-32.93a1.51,1.51,0,0,0-2.05-.54,82.18,82.18,0,0,0-14.86,14.37c-3.25,3.92-5.22,8.52-2.42,13.24a1.5,1.5,0,0,0,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M265.94,168.63a116.55,116.55,0,0,1,29.86-5l-1.45-1.1c2.17,7.2-5.31,11.83-11.11,13.86-7.37,2.57-11.79-2.61-15.58-8.24-1.07-1.59-3.67-.09-2.59,1.51,4.7,7,10.46,12.86,19.35,9.51,7.28-2.74,15.51-8.57,12.84-17.44a1.53,1.53,0,0,0-1.45-1.1,119.71,119.71,0,0,0-30.66,5.1c-1.84.56-1.06,3.46.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M249.28,236.74c1.92-7.46,7.87-12.2,13.34-17.14a117.87,117.87,0,0,0,13.19-14.34c8.59-10.8,16.6-22.46,29-29.23,1.69-.93.18-3.52-1.51-2.59-13.1,7.16-21.4,19.54-30.54,30.89a143.51,143.51,0,0,1-15.52,16.08c-4.81,4.38-9.17,9.08-10.83,15.54-.48,1.87,2.41,2.67,2.89.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M303.94,174.83a43.36,43.36,0,0,1,22.63-20.05l-1.85-1c1.3,6.38-2.83,11.71-7,16.09-3.67,3.89-10.47,11-15.78,5.48-1.34-1.4-3.45.72-2.12,2.12,5.65,5.92,13,1.46,17.75-3.17,5.84-5.71,11.78-12.63,10-21.32a1.51,1.51,0,0,0-1.85-1,46.5,46.5,0,0,0-24.43,21.43c-.92,1.7,1.67,3.21,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M279.7,200.09c3.89,1.28,6.79-3.54,10.18-4.65,6.07-2,13-2.4,19.33-3.39l-1.9-1.45c.48,10.35-19.74,19.74-24.85,8.77-.81-1.75-3.4-.23-2.59,1.51,6.41,13.78,31.05,3,30.44-10.28a1.53,1.53,0,0,0-1.9-1.45c-5.69.89-11.47,1.66-17.11,2.85a19.52,19.52,0,0,0-4.7,1.45c-1.38.69-4.66,4.21-6.11,3.74-1.84-.6-2.63,2.29-.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M269.77,212.08a51.92,51.92,0,0,0,2.71-30.67,1.52,1.52,0,0,0-2.51-.66c-4.78,4.26-6.65,10.15-7.29,16.38-.51,4.9-1.13,11.44,3.79,14.3a1.5,1.5,0,0,0,1.51-2.59c-4.08-2.38-2.61-10.42-2-14.12.81-4.59,2.55-8.71,6.08-11.85l-2.51-.66a49.14,49.14,0,0,1-2.71,29.08c-.73,1.79,2.17,2.56,2.89.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M253.43,349.73c11.79-4.1,21.79-14,30.46-22.67a191.5,191.5,0,0,0,52.87-101.44c.34-1.89-2.55-2.7-2.89-.8A188.57,188.57,0,0,1,284,322.68c-8.76,9.08-19.22,19.94-31.35,24.16-1.81.63-1,3.53.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M338.84,223.27c-6.19-12.29,0-23.53,6.81-33.9h-2.59c4,5.87,9,13.11,6.17,20.54-1.12,2.91-3.45,5.13-5.13,7.73-2.38,3.7-4.32,8.63-9.62,8.27-1.93-.13-1.92,2.87,0,3,3.55.24,6.36-1.39,8.59-4.08,1.62-1.95,2.68-4.29,4.08-6.38s3.36-4.06,4.5-6.46c4.06-8.49-1.27-17.25-6-24.13a1.52,1.52,0,0,0-2.59,0c-7.53,11.45-13.54,23.56-6.81,36.93.87,1.72,3.46.21,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M332.5,253.89a43.07,43.07,0,0,1,6.94-9.82,41.87,41.87,0,0,1,4.08-3.74c.73-.58,2.09-2,3.05-2.2,2.31-.5,2.43,1,2.51,2.78.25,5-.71,9.38-6,11.16-4.56,1.54-9.66,2-14.42,2.3-1.92.13-1.93,3.13,0,3,6.1-.43,15.3-.53,20.05-5,3.62-3.37,4-9.64,3.1-14.21-1.16-5.94-5.52-3.72-9.06-1.09a45,45,0,0,0-12.88,15.25c-.9,1.71,1.69,3.22,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M321.19,270.69a18.72,18.72,0,0,0-6.84-17.11c-2.9-2.44-5.15-3.86-5.4-8a62,62,0,0,1,.25-6.73l.75-14.86L307.38,225a30.45,30.45,0,0,1,9.22,35.14c-.72,1.79,2.18,2.57,2.89.8a33.3,33.3,0,0,0-10-38.06,1.52,1.52,0,0,0-2.56,1.06l-.75,14.86c-.19,3.69-.87,7.93.67,11.44,1.4,3.19,4.39,4.39,6.79,6.66,3.83,3.62,5.18,8.68,4.54,13.79-.24,1.91,2.76,1.89,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M314.12,286.84l12.72-2.77c1.89-.41,1.09-3.3-.8-2.89L313.32,284c-1.89.41-1.09,3.3.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M326.67,281.83c5.37-12.36,18.07-18.23,29.74-23.32l-2.2-.9a20.31,20.31,0,0,1-29.42,23.11c-1.7-.92-3.22,1.67-1.51,2.59a23.35,23.35,0,0,0,33.83-26.5,1.53,1.53,0,0,0-2.2-.9c-12.13,5.29-25.25,11.56-30.82,24.39-.76,1.75,1.82,3.28,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M301.51,302.77a31,31,0,0,0-1.07-11.48,1.5,1.5,0,0,0-1-1c-8.81-2.14-10.09-11.62-10-19.27s.78-14.94,3.5-22l-2.2.9a23.86,23.86,0,0,1,11,16.57,31.21,31.21,0,0,1-.75,13c-.49,1.9-2.18,9.16-4.17,9.74l1.69.69,0,.75-1.69.69.3.06c1.89.35,2.7-2.54.8-2.89l-.3-.06a1.53,1.53,0,0,0-1.69.69,2,2,0,0,0,0,2.28,1.54,1.54,0,0,0,1.69.69c3.13-.92,4.22-5.66,5.21-8.42a36.16,36.16,0,0,0,2.07-16.13,27,27,0,0,0-12.6-20.2,1.52,1.52,0,0,0-2.2.9,60.55,60.55,0,0,0-3,31.47,18.22,18.22,0,0,0,5.75,10.63c1.19,1,3.4,1.52,4.44,2.52,2.27,2.18,1.59,7.09,1.33,10-.17,1.92,2.83,1.91,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M286.2,324.39c5.43-1.91,11.54-3.34,16.67-5.93,4.18-2.11,5.44-7.27,9.41-10a18.34,18.34,0,0,1,8.75-3.15c.93-.07,2.74-.32,3.56.1,3.29,1.67.83,5.4-.45,7-1.84,2.24-19,10.19-21.13,5.51-.81-1.75-3.4-.23-2.59,1.51,1.21,2.6,3.59,3.4,6.33,3.07,4.11-.5,9-2.19,12.86-3.63,5-1.86,12.37-8,8.76-14.06-3.15-5.31-13-1.74-17,.72-3.8,2.36-5.73,6-8.91,8.91-4.19,3.85-11.71,5.16-17.07,7.05-1.81.64-1,3.54.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M251.16,296c6.13-4,9.56-10.23,11.77-17.09,3-9.21,4.51-19,6.34-28.47.37-1.89-2.53-2.69-2.89-.8-1.58,8.13-3.08,16.33-5.16,24.34-1.95,7.5-4.84,15-11.57,19.43-1.61,1.06-.1,3.66,1.51,2.59Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M269.09,250.24c-5.37-8.91.08-18.3,4.87-26.05h-2.59a28.08,28.08,0,0,1-3.88,29.19c-1.21,1.48.9,3.62,2.12,2.12A31.21,31.21,0,0,0,274,222.67a1.51,1.51,0,0,0-2.59,0c-5.4,8.74-10.82,19.2-4.87,29.08a1.5,1.5,0,0,0,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M262.69,279.42a33.65,33.65,0,0,1,12.7-15.08c1.62-1,.11-3.64-1.51-2.59a36.35,36.35,0,0,0-13.78,16.16c-.76,1.75,1.82,3.28,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M275.79,262.49a13.38,13.38,0,0,1-14.12,16.42c-1.93-.11-1.92,2.89,0,3a16.41,16.41,0,0,0,17-20.22c-.42-1.88-3.31-1.09-2.89.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M250.69,320.65c4.36-7.5,6.12-16.86,13.26-22.41l-2.36-.3c2.49,4.19,4.14,10.06,1.33,14.54-3.07,4.89-9.67,4.85-14.76,4.82a1.5,1.5,0,0,0,0,3c6.23,0,13.71-.37,17.35-6.3,3.34-5.44,1.73-12.42-1.33-17.56a1.53,1.53,0,0,0-2.36-.3c-7.38,5.73-9.23,15.27-13.73,23a1.5,1.5,0,0,0,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M248.92,341.68c-20.16-9.35-41.18-19.17-55.79-36.51-8.41-10-15.8-21.12-23.33-31.78-6.93-9.82-13.43-20.49-13.15-32.92,0-1.93-3-1.93-3,0-.25,11.49,4.91,21.68,11.19,31,7.52,11.17,15.5,22.27,23.79,32.88,15,19.22,37.14,29.89,58.78,39.92,1.74.81,3.27-1.78,1.51-2.59Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M154.54,240.51c-11.51-7.37-1.16-24.78-1.67-35.19l-2.26,1.3a21.07,21.07,0,0,1,3.78,34.53c-1.44,1.29.69,3.41,2.12,2.12A24.09,24.09,0,0,0,152.13,204a1.51,1.51,0,0,0-2.26,1.3c.57,11.8-10.23,29.21,3.15,37.78,1.63,1,3.14-1.55,1.51-2.59Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M168.18,268.72a29.77,29.77,0,0,1,9.26-27.34l-2.36-.3c6.76,10.79,2.47,24.55-9.53,29.14-1.79.68-1,3.58.8,2.89,13.75-5.26,19.2-21,11.32-33.54a1.52,1.52,0,0,0-2.36-.3,32.8,32.8,0,0,0-10,30.26c.34,1.9,3.23,1.09,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M174,285.22c-5.82,1.32-11.52-4.5-16.52-6.73a45.38,45.38,0,0,0-12.86-3.62c-3.23-.41-18.84-2.2-17.58,4.16,1.36,6.83,10.17,12.8,16.38,14.4A21.91,21.91,0,0,0,165,287c1.31-1.42-.81-3.54-2.12-2.12a19,19,0,0,1-20.68,5,21.84,21.84,0,0,1-9.38-7c-.57-.73-3-3.48-2.83-4.42.15-.69,5.47-.84,6.26-.89a42.49,42.49,0,0,1,23.5,5.4c4.89,2.78,9.15,6.49,15.08,5.14,1.88-.43,1.09-3.32-.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M185.17,299.37a35.91,35.91,0,0,0-33.24,10.16,1.51,1.51,0,0,0,.66,2.51c13,2.36,28.1,1.06,35.35-11.62a1.5,1.5,0,0,0-2.59-1.51c-6.54,11.42-20.29,12.35-32,10.24l.66,2.51a32.83,32.83,0,0,1,30.32-9.39c1.88.39,2.69-2.5.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M191.63,302.21a33.82,33.82,0,0,1,9.25-34.41l-2.56-1.06c.29,6.77,3.86,12.72,3.29,19.63a25.8,25.8,0,0,1-3,10.16c-1,1.94-6,9.81-9.21,8.38-1.75-.79-3.27,1.8-1.51,2.59,6.34,2.86,12.36-7,14.43-11.73a28.52,28.52,0,0,0,2.41-12.25c-.18-5.81-3.11-11-3.36-16.77a1.52,1.52,0,0,0-2.56-1.06,36.82,36.82,0,0,0-10,37.33c.55,1.85,3.45,1.06,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M209.58,320.75c-6.54-3-13.65-2.17-19.87,1.33a43.23,43.23,0,0,0-9.38,7.51c-1.78,1.81-4.9,4-4.91,6.8a1.49,1.49,0,0,0,.74,1.3c2.5,1.34,5.5-.45,8-1.22,4.7-1.45,9.56-2.68,14.14-4.47,5.46-2.14,10-6.46,8.61-12.74-.43-1.88-3.32-1.09-2.89.8,1.67,7.35-7.72,9.54-12.82,11.11l-7,2.15-3.48,1.07-1.74.54q-2,.62.56-.15c3.74-3.26,6.55-7.08,10.92-9.69,5.35-3.2,11.76-4.43,17.56-1.74,1.74.81,3.27-1.78,1.51-2.59Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M248.38,302.45c-8.33-7.84-16.71-15.83-22.21-26a168.69,168.69,0,0,1-14.32-34.87,1.5,1.5,0,0,0-2.89.8A172.61,172.61,0,0,0,223.58,278c5.61,10.4,14.16,18.6,22.68,26.61,1.41,1.32,3.53-.79,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M210,240.77c-8.38-6.77-7.5-17.68-6.47-27.32l-2.26,1.3c10.3,4.7,9.8,16.81,9,26.39-.16,1.92,2.84,1.91,3,0,.87-10.63.78-23.84-10.51-29a1.53,1.53,0,0,0-2.26,1.3c-1.12,10.43-1.63,22.19,7.34,29.44,1.49,1.2,3.62-.91,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M221.83,264.72a35.92,35.92,0,0,1,5.73-26.44H225c6,9.92-.61,20.31-6.91,28.14-1.2,1.49.91,3.63,2.12,2.12,7.17-8.92,14.17-20.6,7.38-31.77a1.52,1.52,0,0,0-2.59,0,39.06,39.06,0,0,0-6,28.75c.32,1.9,3.22,1.09,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M229.37,283.44a16.27,16.27,0,0,0-18.19,7.16,1.52,1.52,0,0,0,1.3,2.26c7.41.85,15.77,1,20.28-6,1-1.63-1.55-3.14-2.59-1.51-3.85,6-11.55,5.23-17.69,4.53l1.3,2.26a13.18,13.18,0,0,1,14.8-5.78,1.5,1.5,0,0,0,.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M247,242.21c.77-8-3.71-15-7.89-21.43a126.55,126.55,0,0,0-16.38-20C209.07,187,194.46,174.16,180.3,161c-1.41-1.32-3.54.8-2.12,2.12C191,175,204,186.83,216.61,199a138.61,138.61,0,0,1,17,19.09c4.93,6.87,11.25,15.32,10.39,24.17-.19,1.92,2.81,1.91,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M210,191.87a31.37,31.37,0,0,0-18.62-11c-3.21-.58-14.71-2.19-14.87,3-.16,5.46,9.55,9.49,13.63,10.89a33.65,33.65,0,0,0,23.33-.57c1.78-.7,1-3.6-.8-2.89a31,31,0,0,1-16.7,1.88c-4.66-.8-12.37-3.1-15.17-7.3-2.19-3.29,3.75-2.62,5.94-2.54A28.5,28.5,0,0,1,207.9,194c1.23,1.49,3.34-.64,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M228.55,203.62a25,25,0,0,1-4.67-13.24c-.1-2.17-.15-5.05.74-7.05,1.34-3,2.55-.8,3.95,1.79a16,16,0,0,1,.59,14c-1.5,3.45-3.53,6.16-3.45,10.06,0,1.93,3,1.93,3,0-.09-4.14,2.9-7.24,4.06-11a18.5,18.5,0,0,0,.52-8.32c-.57-3.53-3.23-11.17-7.4-12.05-3.88-.82-4.45,5.49-4.79,8.09A27.38,27.38,0,0,0,226,205.14c1.1,1.57,3.7.07,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M180.72,159a32.81,32.81,0,0,0-15.09-19.91,1.51,1.51,0,0,0-2.2.9c-1.24,6-2.49,12.62.81,18.18,3,5.12,8.65,6.39,14.25,6.11,1.92-.1,1.93-3.1,0-3-5.44.28-10.59-1-12.6-6.71-1.58-4.46-.49-9.31.44-13.78l-2.2.9a29.65,29.65,0,0,1,13.72,18.12,1.5,1.5,0,0,0,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M249.7,271.56c-.5-5.4-1.16-11.32-4.55-15.77-1.8-2.36-6.15-6.22-8.68-2.61-2.4,3.42-1.34,9.29.23,12.79a16.82,16.82,0,0,0,11,9.47,1.5,1.5,0,0,0,.8-2.89c-5.94-1.64-12.08-8.83-10.08-15.44,1.6-5.3,5.77,2.44,6.55,4.69a40.81,40.81,0,0,1,1.78,9.77c.18,1.91,3.18,1.92,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M230.1,163.15a23.69,23.69,0,0,1-3.75-24.27l-2.2.9c3.63,1.62,7.18,5.56,9,9,3,5.7.3,9.7-3.34,14-1.23,1.47.88,3.6,2.12,2.12,3.45-4.12,6.84-8.7,5.27-14.36-1.46-5.27-6.6-11.22-11.56-13.43a1.53,1.53,0,0,0-2.2.9A26.69,26.69,0,0,0,228,165.27c1.24,1.48,3.35-.65,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M229,331.58c-.51-6.63-5.74-15.33-.71-21.25h-2.12c6,5,11.51,17.54.61,21-1.84.58-1.05,3.47.8,2.89A12.1,12.1,0,0,0,236,323.93c.8-6.31-3.07-11.87-7.7-15.72a1.52,1.52,0,0,0-2.12,0c-6,7.12-.78,15.42-.16,23.37.15,1.91,3.15,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M269.27,341c6.33,2.42,26.2,7.87,28.11-3.08a1.55,1.55,0,0,0-.69-1.69c-7-3.75-24.56-9.42-28.56,1.33-.67,1.81,2.22,2.59,2.89.8,3.06-8.22,19.22-2.17,24.15.47l-.69-1.69c-1.44,8.27-19.89,2.71-24.42,1-1.81-.69-2.59,2.21-.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
          </g>
        </g>
        <g id="base">
          <g id="base-2" data-name="base">
            <path
              className="cls-2"
              d="M252.26,408.16c.77-46.57-3.11-93-4.08-139.56,0-1.93-3-1.93-3,0,1,46.54,4.85,93,4.08,139.56,0,1.93,3,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M247.39,322.24c4.36-7.5,6.12-16.86,13.26-22.41l-2.36-.3c2.49,4.19,4.14,10.06,1.33,14.54-3.07,4.89-9.67,4.85-14.76,4.82a1.5,1.5,0,0,0,0,3c6.23,0,13.71-.37,17.35-6.3,3.34-5.44,1.73-12.42-1.33-17.56a1.53,1.53,0,0,0-2.36-.3c-7.38,5.73-9.23,15.27-13.73,23a1.5,1.5,0,0,0,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M246.4,273.15c-.5-5.4-1.16-11.32-4.55-15.77-1.8-2.36-6.15-6.22-8.68-2.61-2.4,3.42-1.34,9.29.23,12.79a16.82,16.82,0,0,0,11,9.47,1.5,1.5,0,0,0,.8-2.89c-5.94-1.64-12.08-8.83-10.08-15.44,1.6-5.3,5.77,2.44,6.55,4.69a40.81,40.81,0,0,1,1.78,9.77c.18,1.91,3.18,1.92,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M250.77,291.6c6.13-4,9.56-10.23,11.77-17.09,3-9.21,4.51-19,6.34-28.47.37-1.89-2.53-2.69-2.89-.8-1.58,8.13-3.08,16.33-5.16,24.34-1.95,7.5-4.84,15-11.57,19.43-1.61,1.06-.1,3.66,1.51,2.59Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M262.3,275A33.65,33.65,0,0,1,275,259.94c1.62-1,.11-3.64-1.51-2.59a36.35,36.35,0,0,0-13.78,16.16c-.76,1.75,1.82,3.28,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M275.4,258.09a13.38,13.38,0,0,1-14.12,16.42c-1.93-.11-1.92,2.89,0,3a16.41,16.41,0,0,0,17-20.22c-.42-1.88-3.31-1.09-2.89.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M248,298.05c-8.33-7.84-16.71-15.83-22.21-26a168.69,168.69,0,0,1-14.32-34.87,1.5,1.5,0,0,0-2.89.8,172.61,172.61,0,0,0,14.62,35.59c5.61,10.4,14.16,18.6,22.68,26.61,1.41,1.32,3.53-.79,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M221.44,260.32a35.92,35.92,0,0,1,5.73-26.44h-2.59c6,9.92-.61,20.31-6.91,28.14-1.2,1.49.91,3.63,2.12,2.12,7.17-8.92,14.17-20.6,7.38-31.77a1.52,1.52,0,0,0-2.59,0,39.06,39.06,0,0,0-6,28.75c.32,1.9,3.22,1.09,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M229,279a16.27,16.27,0,0,0-18.19,7.16,1.52,1.52,0,0,0,1.3,2.26c7.41.85,15.77,1,20.28-6,1-1.63-1.55-3.14-2.59-1.51-3.85,6-11.55,5.23-17.69,4.53l1.3,2.26a13.18,13.18,0,0,1,14.8-5.78A1.5,1.5,0,0,0,229,279Z"
              transform="translate(-127.01 -68.8)"
            />
          </g>
        </g>
      
        <g id="Almost_Tree" data-name="Almost Tree">
          <g id="almostTree">
            <path
              className="cls-1"
              d="M254.85,405.19Q252.58,289.57,247,174q-1.6-32.86-3.48-65.7c-.11-1.92-3.11-1.93-3,0q6.58,115.45,9.82,231.07.92,32.89,1.56,65.78c0,1.93,3,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M244,168.27a62.9,62.9,0,0,1-21.53-10.49c-1.55-1.16-3,1.45-1.51,2.59a65.1,65.1,0,0,0,22.25,10.79,1.5,1.5,0,0,0,.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M224.14,158.9A36.46,36.46,0,0,0,210,140.64c-2.6-1.74-14.56-8.92-16.36-3.45-1.87,5.7,4.45,14.35,8.19,17.93a27.78,27.78,0,0,0,20.92,7.82c1.92-.12,1.93-3.12,0-3-11.74.72-23.21-7.41-25.81-19.06-.49-2.18-.67-2.26,1.43-2.17a12.38,12.38,0,0,1,3.44,1.06,32.77,32.77,0,0,1,9.27,5.38,33.15,33.15,0,0,1,10.15,14.56c.64,1.81,3.54,1,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M248.21,190.82c.11-3.58,6.6-8.3,8.93-10.89q4.15-4.64,8.07-9.49A250.54,250.54,0,0,0,280,149.94c1.06-1.62-1.54-3.13-2.59-1.51a241.93,241.93,0,0,1-18.33,24.68q-4.61,5.43-9.54,10.57c-2.09,2.18-4.26,4-4.36,7.14-.06,1.93,2.94,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M279.7,147.34c-4.42-7.48,10.84-19.63,16.21-23.51l-2.05-.54c6.07,11.18-4,29.92-17.53,28.42-1.92-.21-1.9,2.79,0,3,15.89,1.76,27.19-19.91,20.12-32.93a1.51,1.51,0,0,0-2.05-.54,82.18,82.18,0,0,0-14.86,14.37c-3.25,3.92-5.22,8.52-2.42,13.24a1.5,1.5,0,0,0,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M267,167.84a116.55,116.55,0,0,1,29.86-5l-1.45-1.1c2.17,7.2-5.31,11.83-11.11,13.86-7.37,2.57-11.79-2.61-15.58-8.24-1.07-1.59-3.67-.09-2.59,1.51,4.7,7,10.46,12.86,19.35,9.51,7.28-2.74,15.51-8.57,12.84-17.44a1.53,1.53,0,0,0-1.45-1.1,119.71,119.71,0,0,0-30.66,5.1c-1.84.56-1.06,3.46.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M250.36,236c1.92-7.46,7.87-12.2,13.34-17.14a117.87,117.87,0,0,0,13.19-14.34c8.59-10.8,16.6-22.46,29-29.23,1.69-.93.18-3.52-1.51-2.59-13.1,7.16-21.4,19.54-30.54,30.89a143.51,143.51,0,0,1-15.52,16.08c-4.81,4.38-9.17,9.08-10.83,15.54-.48,1.87,2.41,2.67,2.89.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M280.79,199.3c3.89,1.28,6.79-3.54,10.18-4.65,6.07-2,13-2.4,19.33-3.39l-1.9-1.45c.48,10.35-19.74,19.74-24.85,8.77-.81-1.75-3.4-.23-2.59,1.51,6.41,13.78,31.05,3,30.44-10.28a1.53,1.53,0,0,0-1.9-1.45c-5.69.89-11.47,1.66-17.11,2.85a19.52,19.52,0,0,0-4.7,1.45c-1.38.69-4.66,4.21-6.11,3.74-1.84-.6-2.63,2.29-.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M254.51,348.94c11.79-4.1,21.79-14,30.46-22.67a191.5,191.5,0,0,0,52.87-101.44c.34-1.89-2.55-2.7-2.89-.8a188.57,188.57,0,0,1-49.89,97.86C276.3,331,265.84,341.83,253.71,346c-1.81.63-1,3.53.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M322.28,269.9a18.72,18.72,0,0,0-6.84-17.11c-2.9-2.44-5.15-3.86-5.4-8a62,62,0,0,1,.25-6.73l.75-14.86-2.56,1.06a30.45,30.45,0,0,1,9.22,35.14c-.72,1.79,2.18,2.57,2.89.8a33.3,33.3,0,0,0-10-38.06,1.52,1.52,0,0,0-2.56,1.06L307.28,238c-.19,3.69-.87,7.93.67,11.44,1.4,3.19,4.39,4.39,6.79,6.66,3.83,3.62,5.18,8.68,4.54,13.79-.24,1.91,2.76,1.89,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M252.24,295.21c6.13-4,9.56-10.23,11.77-17.09,3-9.21,4.51-19,6.34-28.47.37-1.89-2.53-2.69-2.89-.8-1.58,8.13-3.08,16.33-5.16,24.34-1.95,7.5-4.84,15-11.57,19.43-1.61,1.06-.1,3.66,1.51,2.59Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M270.17,249.45c-5.37-8.91.08-18.3,4.87-26.05h-2.59a28.08,28.08,0,0,1-3.88,29.19c-1.21,1.48.9,3.62,2.12,2.12A31.21,31.21,0,0,0,275,221.88a1.51,1.51,0,0,0-2.59,0c-5.4,8.74-10.82,19.2-4.87,29.08a1.5,1.5,0,0,0,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M263.78,278.63a33.65,33.65,0,0,1,12.7-15.08c1.62-1,.11-3.64-1.51-2.59a36.35,36.35,0,0,0-13.78,16.16c-.76,1.75,1.82,3.28,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M276.88,261.7a13.38,13.38,0,0,1-14.12,16.42c-1.93-.11-1.92,2.89,0,3a16.41,16.41,0,0,0,17-20.22c-.42-1.88-3.31-1.09-2.89.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M251.77,319.86c4.36-7.5,6.12-16.86,13.26-22.41l-2.36-.3c2.49,4.19,4.14,10.06,1.33,14.54-3.07,4.89-9.67,4.85-14.76,4.82a1.5,1.5,0,0,0,0,3c6.23,0,13.71-.37,17.35-6.3,3.34-5.44,1.73-12.42-1.33-17.56a1.53,1.53,0,0,0-2.36-.3c-7.38,5.73-9.23,15.27-13.73,23a1.5,1.5,0,0,0,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M250,340.89c-20.16-9.35-41.18-19.17-55.79-36.51-8.41-10-15.8-21.12-23.33-31.78-6.93-9.82-13.43-20.49-13.15-32.92,0-1.93-3-1.93-3,0-.25,11.49,4.91,21.68,11.19,31,7.52,11.17,15.5,22.27,23.79,32.88,15,19.22,37.14,29.89,58.78,39.92,1.74.81,3.27-1.78,1.51-2.59Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M169.27,267.94a29.77,29.77,0,0,1,9.26-27.34l-2.36-.3c6.76,10.79,2.47,24.55-9.53,29.14-1.79.68-1,3.58.8,2.89,13.75-5.26,19.2-21,11.32-33.54a1.52,1.52,0,0,0-2.36-.3,32.8,32.8,0,0,0-10,30.26c.34,1.9,3.23,1.09,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M249.47,301.66c-8.33-7.84-16.71-15.83-22.21-26a168.69,168.69,0,0,1-14.32-34.87,1.5,1.5,0,0,0-2.89.8,172.61,172.61,0,0,0,14.62,35.59c5.61,10.4,14.16,18.6,22.68,26.61,1.41,1.32,3.53-.79,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M211.13,240c-8.38-6.77-7.5-17.68-6.47-27.32L202.4,214c10.3,4.7,9.8,16.81,9,26.39-.16,1.92,2.84,1.91,3,0,.87-10.63.78-23.84-10.51-29a1.53,1.53,0,0,0-2.26,1.3C200.54,223.1,200,234.86,209,242.1c1.49,1.2,3.62-.91,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M222.92,263.93a35.92,35.92,0,0,1,5.73-26.44h-2.59c6,9.92-.61,20.31-6.91,28.14-1.2,1.49.91,3.63,2.12,2.12,7.17-8.92,14.17-20.6,7.38-31.77a1.52,1.52,0,0,0-2.59,0,39.06,39.06,0,0,0-6,28.75c.32,1.9,3.22,1.09,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M230.46,282.65a16.27,16.27,0,0,0-18.19,7.16,1.52,1.52,0,0,0,1.3,2.26c7.41.85,15.77,1,20.28-6,1-1.63-1.55-3.14-2.59-1.51-3.85,6-11.55,5.23-17.69,4.53l1.3,2.26a13.18,13.18,0,0,1,14.8-5.78,1.5,1.5,0,0,0,.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M248.09,241.43c.77-8-3.71-15-7.89-21.43a126.55,126.55,0,0,0-16.38-20c-13.65-13.72-28.26-26.58-42.42-39.78-1.41-1.32-3.54.8-2.12,2.12C192.08,174.24,205,186,217.69,198.17a138.61,138.61,0,0,1,17,19.09c4.93,6.87,11.25,15.32,10.39,24.17-.19,1.92,2.81,1.91,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M229.63,202.83A25,25,0,0,1,225,189.59c-.1-2.17-.15-5.05.74-7.05,1.34-3,2.55-.8,3.95,1.79a16,16,0,0,1,.59,14c-1.5,3.45-3.53,6.16-3.45,10.06,0,1.93,3,1.93,3,0-.09-4.14,2.9-7.24,4.06-11a18.5,18.5,0,0,0,.52-8.32c-.57-3.53-3.23-11.17-7.4-12.05-3.88-.82-4.45,5.49-4.79,8.09A27.38,27.38,0,0,0,227,204.35c1.1,1.57,3.7.07,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M250.78,270.77c-.5-5.4-1.16-11.32-4.55-15.77-1.8-2.36-6.15-6.22-8.68-2.61-2.4,3.42-1.34,9.29.23,12.79a16.82,16.82,0,0,0,11,9.47,1.5,1.5,0,0,0,.8-2.89c-5.94-1.64-12.08-8.83-10.08-15.44,1.6-5.3,5.77,2.44,6.55,4.69a40.81,40.81,0,0,1,1.78,9.77c.18,1.91,3.18,1.92,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M231.19,162.36a23.69,23.69,0,0,1-3.75-24.27l-2.2.9c3.63,1.62,7.18,5.56,9,9,3,5.7.3,9.7-3.34,14-1.23,1.47.88,3.6,2.12,2.12,3.45-4.12,6.84-8.7,5.27-14.36-1.46-5.27-6.6-11.22-11.56-13.43a1.53,1.53,0,0,0-2.2.9,26.69,26.69,0,0,0,4.52,27.19c1.24,1.48,3.35-.65,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M230.07,330.79c-.51-6.63-5.74-15.33-.71-21.25h-2.12c6,5,11.51,17.54.61,21-1.84.58-1.05,3.47.8,2.89a12.1,12.1,0,0,0,8.41-10.26c.8-6.31-3.07-11.87-7.7-15.72a1.52,1.52,0,0,0-2.12,0c-6,7.12-.78,15.42-.16,23.37.15,1.91,3.15,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M270.36,340.22c6.33,2.42,26.2,7.87,28.11-3.08a1.55,1.55,0,0,0-.69-1.69c-7-3.75-24.56-9.42-28.56,1.33-.67,1.81,2.22,2.59,2.89.8,3.06-8.22,19.22-2.17,24.15.47l-.69-1.69c-1.44,8.27-19.89,2.71-24.42,1-1.81-.69-2.59,2.21-.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M243.46,107.55c-4.88-5.53-6.81-10.22-6.78-17.7,0-6.26.08-12.52.12-18.78l-2.26,1.3c6.7,4.51,13.41,9.66,13.67,18.48.24,8.16-3,16.88-6,24.33-.73,1.78,2.17,2.56,2.89.8,3.52-8.58,7.71-19.58,5.71-29-1.68-8-8.36-12.9-14.73-17.18a1.51,1.51,0,0,0-2.26,1.3c-.05,8-.82,16.49,0,24.49.61,5.74,3.79,9.9,7.51,14.11,1.28,1.45,3.4-.68,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
          </g>
        </g>
       
        <g id="Base_Leaves" data-name="Base Leaves">
          <g id="baseLeaves">
            <path
              className="cls-2"
              d="M251.95,404.83c.77-46.57-3.11-93-4.08-139.56,0-1.93-3-1.93-3,0,1,46.54,4.85,93,4.08,139.56,0,1.93,3,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />

            <path
              className="cls-2"
              d="M247.08,318.91c4.36-7.5,6.12-16.86,13.26-22.41l-2.36-.3c2.49,4.19,4.14,10.06,1.33,14.54-3.07,4.89-9.67,4.85-14.76,4.82a1.5,1.5,0,0,0,0,3c6.23,0,13.71-.37,17.35-6.3,3.34-5.44,1.73-12.42-1.33-17.56a1.53,1.53,0,0,0-2.36-.3c-7.38,5.73-9.23,15.27-13.73,23a1.5,1.5,0,0,0,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />

            <path
              className="cls-2"
              d="M246.09,269.81c-.5-5.4-1.16-11.32-4.55-15.77-1.8-2.36-6.15-6.22-8.68-2.61-2.4,3.42-1.34,9.29.23,12.79a16.82,16.82,0,0,0,11,9.47,1.5,1.5,0,0,0,.8-2.89c-5.94-1.64-12.08-8.83-10.08-15.44,1.6-5.3,5.77,2.44,6.55,4.69a40.81,40.81,0,0,1,1.78,9.77c.18,1.91,3.18,1.92,3,0Z"
              transform="translate(-127.01 -68.8)"
            />

            <path
              className="cls-2"
              d="M250.46,288.27c6.13-4,9.56-10.23,11.77-17.09,3-9.21,4.51-19,6.34-28.47.37-1.89-2.53-2.69-2.89-.8-1.58,8.13-3.08,16.33-5.16,24.34-1.95,7.5-4.84,15-11.57,19.43-1.61,1.06-.1,3.66,1.51,2.59Z"
              transform="translate(-127.01 -68.8)"
            />

            <path
              className="cls-2"
              d="M262,271.69a33.65,33.65,0,0,1,12.7-15.08c1.62-1,.11-3.64-1.51-2.59a36.35,36.35,0,0,0-13.78,16.16c-.76,1.75,1.82,3.28,2.59,1.51Z"
              transform="translate(-127.01 -68.8)"
            />

            <path
              className="cls-2"
              d="M275.09,254.76A13.38,13.38,0,0,1,261,271.18c-1.93-.11-1.92,2.89,0,3A16.41,16.41,0,0,0,278,254c-.42-1.88-3.31-1.09-2.89.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M247.68,294.72c-8.33-7.84-16.71-15.83-22.21-26a168.69,168.69,0,0,1-14.32-34.87,1.5,1.5,0,0,0-2.89.8,172.61,172.61,0,0,0,14.62,35.59c5.61,10.4,14.16,18.6,22.68,26.61,1.41,1.32,3.53-.79,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />

            <path
              className="cls-2"
              d="M221.13,257a35.92,35.92,0,0,1,5.73-26.44h-2.59c6,9.92-.61,20.31-6.91,28.14-1.2,1.49.91,3.63,2.12,2.12,7.17-8.92,14.17-20.6,7.38-31.77a1.52,1.52,0,0,0-2.59,0,39.06,39.06,0,0,0-6,28.75c.32,1.9,3.22,1.09,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-2"
              d="M228.67,275.71a16.27,16.27,0,0,0-18.19,7.16,1.52,1.52,0,0,0,1.3,2.26c7.41.85,15.77,1,20.28-6,1-1.63-1.55-3.14-2.59-1.51-3.85,6-11.55,5.23-17.69,4.53l1.3,2.26a13.18,13.18,0,0,1,14.8-5.78,1.5,1.5,0,0,0,.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M253.16,408.17Q250.89,292.55,245.27,177q-1.6-32.86-3.48-65.7c-.11-1.92-3.11-1.93-3,0q6.58,115.45,9.82,231.07.92,32.89,1.56,65.78c0,1.93,3,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M242.33,171.26a62.9,62.9,0,0,1-21.53-10.49c-1.55-1.16-3,1.45-1.51,2.59a65.1,65.1,0,0,0,22.25,10.79,1.5,1.5,0,0,0,.8-2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M222.45,161.89a36.46,36.46,0,0,0-14.12-18.27c-2.6-1.74-14.56-8.92-16.36-3.45-1.87,5.7,4.45,14.35,8.19,17.93a27.78,27.78,0,0,0,20.92,7.82c1.92-.12,1.93-3.12,0-3-11.74.72-23.21-7.41-25.81-19.06-.49-2.18-.67-2.26,1.43-2.17a12.38,12.38,0,0,1,3.44,1.06,32.77,32.77,0,0,1,9.27,5.38,33.15,33.15,0,0,1,10.15,14.56c.64,1.81,3.54,1,2.89-.8Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M246.52,193.81c.11-3.58,6.6-8.3,8.93-10.89q4.15-4.64,8.07-9.49a250.54,250.54,0,0,0,14.83-20.49c1.06-1.62-1.54-3.13-2.59-1.51a241.93,241.93,0,0,1-18.33,24.68q-4.61,5.43-9.54,10.57c-2.09,2.18-4.26,4-4.36,7.14-.06,1.93,2.94,1.93,3,0Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M278,150.33c-4.42-7.48,10.84-19.63,16.21-23.51l-2.05-.54c6.07,11.18-4,29.92-17.53,28.42-1.92-.21-1.9,2.79,0,3,15.89,1.76,27.19-19.91,20.12-32.93a1.51,1.51,0,0,0-2.05-.54,82.18,82.18,0,0,0-14.86,14.37c-3.25,3.92-5.22,8.52-2.42,13.24a1.5,1.5,0,0,0,2.59-1.51Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M265.34,170.83a116.55,116.55,0,0,1,29.86-5l-1.45-1.1c2.17,7.2-5.31,11.83-11.11,13.86-7.37,2.57-11.79-2.61-15.58-8.24-1.07-1.59-3.67-.09-2.59,1.51,4.7,7,10.46,12.86,19.35,9.51,7.28-2.74,15.51-8.57,12.84-17.44a1.53,1.53,0,0,0-1.45-1.1,119.71,119.71,0,0,0-30.66,5.1c-1.84.56-1.06,3.46.8,2.89Z"
              transform="translate(-127.01 -68.8)"
            />
            <path
              className="cls-1"
              d="M229.5,165.35a23.69,23.69,0,0,1-3.75-24.27l-2.2.9c3.63,1.62,7.18,5.56,9,9,3,5.7.3,9.7-3.34,14-1.23,1.47.88,3.6,2.12,2.12,3.45-4.12,6.84-8.7,5.27-14.36-1.46-5.27-6.6-11.22-11.56-13.43a1.53,1.53,0,0,0-2.2.9,26.69,26.69,0,0,0,4.52,27.19c1.24,1.48,3.35-.65,2.12-2.12Z"
              transform="translate(-127.01 -68.8)"
            />
          </g>
        </g>
      </svg>
    </StyledTree>
  );
};

// base, baseLeaves, almostTree, fullTree

const branchStyle = {
  fill: "none",
  stroke: "green",
  "stroke-width": "3px",
  "stroke-linejoin": "round",
  "stroke-linecap": "round",
  // "stroke-dasharray": 1000,
  // "stroke-dashoffset": 1000,
};

const StyledTree = styled.svg`
  #fullTree {
    ${{ ...branchStyle }}
    opacity: ${(props) => props.fullTreeRender};
    
  }
  #almostTree {
    ${{ ...branchStyle }}
    opacity: ${(props) => props.almostTreeRender};
  }
  #baseLeaves {
    ${{ ...branchStyle }}
    opacity: $${(props) => props.baseLeavesRender};
  }
  #base {
    ${{ ...branchStyle }}
    opacity: ${(props) => props.baseRender};
  }
`;

export default ForestTree;
