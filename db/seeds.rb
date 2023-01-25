# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# sample user
# Admin

puts 'Seeding...'


puts 'Creating Admin'

admin = User.create!(
    first_name: 'Admin',
    last_name: 'Admin',
    username: 'admin',
    email: 'foodiefind@info.io',
    location: 'Kilimani',
    password: '@Admin33',
    password_confirmation: '@Admin33',
    profile_picture:'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
    admin: true
)

puts 'Admin created'

# sample user
# User
puts 'Creating User'

user = User.create!(
    first_name: 'Emily',
    last_name: 'Mwangi',
    username: 'emilyfoodie',
    email: 'emily33@gmail.com',
    location: 'Kilimani',
    password:'@Emily33',
    password_confirmation: '@Emily33',
    profile_picture:'https://res.cloudinary.com/dauveffyr/image/upload/v1674103781/rvb6iyvsc14sfwuqncoj.jpg',
    admin: false
)

puts 'User created'

# sample restaurant
# Restaurant
puts 'Creating Restaurant'

restaurant = Restaurant.create!(
    name:'Blue Farm Café',
    location:'Kilimani',
    cover_image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description:"At our farm-to-table cafe, we're committed to using only the freshest, locally sourced ingredients to create delicious, seasonally inspired dishes. Our menu is constantly changing to reflect the best produce available from nearby farms and suppliers, ensuring you always have access to the freshest, most flavorful food.",
    phone_number:'0722 222 222',
    website:'https://www.bluefarmcafe.com/',
    email:'bluefarmcafe@info.io',
    opening_hours:'08:00:00',
    closing_hours:'21:00:00',
    cuisines:'American, Italian, French',
    price_range:'1000 - 5000',
    payment_options:'Cash, Mpesa, Visa, Mastercard',
    delivery_options:'Uber Eats, Jumia Food, Glovo',
    parking_options:'Street Parking, Private Parking',
    takeout_options:'Yes',
    outdoor_seating:'Yes',
    has_wifi: true,
    photos:'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60,
    https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60,https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60,https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60,
    https://images.unsplash.com/photo-1604908554025-e477d54e85e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW1lcmljYW4lMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60,https://images.unsplash.com/photo-1597131628347-c769fc631754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGl0YWxpYW4lMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60,https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlbmNoJTIwZm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60,https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60,https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29ja3RhaWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    menu:'https://res.cloudinary.com/demo/image/upload/example_pdf.pdf',
    open_days:'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
    instagram:'https://www.instagram.com/bluefarmcafe/',
    facebook:'https://www.facebook.com/bluefarmcafe/',
    twitter:'https://twitter.com/bluefarmcafe',
)

puts 'Restaurant created'

# sample review
# Review

puts 'Creating Review'

review = Review.create!(
    user_id: user.id,
    restaurant_id: restaurant.id,
    title: 'A foodie fresh heaven',
    content: "I had the pleasure of dining at this farm-to-table cafe and was blown away by the quality of the food and the atmosphere. From the moment I walked in, I could tell that the restaurant takes great pride in sourcing their ingredients from local farms. The menu offered a variety of seasonal dishes that were all expertly prepared and delicious. The atmosphere of the restaurant was cozy and inviting, making for a perfect dining experience.

    I highly recommend this cafe, especially for those who appreciate fresh, locally sourced ingredients. The staff was friendly and knowledgeable about the menu and the sourcing of ingredients. It was a great experience overall, and I'll definitely be back for more. ",
    meal: 'Dinner',
    date_of_visit: '2023-01-01',
    service_rating: 5,
    food_rating: 5,
    ambience_rating: 5,
    photos:'https://images.unsplash.com/photo-1598990386084-8af4dd12b3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBhbmQlMjBjb2NrdGFpbHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60,https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    mode: 'Dine-in'
)

puts 'Review created'

puts 'Done!'









