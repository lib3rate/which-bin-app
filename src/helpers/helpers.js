import React, { useState } from "react";
import AWS from 'aws-sdk';
import axios from "axios";

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
    const result = {
      'organic': 0,
      'recycling': 0,
      'garbage': 0
    };
    let total = 0;
    for (let item of data) {
      result[item.name] = Number(item.sum);
      total += Number(item.sum);
    }
    result.total = total;
    result.username = data[0].username;
    result.userId = data[0].user_id;
    return result;
  };

  function findUserById(userId) {
    let foundUser = {};
    
    for (let user of state.userBins) {
      if (user.user_id === userId)
      foundUser = user;
    };

    return foundUser;
  }

  function updateScore(bin) {
    let updatedUser = state.user;
    let updatedTotal = state.user.total;
    let updatedOrganic = state.user.organic;
    let updatedRecycling = state.user.recycling;
    let updatedGarbage = state.user.garbage;
    const userId = state.user.userId;
    let foundUser = findUserById(userId);
    let binId = 1;
    let score = 0;

    if (bin === 'Organic') {
      score = 25;
      updatedTotal += 25;
      updatedOrganic += 25;
      updatedUser = {
        ...updatedUser,
        total: updatedTotal,
        organic: updatedOrganic
      };
    } else if (bin === 'Recycling') {
      binId = 2;
      score = 25;
      updatedTotal += 25;
      updatedRecycling += 25;
      updatedUser = {
        ...updatedUser,
        total: updatedTotal,
        recycling: updatedRecycling
      };
    } else if (bin === 'Garbage') {
      binId = 3;
      score = 10;
      updatedTotal += 10;
      updatedGarbage += 10;
      updatedUser = {
        ...updatedUser,
        total: updatedTotal,
        garbage: updatedGarbage
      };
    }

    foundUser.score = updatedTotal;

    const item = {
      userId,
      binId,
      score
    };

    return (
      axios.put(`/api/user_bins`, {item})
        .then(() => {
          setState({
            ...state,
            user: updatedUser
          })
        })
    );
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
              console.log(data);

              const result = {
                label: '',
                bin: '',
                text: ''
              }
              setTimeout(() => {
                getLabels(data);
                resolve()
              }, 400)
            }
          });
        };
      })(file);
      reader.readAsArrayBuffer(file);
    })
  };
  
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
  };

  function ProcessPhoto() {
    return new Promise((resolve, reject) => {
  
      AnonLog();

      const canvas = document.getElementById('canvas');

      var dataUrl = canvas.toDataURL("image/jpeg");
      var file = dataURItoBlob(dataUrl);

      function dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    }

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
              console.log(data);

              setTimeout(() => {
                getLabels(data);
                resolve()
              }, 400)
            }
          });
        };
      })(file);
      reader.readAsArrayBuffer(file);
    })
  };

  function getLabels(data) {
    const result = {
      label: '',
      bin: '',
      text: ''
    };

    let found = false;

    for (let label of data.Labels) {
      if (label.Name === 'Glass' || label.Name === 'Cardboard' || label.Name === 'Can') {
        // const name = label.Name.toLowerCase;
        found = true;
        result.label = `You have submitted a ${label.Name}.`;
        result.bin = 'Recycling';
        result.text = 'Place it into the recycling bin and you will get 25 points to your score!';
        setState({...state, recognition: result});
      } else if (label.Name === 'Plastic') {
        found = true;
        result.label = `You have submitted some ${label.Name}.`;
        result.bin = 'Garbage';
        result.text = 'Please put it into the garbage bin to get 10 points and use more recycled items, when possible.';
        setState({...state, recognition: result});
      } else if (label.Name === 'Plant') {
        found = true;
        result.label = `You have submitted a ${label.Name}.`;
        result.bin = 'Organic';
        result.text = 'Place it into the organics bin and you will get 25 points to your score!';
        setState({...state, recognition: result});
      }
      if (!found) {
        result.label = `Sorry, we didn't recognize the item.`;
        result.bin = 'Garbage';
        result.text = 'Please put it into the garbage bin to get 10 points anyway.';
        setState({...state, recognition: result});
      }
    }
  };

  return {
    state,
    setState,
    convertToArray,
    convertToObject,
    updateScore,
    ProcessImage,
    ProcessPhoto
  };
};