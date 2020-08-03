class Bag < ApplicationRecord
  validates :user_id, presence: true
  validates :name, presence: true

  belongs_to :user

  validates_uniqueness_of :name, scope: :user_id
end
