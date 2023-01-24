class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :content
      t.string :meal
      t.datetime :date_of_visit
      t.integer :service_rating
      t.integer :food_rating
      t.integer :ambience_rating
      t.integer :overall_rating
      t.string :photos
      t.integer :user_id
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
