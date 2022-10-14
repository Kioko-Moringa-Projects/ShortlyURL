# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."
#Randomizing array examples: ['Area of Dmg', 'Single target Dmg', 'Speed training', 'Burst Dmg', 'Core Attr training'].sample
100.times do
    seeded_customers = Customer.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        username: Faker::Name.last_name,
        email: Faker::Internet.email,
        password_digest: "calvin",
        
    )
end