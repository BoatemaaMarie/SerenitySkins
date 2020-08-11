class Appointment < ApplicationRecord
  belongs_to :user
  has_and_belogns_to_many :services
end
