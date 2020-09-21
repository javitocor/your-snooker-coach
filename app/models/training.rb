# rubocop:disable Layout/LineLength
class Training < ApplicationRecord
  belongs_to :user
  belongs_to :player

  validate :valid_date

  scope :ordered_by_most_recent, -> { order(created_at: :desc) }

  validates_presence_of :date, :location, :player_id

  def valid_date
    errors.add(:date, "Can't book in the past") if date.present? && date < Date.current
  end
end
# rubocop:enable Layout/LineLength
