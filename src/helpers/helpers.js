import AWS from 'aws-sdk';

//Calls DetectLabels API and shows the labels of detected items
// export function DetectLabels(imageData) {
//   AWS.region = 'us-east-1';
//   var rekognition = new AWS.Rekognition();

//   /* This operation detects labels in the supplied image */
//   var params = {
//     Image: {
//     S3Object: {
//       Bucket: "which-bin-app", 
//       Name: "tomato.jpg"
//     }
//     }, 
//     MaxLabels: 123, 
//     MinConfidence: 70
//   };
//   rekognition.detectLabels(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//   });
// }

//Loads selected image and unencodes image bytes for Rekognition DetectFaces API
export function ProcessImage() {
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
            setTimeout(() => {
              for (let label of data.Labels) {
                // setState(data)
                document.getElementById("opResult").innerHTML += `<p>The item is a: ${label.Name} with a ${label.Confidence} probability.</p>`;
                if (label.Name === 'Glass' || label.Name === 'Cardboard') {
                  document.getElementById("bin").innerHTML = 'This item should go to the recycling bin.';
                } else if (label.Name === 'Plastic') {
                  document.getElementById("bin").innerHTML = 'This item should go to the garbage bin.';
                } else if (label.Name === 'Plant') {
                  document.getElementById("bin").innerHTML = 'This item should go to the organic bin.';
                }
              }
              resolve()
            }, 1000)
            // console.log(data);
            // for (let label of data.Labels) {
            //   // setRecognition(data)
            //   document.getElementById("opResult").innerHTML += `<p>The item is a: ${label.Name} with a ${label.Confidence} probability.</p>`;
            //   if (label.Name === 'Glass' || label.Name === 'Cardboard') {
            //     document.getElementById("bin").innerHTML = 'This item should go to the recycling bin.';
            //   } else if (label.Name === 'Plastic') {
            //     document.getElementById("bin").innerHTML = 'This item should go to the garbage bin.';
            //   } else if (label.Name === 'Plant') {
            //     document.getElementById("bin").innerHTML = 'This item should go to the organic bin.';
            //   }
            // }
            // resolve()
          }
        });
      };
    })(file);
    reader.readAsArrayBuffer(file);
  })
}

//Provides anonymous log on to AWS services
export function AnonLog() {
  
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