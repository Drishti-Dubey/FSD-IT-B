function Book(book)
{

const image = React.createElement("img", { 
  src: book.image, 
  width: 200, 
  height: 200, 
  alt: "Book Image" 
}, null);

const h3 = React.createElement("h3", null,book.title);
const h4 = React.createElement("h4", null,book.price);
const btn = React.createElement("button", null, "ADD TO CART");

const div = React.createElement("div", { className: "card" }, image, h3, h4, btn);
return div;
}

const books=[
    {    image:" ",
    tile:Physics,
    price:451},

    {image:" ",
    tile:Physsics,
    price:452},

    { image:" ",
    tile:Physssics,
    price:453}
]

const bookele=books.map((b,i)=>(
    React.createElement(Book,{
        key:i,
        image:b.image,title:b.title,price:b.price
    },null)
))

const booklist=React.createElement("div",{className:"booklist"},bookele);
const parent = document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(booklist);

