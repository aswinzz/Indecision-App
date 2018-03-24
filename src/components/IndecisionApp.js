import React from 'react';

import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component{

    state = {
        options : [],
        selectedOption : undefined
    };

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('hi');
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        this.setState(() => ({options : options}));
    }


    componentWillUnMount() {
        
    }

    handleDeleteAll = () => {
        this.setState(()=>({options : []}));
    }

    handleSelectedOption = ()=> {
        this.setState(()=>({selectedOption :undefined}));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({selectedOption : option}));
    }

    handleDeleteOption = (optionToRemove) => {
        console.log('hdo'+optionToRemove);
        this.setState((prevState)=>({
            options: prevState.options.filter((option) =>{
                return optionToRemove!==option
            })
        }));
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter a valid input';
        }
        else if(this.state.options.indexOf(option)!=-1){
            return 'Already Present';
        }
        else {
            this.setState((prevState)=>({options : prevState.options.concat(option)}));
        }
    }

    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <Action handlePick={this.handlePick} status={this.state.options.length}/>
                    <div class="option-container">
                        <Options handleDeleteOption={this.handleDeleteOption} handleDeleteAll={this.handleDeleteAll} options={this.state.options}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                    <OptionModal handleSelectedOption={this.handleSelectedOption} selectedOption={this.state.selectedOption}/>
                </div>
            </div>
        );
    }
}
