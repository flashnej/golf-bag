class Club < ApplicationRecord
  validates :user_id, presence: true
  validates :club_name, presence: true

  belongs_to :user
  has_many :shots

  validates_uniqueness_of :club_name, scope: :user_id
end
