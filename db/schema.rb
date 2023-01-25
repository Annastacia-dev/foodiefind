# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_25_090055) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "cover_image"
    t.string "description"
    t.string "phone_number"
    t.string "website"
    t.string "email"
    t.string "opening_hours"
    t.string "closing_hours"
    t.string "cuisines"
    t.string "price_range"
    t.string "payment_options"
    t.string "parking_options"
    t.string "delivery_options"
    t.string "takeout_options"
    t.string "outdoor_seating"
    t.boolean "has_wifi"
    t.string "photos"
    t.string "menu"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "open_days"
    t.string "facebook"
    t.string "instagram"
    t.string "twitter"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.string "meal"
    t.datetime "date_of_visit"
    t.integer "service_rating"
    t.integer "food_rating"
    t.integer "ambience_rating"
    t.integer "overall_rating"
    t.string "photos"
    t.integer "user_id"
    t.integer "restaurant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "mode"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "location"
    t.string "profile_picture"
    t.text "bio"
    t.boolean "admin"
  end

end
