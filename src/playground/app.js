

const Header = (props)=>{
    return (
        <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        </div>
    );
}

Header.defaultProps  = {
    title :'Indecision',
    subtitle:'React App'
};

const Action = (props)=> {
    return (
        <div>
            <button disabled={props.status==0? true : false} onClick={props.handlePick}>What Should I Do?</button>
        </div>
    );
}

const Options = (props)=> {
    return (
        <div>
        <button onClick={props.handleDeleteAll}>Delete All</button>
            {
                props.options.map((option)=>{
                    return ( 
                        <Option handleDeleteOption={props.handleDeleteOption} key={option} option={option}/>
                    );
                })
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.option} <button onClick={(e)=>{props.handleDeleteOption(props.option)}}>Remove</button>
        </div>
    );
}

class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        }
    }

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

    handleDeleteAll(){
        this.setState(()=>({options : []}));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOption(optionToRemove){
        console.log('hdo'+optionToRemove);
        this.setState((prevState)=>({
            options: prevState.options.filter((option) =>{
                return optionToRemove!==option
            })
        }));
    }

    handleAddOption(option){
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
                <Action handlePick={this.handlePick} status={this.state.options.length}/>
                <Options handleDeleteOption={this.handleDeleteOption} handleDeleteAll={this.handleDeleteAll} options={this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}



class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.AddFunction = this.AddFunction.bind(this);
        this.state = {
            error : undefined
        };
    }

    AddFunction(e){
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
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.AddFunction}>
                <input type="text" name="Option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// const jsx = (
//     <div>
        
//     </div>
// );





ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));