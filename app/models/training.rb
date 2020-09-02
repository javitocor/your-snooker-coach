class Training < ApplicationRecord
  belongs_to :user
  belongs_to :player

  validates_presence_of :date, :location, :player_id
end
