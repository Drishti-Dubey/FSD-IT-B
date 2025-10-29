
function Book(props) {
    const book = props.book; // access the book object passed from props
    return (
        <div>
            <img 
                src={book.image} 
                width="400" 
                height="400" 
                alt="book image"
            />
            <h3>Title: {book.title}</h3>
            <h4>Price: {book.price}</h4>
        </div>
    );
}

// define the book object
const b = {
    image: "b1.jpeg",
    title: "English",
    price: "456/-"
};

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// pass the object as a prop
root.render(<Book book={b} />);
