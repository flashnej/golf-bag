class User < ApplicationRecord

  validates :hand, presence: true
  has_many :clubs
  has_many :shots, through: :clubs
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
