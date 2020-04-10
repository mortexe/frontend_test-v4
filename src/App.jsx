import React from 'react';
import SearchButton from './components/SearchButton.jsx';
import Filters from './components/Filters.jsx';

export default function App() {
  const handleSearch = (input) => {
    console.log(input.target.value);
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Front End Test</h1>
      </div>
      <div className="action-container">
        <SearchButton input={handleSearch} />
        <Filters />
      </div>
      <div>{/* <h1>Video Section</h1> */}</div>
    </>
  );
}
