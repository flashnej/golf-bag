class Club < ApplicationRecord
  validates :user_id, presence: true
  validates :name, presence: true

  belongs_to :user
  has_many :shots

  validates_uniqueness_of :name, scope: :user_id
end
