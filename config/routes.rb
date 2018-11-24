Rails.application.routes.draw do
  root to:"samples#home"	
  get '/home' => "samples#home"
  get '/forms/form' => "forms#form"
end
