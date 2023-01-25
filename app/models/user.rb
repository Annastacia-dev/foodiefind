class User < ApplicationRecord
  has_secure_password

  has_many :reviews

  has_many :restaurants , through: :reviews

  # validations

  validates :first_name, presence: true, length: { minimum: 2, maximum: 20 , message: "must be between 2 and 20 characters"}
  validates :last_name, presence: true, length: { minimum: 2, maximum: 20 , message: "must be between 2 and 20 characters"}
  validates :username, presence: true, length: { minimum: 2, maximum: 20, message: "must be between 2 and 20 characters"  }, uniqueness: true, format: { with: /\A[a-zA-Z0-9]+\z/, message: "only allows letters and numbers" }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "only allows valid emails" }
  validates :location, presence: true
  validates :password, presence: true, length: { minimum: 6, maximum: 20 , message: "must be between 6 and 20 characters" }, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+\z/, message: "must include uppercase, lowercase, number, and special character" }, on: :create, confirmation: true
  validates :password_confirmation, presence: true, on: :create




end
