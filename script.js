const image=React.createElement("img",{
    src:"",
    width:"150",
    height:"150",
    alt:"Book Image"
},null);

const h4=React.createElement("h4",null,"Price:350/-");
const child=React.createElement("div",{className:"card"},image,h4);

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
// ReactDOM.render(child,parent);
root.render(child);