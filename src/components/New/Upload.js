import React, { useEffect } from "react";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import VideocamIcon from "@material-ui/icons/Videocam";
import MyButton from "../Button";

import feed from "./../../helpers/capture";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    fontFamily: "Cantarell",
    fontWeight: 200,
    margin: "3em 0 1em 0",
  },
  input: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    border: "1px solid black",
    boxShadow: "2px 2px 3px black",
    width: 320,
    height: 240,
  },
  photo: {
    border: "1px solid black",
    boxShadow: "2px 2px 3px black",
    width: 320,
    height: 240,
  },
  canvas: {
    display: "none",
  },
  camera: {
    width: 340,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  message: {
    marginTop: 0,
    color: "white",
    fontWeight: 200,
  },
  output: {
    width: 340,
    margin: "0 0 10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  startbutton: {
    display: "block",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    bottom: 32,
    backgroundColor: "#4A235A",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    boxShadow: "0px 0px 1px 2px rgba(0, 0, 0, 0.2)",
    color: "rgba(255, 255, 255, 1.0)",
  },
  contentarea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 760,
    padding: "4em 0 1em 0",
    border: "solid 1px white",
    borderRadius: "25px",
    margin: "0 0 1em 0"
  },
  photoUpload: {
    background: "linear-gradient(45deg, #BB76C2, 30%, #C9A7CC 90%)",
    width: "372px",
    [theme.breakpoints.up("md")]: {
      width: "712px",
    },
    display: "flex",
    justifyContent: "center",
  },
  videoCapture: {
    background: "linear-gradient(45deg, #BB76C2, 30%, #C9A7CC 90%)",
    // maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  summary: {
    // backgroundImage: 'url("/images/beautiful-color-ui-gradients-backgrounds-bloody-mary.png")',
    background: "linear-gradient(90deg, #4A235A, 40%, #62076B 90%)",
    color: "white",
    height: "50px",
  },
  accordionActions: {
    background: "linear-gradient(90deg, #884EA0, 40%, #BB8FCE 90%)",
    display: "flex",
    justifyContent: "center",
    height: "80px",
  },
  videoAccordion: {
    boxShadow: "0px 0px 1px 2px rgba(0, 0, 0, 0.2)",
    margin: "0 0 2em 0",
  },
  photoAccordion: {
    boxShadow: "0px 0px 1px 2px rgba(0, 0, 0, 0.2)",
    marginBottom: "50px",
  },

  accordianHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  downArrow: {
    color: "white",
  },
  downArrowPhoto: {
    color: "white",
  },
  button: {
    borderColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "#4A235A",
    },
  },
}));

export default function Upload(props) {
  const classes = useStyles();

  useEffect(() => {
    feed();
  }, []);

  return (
    <>
        <h1 className={classes.title}>
          Choose how you want to check your waste
        </h1>
        <div className={classes.contentarea}>
          <Accordion defaultCollapsed className={classes.videoAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.downArrow} />}
              aria-controls="panel1c-content"
              id="panel1c-header"
              className={classes.summary}
            >
              <div className={classes.accordianHeader}>
                <VideocamIcon className={classes.icon} />

                <h4>Video Capture</h4>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.videoCapture}>
              <div className={classes.camera}>
                <h3 className={classes.message}>Video Feed</h3>
                <video className={classes.video} id="video">
                  Video stream not available.
                </video>
                <button className={classes.startbutton} id="startbutton">
                  Capture
                </button>
              </div>
              <canvas
                className={classes.canvas}
                id="canvas"
                style={{ display: "none" }}
              ></canvas>
              <div className={classes.output}>
                <h3 className={classes.message}>Image Capture</h3>
                <img
                  className={classes.photo}
                  id="photo"
                  alt="The screen capture will appear in this box."
                />
              </div>
            </AccordionDetails>
            <AccordionActions className={classes.accordionActions}>
              <MyButton onClick={props.onClick}>Submit</MyButton>
            </AccordionActions>
          </Accordion>
          <Accordion defaultCollapsed className={classes.photoAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.downArrowPhoto} />}
              aria-controls="panel1c-content"
              id="panel1c-header"
              className={classes.summary}
            >
              <div className={classes.accordianHeader}>
                <PublishIcon className={classes.icon} />
                <h4>Upload a photo</h4>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.photoUpload}>
              {/* <div className={classes.input}> */}
              <label htmlFor="fileToUpload">
                <Input
                  type="file"
                  name="fileToUpload"
                  id="fileToUpload"
                  accept="image/*"
                  style={{ display: "none" }}
                  // className={classes.input}
                  // capture="environment"
                  onChange={props.onChange}
                />
                <Button
                  variant="outlined"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
              {/* </div> */}
            </AccordionDetails>
            {/* <AccordionActions className={classes.accordionActions}>
            <MyButton onClick={props.onClick}>
              Submit
            </MyButton>
          </AccordionActions> */}
          </Accordion>
        </div>
    </>
  );
}
