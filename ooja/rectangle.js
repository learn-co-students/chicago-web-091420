



class Rectangle {
  constructor(width, height, color){
    this.width = width
    this.height = height 
    this.color = color 
    this.element = document.createElement('div')

    this.addClickListener()
  }

  addClickListener(){
    this.element.addEventListener('click', () => {
      this.height += 15
      this.width += 15

      this.updateStyles()
    })
  }

  updateStyles(){
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`
    this.element.style.backgroundColor = this.color 
  }


  render(){
    this.updateStyles()

    const main = document.querySelector('main')
    main.append(this.element)
  }
}




const myRect = new Rectangle(50, 100, 'yellow')

myRect.render()





































// Blueprint for what Person

// Constructor: 
  // the first method to b e ran when an object is instantiated
  //
  // here you will:
  //  set attributes
  //  invoke methods that need to be invoked right at the onset



/*
class Person {
  constructor(name, city){
    this.isVerified = false
    this.name = name 
    this.city = city
  }

  sendEmail(){
    console.log('-email sent-----');
  }


  sayHello(){
    console.log('-hello-----');
  }
}



class Employee extends Person {
  constructor(name, city, tenure){
    super(name, city)

    this.tenure = tenure
  }

  sayHello(){
    console.log('-hi-----');
  }

  static disclosure(){
    console.log('This class represents an at will employment')
  }
}



const barbara = new Employee('barbara', 'chicago', 4)

barbara.sayHello()

Employee.disclosure()

*/
