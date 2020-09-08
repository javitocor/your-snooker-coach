class UserSerializer < ActiveModel::Serializer
  has_many :trainings
  attributes :id, :username, :email
end
