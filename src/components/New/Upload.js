import React from 'react';

export default function Upload(props) {
  return (
    <input
      type="file"
      name="fileToUpload"
      id="fileToUpload"
      accept="image/*"
      // capture="environment"
      onChange={props.onChange}
    >
    </input>
  )
}