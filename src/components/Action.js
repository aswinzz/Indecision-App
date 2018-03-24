import React from 'react';
const Action = (props)=> {
    return (
        <div>
            <button className="big-button" disabled={props.status==0? true : false} onClick={props.handlePick}>What Should I Do?</button>
        </div>
    );
}

export default Action;