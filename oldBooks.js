function oldBooks(input) {

    let index = 0;
    let wantedBook = input[index];
    index++;

    let checkedBooks = input[index];
    index++;

    let counter = 0;

    while (true) {
        if (checkedBooks === wantedBook) {
            console.log(`You checked ${counter} books and found it.`)
            break;
        }

        if (checkedBooks === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`);
            break;
        }

        checkedBooks = input[index];
        index++;
        counter++;
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);