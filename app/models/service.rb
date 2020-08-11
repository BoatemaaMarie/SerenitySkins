class Service < ApplicationRecord
  has_and_belogns_to_many :appointments
end
