


import React from 'react'
import ImageCard from './ImageCard'


const images = [
  { url: 'https://images.unsplash.com/photo-1605546741978-365c16813d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
  { url: 'https://images.unsplash.com/photo-1605540838963-034885df2ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
  { url: 'https://images.unsplash.com/photo-1605544167665-5753acf4e479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
  { url: 'https://images.unsplash.com/photo-1605541365148-4c4a97f7d11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
  { url: 'https://images.unsplash.com/photo-1605468749337-5b7d94bc4aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
]


class ImageContainer extends React.Component {

  renderImages = () => {
    return images.map((imageObj, i) => {
      return <ImageCard key={i} url={imageObj.url} cat='dog' />
    })
  }



  render(){
    return (
      <div>
        { this.renderImages() }
      </div>
    )
  }
}


export default ImageContainer


