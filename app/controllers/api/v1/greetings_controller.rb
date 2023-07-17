class Api::V1::GreetingsController < ApplicationController
  def index
    @greet = Greeting.order('RANDOM()').first
    render json: @greet
  end
end
