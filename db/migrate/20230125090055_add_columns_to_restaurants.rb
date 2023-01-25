class AddColumnsToRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :open_days, :string
    add_column :restaurants, :facebook, :string
    add_column :restaurants, :instagram, :string
    add_column :restaurants, :twitter, :string
  end
end
