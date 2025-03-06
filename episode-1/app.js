// const heading=React.createElement("h1",{id:"heading"},"Hello World");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"children"},React.createElement('h1',{id:"heading"},"Hello")));

// root.render(parent);


//creating siblings

const root=ReactDOM.createRoot(document.getElementById("root"));

const parent=React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child"},[React.createElement('h1',{id:"heading"},"hello"),React.createElement('h1',{id:"heading"},"world")]),React.createElement('div',{id:"child"},[React.createElement('h1',{id:"heading"},"hello"),React.createElement('h1',{id:"heading"},"world")])]);

root.render(parent);