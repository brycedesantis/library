function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false

    this.info = function() {
        if (read === false) {
            return `${title} by ${author}, ${pages} pages, not read yet`
        } else {
            return `${title} by ${author}, ${pages} pages, read`
        }
    }
}