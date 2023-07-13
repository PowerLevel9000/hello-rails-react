class Api::V1::GreetingsController < ApplicationController
    def index
        @g = Greeting.all
        render json: @g
    end
end
