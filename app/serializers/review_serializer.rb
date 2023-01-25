class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:title, :content, :meal, :date_of_visit, :service_rating, :food_rating, :ambience_rating, :overall_rating, :photos, :user_id, :restaurant_id, :mode
end
