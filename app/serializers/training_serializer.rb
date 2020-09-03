class TrainingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :player_id, :location, :date
end
