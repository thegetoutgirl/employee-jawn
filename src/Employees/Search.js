import React from 'react';

export default function Search(props) { 
        return (
          <div>
              <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="searchInput"
                placeholder="Find an employee"
                id="search"
              />
            </div>
        );
};