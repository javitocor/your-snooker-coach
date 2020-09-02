class AddRateToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :rate, :string
  end
end
