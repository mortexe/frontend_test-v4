import React, { useCallback, useState } from 'react';
import Button from './Button.jsx';

export default function Filters(props) {
  const filterOptions = ['Newest first', 'Oldest first', 'Rating'];
  const [active, setActive] = useState(0);

  const handleFilterSwitch = useCallback(
    (index) => {
      setActive(index);
    },
    [setActive]
  );

  return (
    <div className="filter-container">
      <p className="title">Order By</p>
      {filterOptions.map((item, index) => (
        <Button
          key={index}
          id={index}
          active={active}
          onClick={() => handleFilterSwitch(index)}
          text={item}
        />
      ))}
    </div>
  );
}
