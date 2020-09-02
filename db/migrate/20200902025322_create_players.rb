class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.string :nationality
      t.string :born
      t.string :firstseason
      t.text :info

      t.timestamps
    end
  end
end
