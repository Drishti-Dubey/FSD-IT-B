import './App.css'
function Book({book}){
    return (
        <div className='card'>
            <img src={book.image} width="200" height="200" alt="image"/>
            <h3>Title:{book.title}</h3>
            <h4>{book.price}</h4>
            <button>Add to Cart</button>
        </div>
    )
}
export default Book;