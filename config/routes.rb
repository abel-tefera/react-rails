Rails.application.routes.draw do
  get "/api/v1/greetings/random", to: "api/v1/greetings#random"

  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"
end
