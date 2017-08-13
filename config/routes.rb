Rails.application.routes.draw do
  root 'dashboard#index'
  get '/aboutme', to: 'dashboard#aboutme'
  namespace :api do
    resources :books, only: [:index, :create, :destroy, :update] do
      get :search, on: :collection
    end
  end
end
