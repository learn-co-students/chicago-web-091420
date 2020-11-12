// class Rectangle {
  // constructor(rectInfo) {
    // this.height = rectInfo.height
    // this.width = rectInfo.width
    // this.color = rectInfo.color
    // this.element = document.createElement('div')
    // this.element.addEventListener('click', () => {
      // console.log("clicked")
      // this.height = this.height * 2
      // this.width = this.width * 2
      // this.render()
    // })
  // }

  // area() {
    // return this.height * this.width
  // }

  // render() {
    // this.element.style.height = `${this.height}px`
    // this.element.style.width = `${this.width}px`
    // this.element.style.background = `${this.color}`

    // return this.element
  // }

  // static largestRect(rectangles) {
    // let largest = rectangles[0]
    // rectangles.forEach(function(rectangle) {
      // if (largest.area() < rectangle.area()) {
        // largest = rectangle
      // }
    // })
    // return largest
  // }
// }

// let floorTile = new Rectangle({height: 20, width: 6, color: "blue"})
// let ceilingTile = new Rectangle({height: 40, width: 10, color: "red"})

// // console.log(ceilingTile.render())

// document.addEventListener('DOMContentLoaded', () => {
  // document.getElementsByTagName('main')[0].append(ceilingTile.render())
// })

