function sortAndSlice(arr) { //helper function to limit return size
  arr.sort((a,b) => b.count - a.count)
  return arr.slice(0,5)

}

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter((book) => 
  book.borrows.filter((record) => record.returned === false).length > 0); 
  return booksCheckedOut.length;
  }


function getMostCommonGenres(books) {
  let result = {};
  books.forEach((book) => { //loop through books
    if (result[book.genre]== null) { //if obj doesn't have the genre with a count
      result[book.genre] = 1;  //create genre with a count
    }else{
      result[book.genre] += 1; //if it has one add to count
    }
  })
  let countArray = []; //wants it returned in array format
  for (const [key, value] of Object.entries(result)) {  //loop through our result obj.
    countArray.push({  //push the genre into name key, and count into count value
      'name': key,
      'count': value
    });
  }
  return sortAndSlice(countArray); //return array sorted and only allowing 5 answers.
}


function getMostPopularBooks(books) {
  let popular = books.map ((book) => { //loop through books using map to make a new arr
    return {name: book.title, count: book.borrows.length}; //return obj that has book title, and number of times its been borrowed.
  })
  return sortAndSlice(popular) //sort and keep to within 5 answers.
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {  //loop through authors
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`, //create obj populated by author first/last name.
      count: 0 //set count to 0
    }; 
  books.forEach((book) => { //nested loop through books
  if(book.authorId === author.id) {  //if author id in book matches author id from authors loop
    theAuthor.count += book.borrows.length; //add to the count we created in theAuthor obj = the length of borrows
  }
  })  
  result.push(theAuthor) //push into result arr
  });
return sortAndSlice(result) //sort and return result arr
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
