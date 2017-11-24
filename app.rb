require("sinatra/base")

class Thermostat_App < Sinatra::Base

  get "/" do
    erb :index
  end

  run! if app_file == $0

end
