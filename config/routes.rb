Rails.application.routes.draw do
  root 'static_pages#index'

  devise_for :users

  get '/addAClub', to: 'static_pages#index'
  get '/club/:id', to: 'static_pages#index'
  get ':id/addAShot', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :clubs, only: [:index, :create, :show] do
        resources :shots, only: [:index, :create, :show]
      end
    end
  end
end
