require("sinatra/base")
require("json")

class Thermostat_App < Sinatra::Base
  enable :sessions

  get "/" do
    erb :index
  end

  post "/temperature" do
    p params
    session[:temperature] = params[:temperature]
  end

  get "/temperature" do
    content_type :json
    {temperature: session[:temperature]}.to_json
  end

  post "/powersave" do
    p params
    session[:power_save] = params[:ps_mode]
  end

  get "/powersave" do
    content_type :json
    {power_save: session[:power_save]}.to_json
  end

  post "/city" do
    p params
    session[:city] = params[:city]
  end

  get "/city" do
    content_type :json
    {city: session[:city]}.to_json
  end

  run! if app_file == $0

end
