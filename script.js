let myLibrary=[];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "read" : "not read";
    this.info = function () {
        return `This book is ${this.title} by ${this.author} has ${this.pages} pages, and you have ${this.read} it.`;
    };
}

function displayBooks() {
    let bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";

    myLibrary.forEach((book, i) => {
        let bookCardHtml = `
        <div class="book-card">
            <h2>Title: ${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        </div>
        `;
        bookContainer.innerHTML += bookCardHtml;
    });
}

function removeBook(i) {
    myLibrary.splice(i, 1);
    displayBooks();
}

function addtolibrary(book) {
    myLibrary.push(book);
}

document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById("book-form");
    bookForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let inpTitle = document.getElementById("title").value;
        let inpAuthor = document.getElementById("author").value;
        let inpPages = document.getElementById("pages").value;
        let inpRead = document.getElementById("read").checked;
        const newBook = new book(inpTitle, inpAuthor, inpPages, inpRead);
        addtolibrary(newBook);
        displayBooks();
        bookForm.reset();
    });
});