import React, { useEffect } from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

import MyButton from "../Button";

import feed from "./../../helpers/capture";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: '0 0 100px 0'
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  message: {
    marginTop: 0
  },
  output: {
    width: 340,
    margin: '0 0 10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    color: 'rgba(255, 255, 255, 1.0)'
  },
  contentarea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 760
  }
}));

export default function Upload(props) {
  const classes = useStyles();

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
          <video className={classes.video} id="video">Video stream not available.</video>
          <button className={classes.startbutton} id="startbutton">Capture</button>
        </div>
        <canvas className={classes.canvas} id="canvas" style={{display: 'none'}}></canvas>
        <div className={classes.output}>
          <h3 className = {classes.message}>Your image will appear below</h3>
          <img className={classes.photo} id="photo" alt="The screen capture will appear in this box."/>
        </div>
        <MyButton onClick={props.onClick}>
          Submit
        </MyButton>
      </div>
      <h1>
        Or upload a file
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