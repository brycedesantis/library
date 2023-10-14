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
}

let addBookBtn = document.querySelector('.add-book-btn')
addBookBtn.addEventListener('click', function() {
    event.preventDefault()
    addBookToLibrary()
})

let newBookBtn = document.querySelector('.new-book-btn')

newBookBtn.addEventListener('click', function() {
    let bookForm = document.querySelector('.form-holder')
    bookForm.style.display = 'block'
})