class Player < ApplicationRecord

  validates_presence_of :name, :nationality, :born, :firstseason, :image, :info
end
