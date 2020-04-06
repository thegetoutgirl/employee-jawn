import React from 'react';

// import '../src/lumen-bootstrap.css';

// Search Component *could use some styling!*
export default function Search(props) { 

        return (
          <div className="search">
              <input
                onChange={props.handler}
                value={props.defaultValue}
                name="search"
                type="text"
                className="searchInput"
                placeholder="Find an employee"
                id="search"
              />
            </div>
        );
};