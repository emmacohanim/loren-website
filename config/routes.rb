Rails.application.routes.draw do
  resources :subscriptions
  resources :services, only: [:index, :show]
  resources :users, only: [:create, :update, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  # user routes
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/my_account', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
  patch "/my_account/edit", to: "users#update"

  # subscription routes
  get '/my_account/subscriptions', to: 'subscriptions#index'
  post '/purchase_subscription', to: 'subscriptions#create'
  delete '/my_account/subscriptions/cancel', to:'subscriptions#destroy'

  # service routes
  get '/services', to: 'services#index'
end
