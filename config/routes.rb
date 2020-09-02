Rails.application.routes.draw do  
  devise_for :users

  namespace :api do 
    namespace :v1 do 
      resources :trainings, :players
    end 
  end

  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  get '/api/v1/users/:user', :to => 'api/v1/users#show'
  
  root 'welcome#home'
end
