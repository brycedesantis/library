function saveMyBooks(index) {
	let myBooks = JSON.parse(localStorage.getItem("myBooks")) || []
	let toAdd = index
	let previouslyAdded = myBooks.some((entry) => entry.title === toAdd.title)
	if (!previouslyAdded) {
		myBooks.push(toAdd)
		localStorage.setItem("myBooks", JSON.stringify(myBooks))
	}
}

export default saveMyBooks
