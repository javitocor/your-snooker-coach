class TrainingSerializer < ActiveModel::Serializer
  belongs_to :user 
  belongs_to :player
  attributes :id, :user_id, :player_id, :location, :date
end
