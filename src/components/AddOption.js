import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error : undefined
    };
    
    AddFunction = (e)=>{
        e.preventDefault();
        console.log(e.target.Option.value);
        const error = this.props.handleAddOption(e.target.Option.value);
        

        this.setState(()=>{
            return {
                error:error
            };
        });
    }
    render(){
        return (
            <div className="addoption">
            {this.state.error && <p className="header__subtitle">{this.state.error}</p>}
            <form onSubmit={this.AddFunction}>
                <input className="input" type="text" name="Option"/>
                <button className="small-button">Add Option</button>
            </form>
            </div>
        );
    }
}