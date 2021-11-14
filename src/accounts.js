function findAccountById(accounts, id) {
  let result = accounts.find(account => account.id === id)
  return result;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
  //account obj, and array of books.
  let count = 0;
  books.forEach(book => {
    book.borrows.forEach(checkedOut =>{
      if(checkedOut.id === account.id) {
        count++
      }
    })
  } )
return count
}

function getBooksPossessedByAccount(account, books, authors) {
 //return all books taken out by the account given, with author embedded.
return books.reduce((answer, book) => {      //loop through books
  if(!book.borrows[0].returned && book.borrows[0].id === account.id){   //if the borrowed status is false, and id matches account id
    book.author = authors.find(author => author.id === book.authorId);  //then create author key within book
    answer.push(book); //and push the book into answer
  }
  return answer
},[])
};


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

