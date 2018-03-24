console.log("Hello React");



let app = {
    title : "Indecision App",
    subtitle : "ReactJS Tutorial",
    options : ['One','Two']
}

function displaySubtitle(subtitle){
    if(subtitle){
        return <p>{subtitle}</p>;
    }
}

function displayOptions(options){

    let rows = [];
    for (let i = 0; i < options.length; i++) {
        rows.push(options[i]+' ');
    } 

    return (<h2>{rows}</h2>);
}
let template = (
    <div>
        <h1>{app.title ? app.title : 'No Title'}</h1>
        {displaySubtitle(app.subtitle)}
        {displayOptions(app.options)}
    </div>
);

let user = {
    username : 'Aswin VB',
    age : 25,
    location : 'Allahabad'
}

function getLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}

let templateTwo = (
    <div>
        <h1>{user.username ? user.username : 'Anonymous'}</h1>
        {(user.age && user.age>=18) && <p>Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
    
);


let count = 0;
const counter = () => {
    console.log(count++);
    renderCounterApp();
};


let appRootTwo = document.getElementById('appTwo');

let appRootThree = document.getElementById('appThree');


ReactDOM.render(templateTwo,appRootTwo);

const renderCounterApp = () => {
    let templateThree = (
        <div>
            <h1>{count}</h1>
            <button onClick={counter}>+1</button>
        </div>
    );

    ReactDOM.render(templateThree,appRootThree);
};

renderCounterApp();