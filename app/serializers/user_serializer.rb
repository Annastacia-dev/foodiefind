class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :location, :bio, :profile_picture

  has_many :reviews
  has_many :restaurants, through: :reviews


end
