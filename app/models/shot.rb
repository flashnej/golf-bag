class Shot < ApplicationRecord
  validates :club_id, presence: true
  validates :distance, presence: true

  belongs_to :club
end
