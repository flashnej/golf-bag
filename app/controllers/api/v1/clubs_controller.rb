class Api::V1::ClubsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = current_user

    clubs = user.clubs
    render json: {
      clubs: clubs
    }
  end

  def create
    name = params["name"]
    user = current_user
    club = Club.new(user:user, name:name)

    if club.save
      render json: {club: club}
    else
      render json: {error: club.errors.full_messages }, sttus: :unprocessable_entity
    end
  end

  def show
    club = Club.find(params[:id])
    tee_shots = Shot.where(club_id: params[:id], surface: "tee shot").last(5)
    rough = Shot.where(club_id: params[:id], surface: "rough").last(5)
    sand = Shot.where(club_id: params[:id], surface: "sand").last(5)
    fairway = Shot.where(club_id: params[:id], surface: "fairway").last(5)
    render json: {
      club: club,
      shots: {teeShots: tee_shots, rough: rough, sand: sand, fairway:fairway }
    }
  end

end
