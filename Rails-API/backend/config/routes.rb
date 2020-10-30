Rails.application.routes.draw do
  
    namespace :api do
        namespace :v1 do
            resources :instructors
            resources :students
        end

        # namespace :v2 do
        # end
    end
end
