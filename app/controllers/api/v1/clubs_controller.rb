class Api::V1::ClubsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = current_user
    if user === nil
      render json: {error:"User not signed in"}
    elsif user.clubs === []
      Club.new(user:user, club_name:"Driver").save
      Club.new(user:user, club_name:"3 Wood").save
      Club.new(user:user, club_name:"4 Wood").save
      Club.new(user:user, club_name:"5 Wood").save
      Club.new(user:user, club_name:"Hybrid").save
      Club.new(user:user, club_name:"4 Iron").save
      Club.new(user:user, club_name:"5 Iron").save
      Club.new(user:user, club_name:"6 Iron").save
      Club.new(user:user, club_name:"7 Iron").save
      Club.new(user:user, club_name:"8 Iron").save
      Club.new(user:user, club_name:"9 Iron").save
      Club.new(user:user, club_name:"Pitch Wedge").save
      Club.new(user:user, club_name:"Sand Wedge").save
      Club.new(user:user, club_name:"Lob Wedge").save
      clubs = user.clubs
      render json: {
        clubs: clubs
        }
      else
      clubs = user.clubs
      render json: {
        clubs: clubs
        }
      end
  end


  def show
    if Club.find(params[:id]).user === current_user
      club = Club.find(params[:id])
      tee_shots = Shot.where(club_id: params[:id], surface: "tee shot").last(5)
      rough = Shot.where(club_id: params[:id], surface: "rough").last(5)
      sand = Shot.where(club_id: params[:id], surface: "sand").last(5)
      fairway = Shot.where(club_id: params[:id], surface: "fairway").last(5)
      render json: {
        club: club,
        shots: {teeShots: tee_shots, rough: rough, sand: sand, fairway:fairway }
      }
    else
      render json: {error: "not your club"}
    end
  end

end
