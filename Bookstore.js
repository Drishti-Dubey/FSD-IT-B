
    function Book()
    {
       const image= React.createElement("img",{src:"b1.jpeg",width:200,height:200,alt:"Book Image"},null);
       const h3=React.createElement("h3",{},"Title:English");
              const h4=React.createElement("h3",{},"Price:₹351/-");
              const btn=React.createElement("button",{},"ADD TO CART!");

              const child=React.createElement("div",{className:"card"},image,h3,h4,btn);

              return child;


    }


              const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
            //   root.render(React.createElement(Book));

            root.render(Book);



              
    