function Book(props)
{
    const image=React.createElement("img",
        {src:props.image,width:150,height:150,alt:"Book Image"}
    );

    const h4=React.createElement("h4",{price:props.price});
    const child=React.createElement("div",{className:"card"},image,h4);
    return (child);
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
const image1="";
const price1="445/-";
root.render(React.createElement(Book,{image:image1},{price:price1}));
