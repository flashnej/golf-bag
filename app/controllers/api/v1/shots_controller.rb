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

  def index
    surface = params["surface"]
    user = current_user
    shots = user.shots.where("surface='#{surface}'")
    clubs = user.clubs
    club_names = []
    clubs.each do |club|
      club_names.push club.club_name
    end
    woods = club_names[0,4]
    irons = club_names[5, 13].reverse
    club_names= woods+irons
    shots_by_club = Hash[club_names.collect { |item| [item, {} ] } ]
    shots.each do |shot|
      club = shot.club.club_name
      quality = shot.shot_quality
      if shots_by_club[club][quality] === nil
        shots_by_club[club][quality] = shot.distance
      else
        shots_by_club[club][quality] = (shots_by_club[club][quality] + shot.distance) /2
      end
    end
    payload = club_names.map do |name|
      if shots_by_club[name]["good"] === nil
        shots_by_club[name]["good"] = 0
      end
      if shots_by_club[name]["average"] === nil
        shots_by_club[name]["average"] = 0
      end
      if shots_by_club[name]["bad"] === nil
        shots_by_club[name]["bad"] = 0
      end

      [name, shots_by_club[name]["good"], shots_by_club[name]["average"], shots_by_club[name]["bad"]]
    end
    payload.unshift(["Club", "Good", "Average", "Bad"])
    render json: payload
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
