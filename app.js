const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked

    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    addToShelf()
}

let addBookBtn = document.querySelector('.add-book-btn')
addBookBtn.addEventListener('click', function() {
    event.preventDefault()
    addBookToLibrary()
})

function addToShelf() {
    let libraryShelf = document.querySelector('.library-shelf')
    libraryShelf.textContent = ''
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookLabels = document.createElement('div')
        bookLabels.setAttribute('class', 'book')
        bookLabels.innerHTML = `
                <h3 id="book-title">${book.title}</h3>
                <h4 id="book-author">By ${book.author}</h4>
                <h4 id="page-count">${book.pages} pages</h4>
                <h4 id="read-status">${book.read ? 'Read' : 'Not Read'}</h4>`
        libraryShelf.appendChild(bookLabels)
    }

}

let newBookBtn = document.querySelector('.new-book-btn')

newBookBtn.addEventListener('click', function() {
    let bookForm = document.querySelector('.form-holder')
    bookForm.style.display = 'block'
})