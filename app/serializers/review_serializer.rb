class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:title, :content, :meal, :date_of_visit, :service_rating, :food_rating, :ambience_rating, :overall_rating, :photos, :user_id, :restaurant_id, :mode

  belongs_to :user
  belongs_to :restaurant

  # overall rating - average of all ratings

  def overall_rating
    (object.service_rating + object.food_rating + object.ambience_rating)/3
  end



end
