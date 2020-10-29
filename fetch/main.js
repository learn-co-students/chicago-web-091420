



function main(){
  renderBooks()
  createFormListener()
}


function createFormListener(){
  const form = document.querySelector('form')

  form.addEventListener('submit', function(event){
    event.preventDefault()

    const formData = {
      title: event.target['title'].value,
      author: event.target['author'].value
    }


    event.target.reset()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }



    fetch('http://localhost:3000/books', reqObj)
    .then(resp => resp.json())
    .then(book => {
      renderBook(book)
    })
  })
}

function renderBook(book){
  const booksContainer = document.getElementById('book-list')
  booksContainer.innerHTML += `<p>${book.title} - ${book.author}<button class='remove-btn'>remove</button></p>`
}


// function renderBook(book){
  // const pTag = document.createElement('p')
  // pTag.innerText = `${book.title} - ${book.author}`

  // const deleteBtn= document.createElement('button')
  // deleteBtn.innerText = 'remove'
  // deleteBtn.className = 'remove-btn'

  // const booksContainer = document.getElementById('book-list')

  // pTag.append(deleteBtn)
  // booksContainer.append(pTag)
// }






function renderBooks(){
  fetch('http://localhost:3000/books')
  .then(resp => resp.json())
  .then(books => {
    books.forEach(renderBook)

    // books.forEach(function(book){
      // renderBook(book)
    // })
  })


  // grab all of the books from the BackEnd (fetch)
  // once wwe have the array of books
  //   iterate over the array of books:
  //     for each book
  //       create a ptag and throw it in the bookcontainer div
}


main()





// psuedocode for Form:
  // find the form
  // bind an eventlistener (submit)
  // once submitted
  //    prevent the default behavior of the form.
  //    scrape the data from the form using e.target
  //
  //      UPDATE THE BACKEND:
//
  //      UPDATE THE FRONTEND:
  //         create a ptag
  //         update its inner text
  //         append it to the bookContainer div
  //


