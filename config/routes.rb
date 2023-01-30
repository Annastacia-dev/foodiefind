Rails.application.routes.draw do
  resources :reviews
  resources :restaurants
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # user authentication routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#profile"
  patch "/me", to: "users#update"
  delete "/me", to: "users#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
