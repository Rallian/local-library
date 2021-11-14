function findAuthorById(authors, id) {
  let auth = authors.find(author => author.id === id)
  return auth
}

function findBookById(books, id) {
  let bookCase = books.find(book => book.id === id)
  return bookCase;
}

function partitionBooksByBorrowedStatus(books) {
  //books = array of books
  // return one big array with two smaller arrays
  // smaller arrays have one that shows books borrowed and the other is books returned.
  let checkOutArray = books.filter (book => book.borrows[0].returned === false) //filter to see if the book has been returned
  let returnedArray = books.filter(book => book.borrows[0].returned === true)
  return [checkOutArray, returnedArray];
  }
  

function getBorrowersForBook(book, accounts) {
  //book is an object
  //array of all account objects
  let result = [];
    book.borrows.forEach((bookName) =>{ //loop through book.borrows
    accounts.forEach(acc =>{ //within that loop through accounts
      if(acc.id === bookName.id){ //match the id's
        acc.returned = bookName.returned; //create returned key within accounts obj.
        result.push(acc);
      }
    });
  })
  //limit to 10 objects in array
  return result.slice(0, 10) //.slice limits the return to 10
  }
  


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
