# rubocop:disable Layout/LineLength
class Player < ApplicationRecord
  has_many :trainings, dependent: :destroy

  validates_presence_of :name, :nationality, :born, :firstseason, :image, :info, :ranking, :rate
end
# rubocop:enable Layout/LineLength
