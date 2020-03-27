import React from 'react';

function Header (props) {
    console.log(props)
    return (
        <div className="App">
            <h2>{props.title}</h2>
        </div>
    );
}

export default Header;
