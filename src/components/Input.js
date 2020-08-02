import React from 'react';

export default function Input(props) {
  return (
    <>
      <input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        accept="image/*"
        onChange={props.onChange}
      >
      </input>
    </>
  )
}