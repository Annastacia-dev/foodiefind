class AddColumnsToUser < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :name, :username
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :location, :string
    add_column :users, :profile_picture, :string
    add_column :users, :bio, :text
  end
end
