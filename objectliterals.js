console.log(
	"%c\n\nObject Literals",
	"font-family: sans-serif; color: black; font-weight: bold; font-size: 1.5rem;"
);

const book = {
	title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	pages: 180,
	isRead: false,
};

const summary = () => {
	console.log(
		`%cTitle: ${book.title}`,
		`color: grey; font-weight: light;`
	);
	console.log(
		`%cAuthor: ${book.author}`,
		`color: grey; font-weight: light;`
	);
	console.log(
		`%cPages: ${book.pages}`,
		`color: grey; font-weight: light;`
	);
	if (book.isRead === true) {
		console.log(
			`%cThis book has been read.`,
			`color: green; font-weight: light;`
		);
	} else {
		console.log(
			`%cThis book has not been read yet.`,
			`color: red; font-weight: light;`
		);
	}
};

summary();
