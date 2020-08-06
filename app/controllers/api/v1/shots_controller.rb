class Api::V1::ShotsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    club_id = params["club"].to_i
    distance = params["distance"]
    shot_quality = params["shotQuality"]
    surface = params["surface"]

    shot = Shot.new(club_id:club_id, distance:distance, shot_quality: shot_quality, surface: surface)

    if shot.save
      render json: {shot: shot}
    else
      render json: {error: shot.errors.full_messages }, sttus: :unprocessable_entity
    end
  end

  def show
    shots = Shot.where(club_id: params[:club_id], surface: params[:id]).last(5)
    render json: shots
  end

  def search
    user = current_user
    shots = user.shots.where(surface: params["surface"])
    shots = shots.where(distance: (params["distance"].to_i-30)..(params["distance"].to_i+30))
    clubAndShot = []
    shots.each do |shot|
      club = Club.where(id: shot.club_id)
      clubAndShot = clubAndShot.push([club[0].club_name, shot])
    end

    render json: {
      shots: clubAndShot,
    }
  end

end
