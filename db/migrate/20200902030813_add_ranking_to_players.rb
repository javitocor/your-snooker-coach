class AddRankingToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :ranking, :integer
  end
end
