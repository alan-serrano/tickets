import React from 'react';

function Wrapper(props) {
    return (
        <div className="wrapper-tickets">
            {props.children}
        </div>
    );
}

export default Wrapper;