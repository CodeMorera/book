
const myLibrary = [];

class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title,author,pages,read);
    this.reset();
});

function displayBooks(){
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    myLibrary.forEach((book, index) =>{
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML =
        `<h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>${book.read ? 'Read' : 'Not Read'}</p>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function addBookToLibrary(title,author,pages,read){
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    displayBooks();
}

function removeBook(index){
    myLibrary.splice(index,1);
    displayBooks();
}
