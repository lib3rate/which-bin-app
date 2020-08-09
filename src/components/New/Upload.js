import React, { useEffect } from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

import MyButton from "../Button";

import feed from "./../../helpers/capture";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 50
  },
  video: {
    border: '1px solid black',
    boxShadow: '2px 2px 3px black',
    width: 320,
    height: 240
  },
  photo: {
    border: '1px solid black',
    boxShadow: '2px 2px 3px black',
    width: 320,
    height: 240
  },
  canvas: {
    display: 'none'
  },
  camera: {
    width: 340,
    display: 'inline-block'
  },
  output: {
    width: 340,
    display: 'inline-block'
  },
  startbutton: {
    display: 'block',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: 32,
    backgroundColor: 'rgba(0, 150, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 0px 1px 2px rgba(0, 0, 0, 0.2)',
    // fontSize: 14,
    // fontFamily: "Lucida Grande", "Arial", sans-serif;
    color: 'rgba(255, 255, 255, 1.0)'
  },
  contentarea: {
    // fontSize: 16,
    // fontFamily: "Lucida Grande", "Arial", sans-serif;
    width: 760
  }
}));

export default function Upload(props) {
  const classes = useStyles();

  // feed();

  useEffect(() => {
    feed();
  }, []);

  return (
    <>
      <h1>
        Take a photo
      </h1>
      <div className={classes.contentarea}>
        <div className={classes.camera}>
          <video className="video">Video stream not available.</video>
          <button className="startbutton">Capture</button>
        </div>
        <canvas className="canvas" style={{display: 'none'}}></canvas>
        <div className={classes.output}>
          <img className="photo" alt="The screen capture will appear in this box."/>
        </div>
        <MyButton onClick={props.onClick}>
          Submit
        </MyButton>
      </div>
      <h1>
        Upload a file
      </h1>
      <Input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        accept="image/*"
        className={classes.input}
        // capture="environment"
        onChange={props.onChange}
      >
      </Input>
    </>
  )
}