Rails.application.routes.draw do  
  devise_for :users

  namespace :api do 
    namespace :v1 do 
      ## resources :trainings, defaults: {format: :json}
      resources :players, only: %i[index show], defaults: {format: :json}
    end 
  end

  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  get '/api/v1/users/:user', :to => 'api/v1/users#show'
  get '/api/v1/users/players', :to => 'api/v1/players#index'
  
  root 'welcome#home'
end
