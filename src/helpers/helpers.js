import React, { useState } from "react";
import AWS from 'aws-sdk';

export default function useApplicationData() {
  const [state, setState] = useState({
    user: {},
    userBins: [],
    recognition: {}
  });

  function convertToArray(data) {
    const result = [];
    for (let item of Object.values(data)) {
      result.push(item);
    }
    return result;
  };

  function convertToObject(data) {
    const result = {};
    let total = 0;
    for (let item of data) {
      result[item.name] = Number(item.sum);
      total += Number(item.sum);
    }
    result.total = total;
    return result;
  }

  function updateScore(bin) {
    let updatedScore = state.user.total;

    if (bin === 'Recycling') {
      updatedScore += 50;
    } else if (bin === 'Organic') {
      updatedScore += 25;
    }

    const user = {
      ...state.user,
      total: updatedScore
    }

    setState({
      ...state,
      user
    })
  };

  //Loads selected image and unencodes image bytes for Rekognition DetectFaces API
  function ProcessImage() {
    return new Promise((resolve, reject) => {
  
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
              const result = {
                label: '',
                bin: '',
                text: ''
              }
              setTimeout(() => {
                for (let label of data.Labels) {
                  if (label.Name === 'Glass' || label.Name === 'Cardboard') {
                    // const name = label.Name.toLowerCase;
                    result.label = `You have uploaded a ${label.Name}.`;
                    result.bin = 'Recycling';
                    result.text = 'Place it into the recycling bin and you will get 50 points to your score!';
                    setState({...state, recognition: result});
                  } else if (label.Name === 'Plastic') {
                    result.label = `You have uploaded some ${label.Name}.`;
                    result.bin = 'Garbage';
                    result.text = 'Please put it into the garbage bin and use more recycled items, if possible.';
                    setState({...state, recognition: result});
                  } else if (label.Name === 'Plant') {
                    result.label = `You have uploaded a ${label.Name}.`;
                    result.bin = 'Organic';
                    result.text = 'Place it into the organics bin and you will get 25 points to your score!';
                    setState({...state, recognition: result});
                  }
                }
                resolve()
              }, 750)
            }
          });
        };
      })(file);
      reader.readAsArrayBuffer(file);
    })
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

  return {
    state,
    setState,
    convertToArray,
    convertToObject,
    updateScore,
    ProcessImage
  };
};