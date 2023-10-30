const myLibrary = []

class Book {
	constructor(title, author, pages, read) {
		this.title = title
		this.author = author
		this.pages = pages
		this.read = read
	}

	changeStatus() {
		this.read = !this.read
	}
}

function changeStatus(index) {
	myLibrary[index].changeStatus()
	addToShelf()
}

function addBookToLibrary() {
	let title = document.querySelector("#title").value
	let author = document.querySelector("#author").value
	let pages = document.querySelector("#pages").value
	let read = document.querySelector("#read").checked

	let newBook = new Book(title, author, pages, read)
	myLibrary.push(newBook)
	addToShelf()
}

let addBookBtn = document.querySelector(".add-book-btn")
let title = document.querySelector("#title")
let author = document.querySelector("#author")
let pages = document.querySelector("#pages")
addBookBtn.addEventListener("click", function () {
	if (
		title.validity.valueMissing ||
		author.validity.valueMissing ||
		pages.validity.valueMissing
	) {
		title.setCustomMessage("Please fill out field")
	} else {
		event.preventDefault()
		addBookToLibrary()
	}
})

function addToShelf() {
	let libraryShelf = document.querySelector(".library-shelf")
	libraryShelf.textContent = ""
	for (let i = 0; i < myLibrary.length; i++) {
		let book = myLibrary[i]
		let bookLabels = document.createElement("div")
		bookLabels.setAttribute("class", "book")
		bookLabels.innerHTML = `
                <h3 id="book-title">${book.title}</h3>
                <h4 id="book-author">By ${book.author}</h4>
                <h4 id="page-count">${book.pages} pages</h4>
                <button id="read-status" onclick=changeStatus(${i})>${
									book.read ? "Read" : "Not Read"
								}</button>
                <button id='delete-button' onclick=deleteBook()>Delete</button>`
		libraryShelf.appendChild(bookLabels)
	}
}

function deleteBook(index) {
	myLibrary.splice(index, 1)
	addToShelf()
}

let newBookBtn = document.querySelector(".new-book-btn")

newBookBtn.addEventListener("click", function () {
	let bookForm = document.querySelector(".form-holder")
	if (bookForm.style.display === "block") {
		bookForm.style.display = "none"
	} else {
		bookForm.style.display = "block"
	}
})
