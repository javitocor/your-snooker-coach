class PlayerSerializer < ActiveModel::Serializer
  has_many :trainings
  attributes :id, :name, :nationality, :born, :image, :rate, :info, :ranking, :firstseason
end
