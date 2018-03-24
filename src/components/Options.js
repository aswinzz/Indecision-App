import React from 'react';
import Option from './Option.js';

const Options = (props)=> (
    <div>
    <div className="delete-all header__subtitle">Your Options <button className="button" onClick={props.handleDeleteAll}>Delete All</button></div>
    <hr/>
        {
            props.options.map((option)=>{
                return (
                        <Option handleDeleteOption={props.handleDeleteOption} key={option} option={option}/>
                );
            })
        }
    <hr/>
    </div>
);

export default Options;