const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {

}

let newBookBtn = document.querySelector('.new-book-btn')

newBookBtn.addEventListener('click', function() {
    let bookForm = document.querySelector('.form-holder')
    bookForm.style.display = 'block'
})