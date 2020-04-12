import React, { useEffect, useState, useContext } from 'react';
import { FilterButtonContext } from './helpers/FilterContext.js';
import {
  handleByNewestFilter,
  handleByOldestFilter,
  handleByRatingFilter,
} from './helpers/FilterHandler.js';
import SearchButton from './components/SearchButton.jsx';
import Filters from './components/Filters.jsx';
import Video from './components/Video.jsx';

export default function App() {
  const [videoData, setVideoData] = useState([]);
  const [filteredVideoData, setFilteredVideoData] = useState([]);
  const [filterState, setFilterState] = useContext(FilterButtonContext);

  useEffect(() => {
    fetch('http://localhost:5000/fetch_videos')
      .then((res) => res.json())
      .then(
        (result) => {
          setFilteredVideoData(handleByNewestFilter(result));
          setVideoData(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const handleFilterSwitch = (index, data) => {
    const dataToFilter = data !== undefined ? data : filteredVideoData;
    setFilterState((state) => ({ ...state, activeFilter: index }));

    switch (index) {
      case 0:
        setFilteredVideoData(handleByNewestFilter(dataToFilter));
        break;
      case 1:
        setFilteredVideoData(handleByOldestFilter(dataToFilter));
        break;
      case 2:
        setFilteredVideoData(handleByRatingFilter(dataToFilter));
        break;
      default:
        setFilteredVideoData(handleByNewestFilter(dataToFilter));
        break;
    }
  };

  const handleSearch = (search) => {
    const input = search.target.value;
    const items = videoData.filter((data) => {
      if (input == null) return data;
      else if (
        data.title
          .toString()
          .toLowerCase()
          .includes(input.toString().toLowerCase()) |
        data.tags.includes(input.toString().toLowerCase())
      ) {
        return data;
      }
    });
    handleFilterSwitch(filterState.activeFilter, items);
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Front End Test</h1>
      </div>
      <div className="action-container">
        <SearchButton input={handleSearch} />
        <Filters onClick={handleFilterSwitch} />
      </div>
      <div>
        <ul className="video-list">
          {filteredVideoData.length > 0 ? (
            filteredVideoData.map((item) => {
              return <Video data={item} key={item.id} />;
            })
          ) : (
            <p style={{ textAlign: 'center' }}>No search results</p>
          )}
        </ul>
      </div>
    </>
  );
}
