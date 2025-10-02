console.log(
	"%c\n\nObject Literals",
	"font-family: sans-serif; color: black; font-weight: bold; font-size: 1.5rem;"
);

const book = {
	title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	pages: 180,
	isRead: false,
    summary() {
        return `${this.title} by ${this.author}, ${this.pages} pages. Read: ${this.isRead ? "The book has been read." : "The book hasn't been read yet."}`;
    }
};

console.log(book.summary());
