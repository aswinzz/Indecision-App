
class Counter extends React.Component {
    
    constructor(props){
        super(props);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handlePlusOne=this.handlePlusOne.bind(this);
        this.handleResetAll=this.handleResetAll.bind(this);
        this.state = {
            count: props.countValue
        }
    }

    handlePlusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            };
        });
        console.log(this.state.count);
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            };
        });
    }

    handleResetAll(){
        this.setState((prevState)=>{
            return {
                count:0
            };
        });
    }

    
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetAll}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
        count : 0
};

ReactDOM.render(<Counter countValue={10}/>,document.getElementById('app'));