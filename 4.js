const books = [
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
    },
];

function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
}

function extractTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles);
}
extractTitles(books,logTitles)