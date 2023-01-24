class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.string :cover_image
      t.string :description
      t.string :phone_number
      t.string :website
      t.string :email
      t.string :opening_hours
      t.string :closing_hours
      t.string :cuisines
      t.string :price_range
      t.string :payment_options
      t.string :parking_options
      t.string :delivery_options
      t.string :takeout_options
      t.string :outdoor_seating
      t.boolean :has_wifi
      t.string :photos
      t.string :menu
      t.timestamps
    end
  end
end
