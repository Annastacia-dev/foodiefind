class AddModetoReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :mode, :string
  end
end
