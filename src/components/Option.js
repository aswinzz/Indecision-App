import React from 'react';

const Option = (props) => (
        <div className="option">
            {props.option} <button className="button" onClick={(e)=>{props.handleDeleteOption(props.option)}}>Remove</button>
        </div>
);


export default Option;