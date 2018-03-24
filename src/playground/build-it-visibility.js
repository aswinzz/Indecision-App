
class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            Show_Hide : 0
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                Show_Hide: (prevState.Show_Hide+1)%2
            };
        });
    }

    render() {
        return (
            <div>
                 <h1>Visibility</h1>        
                 <button onClick={this.handleToggleVisibility} name="visibility">{this.state.Show_Hide==0 ? 'Hide' : 'Show'}</button>        
                 {this.state.Show_Hide==0 && <p name="para">some paragraph</p>}
             </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));
