  Rails.application.routes.draw do
  root to:"samples#home"	
  get'/signin' => "samples#signin"
  get '/home' => "samples#home"
  end
