import React from 'react';

export default function Button(props) {
  return (
    <div onClick={props.onClick} className="button-container">
      <p>{props.text}</p>
    </div>
  );
}
