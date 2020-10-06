class ApplicationController < Sinatra::Base
    set :views, 'app/views'
    set :method_override, true

   # home
    get '/' do
    #   return "home"
        erb :home
    end

    # books_index
    get '/books' do
        @books = Book.all

        erb :index
    end

    # books_new
    get '/books/new' do
        erb :new
    end

    # books_show
    get '/books/:id' do
        @book = Book.find(params[:id])

        erb :show
    end

    # books_create
    post '/books' do
        book = Book.create(params)
        
        redirect "/books/#{book.id}"
    end

    # books_edit
    get '/books/:id/edit' do
        @book = Book.find(params[:id])

        erb :edit
    end

    # books_update
    patch '/books/:id' do
        book = Book.find(params[:id])

        new_attributes = {
            title: params[:title],
            author: params[:author],
            snippet: params[:snippet]
        }

        book.update(new_attributes)

        redirect "/books/#{book.id}"
    end

    # books_delete
    delete "/books/:id" do
        book = Book.find(params[:id])
        
        book.delete
        redirect "/books"
    end
end
