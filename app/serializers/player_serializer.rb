class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :nationality, :born, :image, :rate, :info, :ranking, :firstseason
end
