import React, { useEffect } from 'react';
import path from 'path';
import SearchButton from './components/SearchButton.jsx';
import Filters from './components/Filters.jsx';
import Video from './components/Video.jsx';

export default function App() {
  const handleSearch = (input) => {
    console.log(input.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:5000/fetch_videos')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="title">Front End Test</h1>
      </div>
      <div className="action-container">
        <SearchButton input={handleSearch} />
        <Filters />
      </div>
      <div>
        <h1>Video Section</h1>
      </div>
    </>
  );
}
