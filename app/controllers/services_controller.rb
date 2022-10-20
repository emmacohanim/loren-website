class ServicesController < ApplicationController
    # takes active record objects and serializes them so that they appear as json
    def index
        services = Service.all
        render json: services
    end

end
