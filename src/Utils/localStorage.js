import toast from "react-hot-toast";

const getBooks = () =>{
    let books = []
    const storedBook = localStorage.getItem('books')
    if(storedBook){
        books = JSON.parse(storedBook);
    }
    return books;
}
//save
const saveBook = book => {
    let books = getBooks();
    const isExist = books?.find(b => b.id == book.id)
    if(isExist){
        return toast.error('Already in read');
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Added to read');
}

const getWishes = () =>{
    let wishes = []
    const storedWish = localStorage.getItem('wishes')
    if(storedWish){
        wishes = JSON.parse(storedWish);
    }
    return wishes;
}
const saveWishList = book =>{
    let wishes = getWishes();
    const isExist = wishes?.find(b => b.id == book.id);
    if(isExist){
        return toast.error('Already in wishlist');
    }
    let books= getBooks();
    const isExistInBooks = books?.find(b => b.id == book.id);
    if(isExistInBooks){
        return toast.error('Already in read');
    }
    wishes.push(book)
    localStorage.setItem('wishes', JSON.stringify(wishes))
    toast.success('Added to wishlist');
}
export {getBooks, saveBook, saveWishList,getWishes}