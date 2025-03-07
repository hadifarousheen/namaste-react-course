import React from "react";
import ReactDOM from "react-dom/client"

//React Element
// const heading=React.createElement('h1',{id:"heading"},"Hello world");
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

//using JSX

const jsxheading=(
<h1 className="heading">Hello World</h1>
);

// root.render(jsxheading);


//functional component

const Heading=()=>{
    return <h1 className="heading">Hello React</h1>
}

const HeadingComponent=()=>(
    <div>
    {Heading()}
    <h1>Hello React2</h1>
    {12+2}
    {jsxheading}
    </div>
);


root.render(<HeadingComponent/>)