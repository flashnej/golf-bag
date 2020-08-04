class Api::V1::BagsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = current_user

    bags = user.bags
    render json: {
      bags: bags
    }
  end

  def create
    name = params["name"]
    user = current_user
    bag = Bag.new(user:user, name:name)

    if bag.save
      render json: {bag: bag}
    else
      render json: {error: bag.errors.full_messages }, sttus: :unprocessable_entity
    end
  end

  def show
    render json: Bag.find(params[:id])
  end

end
