class Training < ApplicationRecord
  belongs_to :user
  belongs_to :player

  scope :ordered_by_most_recent, -> { order(created_at: :desc) }

  validates_presence_of :date, :location, :player_id
end
