class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :cuisines, :price_range, :cover_image, :description,:phone_number, :website, :email, :opening_hours, :closing_hours, :payment_options, :delivery_options, :parking_options, :delivery_options, :takeout_options, :outdoor_seating, :has_wifi, :photos, :menu, :open_days, :facebook, :instagram, :twitter

  has_many :reviews
  has_many :users, through: :reviews



end
