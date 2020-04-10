import React, { useCallback } from 'react';
import Button from './Button.jsx';

export default function Filters(props) {
  const filterOptions = ['Newest first', 'Oldest first', 'Rating'];
  const handleFilterSwitch = useCallback((button) => {
    console.log('clicked: ' + button);
  }, []);

  return (
    <div className="filter-container">
      <p className="title">Order By</p>
      {filterOptions.map((item, index) => (
        <Button key={index} onClick={handleFilterSwitch} text={item} />
      ))}
    </div>
  );
}
