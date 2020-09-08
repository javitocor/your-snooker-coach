class CreateTrainings < ActiveRecord::Migration[5.2]
  def change
    create_table :trainings do |t|
      t.string :location
      t.date :date
      t.belongs_to :user, foreign_key: true
      t.belongs_to :player, foreign_key: true

      t.timestamps
    end
  end
end
