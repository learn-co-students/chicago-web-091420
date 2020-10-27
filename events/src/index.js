



function main(){
  createButtonListeners()
  createFormListener()
}



main()



function createFormListener(){
  const form = document.querySelector('form')

  form.addEventListener('submit', function(event){
    event.preventDefault();

    const userInput = event.target['comment-field'].value
    form.reset()


    const pTag = document.createElement('p')
    pTag.innerText = userInput


    const commentsContainer = document.querySelector('#comments-container')

    commentsContainer.append(pTag)


  })

}







  // X create a variable that captures the form
  // X bind that form to an event listener ( specifically: submit)
  //  once submitted:
  //    X preventDefault
  //    X grab the text that they typed into the input field
  //    X passing the text to a variable
  //    create an element and add the inputted text to that element
  //
  //    grab the CommentsContainer div
  //    render that new element to the commentsContainer div


























function createButtonListeners(){
  const alertBtn = document.querySelector('#alert-btn')

  alertBtn.addEventListener('click', function(){
    alert('You Clicked!')
  })


  const logBtn = document.getElementById('console-btn');

  logBtn.addEventListener('click', function(){
    console.log('clicked')
  });
}





























// find the button we're interested in (alert me button)
// bind that button to an eventlistener ('click' event)
//  once click happens:
//        trigger an alert

// alertBtn.addEventListener(typeOfEvent, whatToDoWhenTheEventFires)




