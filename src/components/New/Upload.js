import React from 'react';
import Input from '@material-ui/core/Input';

export default function Upload(props) {
  return (
    // <input
    <Input
      type="file"
      name="fileToUpload"
      id="fileToUpload"
      accept="image/*"
      // capture="environment"
      onChange={props.onChange}
    >
    </Input>
    // </input>
  )
}