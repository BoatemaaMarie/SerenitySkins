Rails.application.routes.draw do
  resources :services, only: [:index, :show] do 
    resources :appointments, only: [:create]
  end
  resources :appointments, only: [:show, :update, :destroy, :index]
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # put '/services/:service_id/appointments/:id', to: 'appointments#add_appointment'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
