import React, { useContext } from 'react';
import { FilterButtonContext } from '../helpers/FilterContext';
import Button from './Button.jsx';

export default function Filters(props) {
  const [filterState] = useContext(FilterButtonContext);

  return (
    <div className="filter-container">
      <p className="title">Order By</p>
      {filterState.buttons.map((item) => (
        <Button
          key={item.id}
          id={item.id}
          active={filterState.activeFilter}
          onClick={() => props.onClick(item.id)}
          text={item.name}
        />
      ))}
    </div>
  );
}
