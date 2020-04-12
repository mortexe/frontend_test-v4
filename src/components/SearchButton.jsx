import React from 'react';

export default function SearchButton(props) {
  return (
    <div className="align-search">
      <input
        id="r-search"
        type="text"
        placeholder="Search..."
        onChange={props.input}
      />
    </div>
  );
}
