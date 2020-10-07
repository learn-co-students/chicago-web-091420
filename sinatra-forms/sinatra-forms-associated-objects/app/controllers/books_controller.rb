class BooksController < ApplicationController
  # Index
  get '/books' do
    @books = Book.includes(:author).all

    erb :'books/index'
  end

  # Show
  get '/books/:id' do
    @book = Book.includes(:author).find(params[:id])

    erb :'books/show'
  end
end
