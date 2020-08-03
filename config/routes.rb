Rails.application.routes.draw do
  root 'static_pages#index'

  devise_for :users

  get '/addABag', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :bags, only: [:index, :create]
      end
    end
  end
