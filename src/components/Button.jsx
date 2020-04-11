import React, { useState, useEffect } from 'react';

export default function Button(props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    props.active === props.id ? setIsActive(true) : setIsActive(false);
  }, [props.active]);
  return (
    <div
      onClick={props.onClick}
      className={`${isActive ? 'button-container-active' : 'button-container'}`}
    >
      <p>{props.text}</p>
    </div>
  );
}
