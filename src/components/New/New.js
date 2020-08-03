import React from 'react';
import AWS from 'aws-sdk';
import { makeStyles } from '@material-ui/core/styles';

import Input from "../Input";
import MyButton from "../Button";
import Status from "./Status";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
    border: 1,
  },
}));

export default function New() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Submit a photo</h2>
      <Input
        onChange={(event) => ProcessImage()}
      />
      <p id="opResult"></p>
      <h3 id="bin"></h3>
      <Status
        text="Analyzing"
      />
      <MyButton
        onClick={() => console.log("Trashed!")}
        children="Trashed!"
      />
    </div>
  )
}

// document.getElementById("fileToUpload").addEventListener("change", function (event) {
//   ProcessImage();
// }, false);

//Calls DetectLabels API and shows the labels of detected items
function DetectLabels(imageData) {
  AWS.region = 'us-east-1';
  var rekognition = new AWS.Rekognition();

  /* This operation detects labels in the supplied image */
  var params = {
    Image: {
    S3Object: {
      Bucket: "which-bin-app", 
      Name: "tomato.jpg"
    }
    }, 
    MaxLabels: 123, 
    MinConfidence: 70
  };
  rekognition.detectLabels(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

//Loads selected image and unencodes image bytes for Rekognition DetectFaces API
function ProcessImage() {
  AnonLog();
  var control = document.getElementById("fileToUpload");
  var file = control.files[0];

  // Load base64 encoded image for display 
  var reader = new FileReader();
  reader.onload = (function (theFile) {
    return function (e) {
      //Call Rekognition  
      AWS.region = "us-east-1";  
      var rekognition = new AWS.Rekognition();
      var params = {
        Image: {
        Bytes: e.target.result
      },
      MaxLabels: 123, 
      MinConfidence: 70
  };
  rekognition.detectLabels(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      // console.log(data);
      for (let label of data.Labels) {
        document.getElementById("opResult").innerHTML += `<p>The item is a: ${label.Name} with a ${label.Confidence} probability.</p>`;
        if (label.Name === 'Glass' || label.Name === 'Cardboard') {
          document.getElementById("bin").innerHTML = 'This item should go to the recycling bin.';
        } else if (label.Name === 'Plastic') {
          document.getElementById("bin").innerHTML = 'This item should go to the garbage bin.';
        } else if (label.Name === 'Plant') {
          document.getElementById("bin").innerHTML = 'This item should go to the organic bin.';
        }
      };
    }
  });

    };
  })(file);
  reader.readAsArrayBuffer(file);
}

//Provides anonymous log on to AWS services
function AnonLog() {
  
  // Configure the credentials provider to use your identity pool
  AWS.config.region = 'us-east-1'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:ef7bd933-2344-4091-abac-aaca08dd6ba3',
  });
  // Make the call to obtain credentials
  AWS.config.credentials.get(function () {
    // Credentials will be available when this function is called.
    var accessKeyId = AWS.config.credentials.accessKeyId;
    var secretAccessKey = AWS.config.credentials.secretAccessKey;
    var sessionToken = AWS.config.credentials.sessionToken;
  });
}