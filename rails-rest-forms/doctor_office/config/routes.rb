Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :doctors, only: [:index, :show, :new, :create]
  resources :authors do
    resources :books
    # /authors/23/books/2
  end
  # /authors/23
end
