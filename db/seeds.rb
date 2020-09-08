# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create({ id: 1, email: 'newUser@email.com', password: 'password'})

clubs = Club.create([{user:user, club_name:"Driver", club_class: "wood"}, {user:user, club_name:"3 Wood", club_class: "wood"}, {user:user, club_name:"5 Wood", club_class: "wood"}, {user:user, club_name:"Hybrid", club_class: "wood"}, {user:user, club_name:"Sand Wedge", club_class: "iron"}, {user:user, club_name:"Pitch Wedge", club_class: "iron"}, {user:user, club_name:"9 Iron", club_class: "iron"}, {user:user, club_name:"8 Iron", club_class: "iron"}, {user:user, club_name:"7 Iron", club_class: "iron"}, {user:user, club_name:"6 Iron", club_class: "iron"}, {user:user, club_name:"5 Iron", club_class: "iron"}, {user:user, club_name:"4 Iron", club_class: "iron"}, {user:user, club_name:"3 Iron", club_class: "iron"}])


shots = Shot.create([{ club_id: 1, distance: 330, surface: "tee shot", shot_quality: "good"}, { club_id: 1, distance: 320, surface: "tee shot", shot_quality: "good"}, {club_id: 3, distance: 230, surface: "tee shot", shot_quality: "good"}, {club_id: 8, distance: 130, surface: "fairway", shot_quality: "good"}, club_id: 8, distance: 120, surface: "fairway", shot_quality: "good"])
