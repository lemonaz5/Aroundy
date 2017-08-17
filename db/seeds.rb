# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1.upto(55) do |i|
  Book.create(title: Faker::Book.title,
              author: Faker::GameOfThrones.character,
              description: Faker::HarryPotter.quote,
              genre: Faker::Book.genre,
              power: rand(1..5),
              completed_date: Date.today + rand(3).months)
end
