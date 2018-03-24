
console.log("Hello React");



let app = {
    title : "Indecision App",
    subtitle : "ReactJS Tutorial",
    options : []
}

function displaySubtitle(subtitle){
    if(subtitle){
        return <p>{subtitle}</p>;
    }
}


const onMakeDecision = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random()*app.options.length);
    
    const option = app.options[randomNum];
    alert(option);
}

const onRemoveAll = () => {
    app.options = [];
    renderFunction();
}
let optionCount=0;
const num = [55,66,77];
const renderFunction = () => {
    let template = (
        <div>
            <h1>{app.title ? app.title : 'No Title'}</h1>
            {displaySubtitle(app.subtitle)}
            
                <button disabled={app.options.length==0} onClick={onMakeDecision}>What Should i do?</button>
            
                <button onClick={onRemoveAll}>Remove All</button>
            
        
            <h2>Options</h2>
            <ol>
            {
                app.options.map((option)=>{
                    return <li key={optionCount++}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="Option"/>
                <button>Add Option</button>
            </form>
            
            
        </div>
    );

    ReactDOM.render(template,appRoot);
}

const onFormSubmit = (e) => {
    e.preventDefault();
    app.options.push(e.target.Option.value+' ');
    renderFunction();
};



let appRoot = document.getElementById('app');

renderFunction();