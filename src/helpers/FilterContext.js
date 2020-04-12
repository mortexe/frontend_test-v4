import React, { useState } from 'react'

const FilterButtonContext = React.createContext([{}, () => { }]);

const FilterButtonProvider = (props) => {
    const [state, setState] = useState({
        buttons: [
            {
                name: 'Newest first',
                id: 0,
            },
            {
                name: 'Oldest first',
                id: 1,
            },
            {
                name: 'Rating',
                id: 2,
            },
        ],
        activeFilter: 0
    });
    return (
        <FilterButtonContext.Provider value={[state, setState]}>
            {props.children}
        </FilterButtonContext.Provider>
    );
}

export { FilterButtonContext, FilterButtonProvider };