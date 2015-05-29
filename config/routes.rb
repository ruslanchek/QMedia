Rails.application.routes.draw do
  root 'pages#index'
  get '/:page', to: 'pages#super'
end
