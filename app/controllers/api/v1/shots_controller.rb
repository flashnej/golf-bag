class Api::V1::ShotsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    club_id = params["club"].to_i
    distance = params["distance"]

    shot = Shot.new(club_id:club_id, distance:distance)

    if shot.save
      render json: {shot: shot}
    else
      render json: {error: shot.errors.full_messages }, sttus: :unprocessable_entity
    end
  end

end
