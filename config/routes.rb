Rails.application.routes.draw do
  
  resources :customers, only: [:index, :show, :create, :update, :destroy]
  resources :questions, only: [:create]
  resources :urls, only: [:index, :create]
  #resources :users

  post "/signup", to: "users#create"
  get "/profile", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
