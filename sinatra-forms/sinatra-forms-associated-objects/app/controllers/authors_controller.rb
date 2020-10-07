class AuthorsController < ApplicationController
    
    # index
    get "/authors" do
        @authors = Author.all

        erb :"authors/index"
    end

    # show
    get "/authors/:id" do |id|
        @author = Author.includes(:books).find(id)

        erb :"authors/show"
    end
    # new 

    get "/authors/new" do
        
    
        erb :"authors/new"
    end

    # create
    post "/authors" do
        
    end
    # edit

    # update

    # delete
    delete "/authors/:id/delete" do |id|
        Author.find(id).delete
       
       redirect "authors"
    end
end
