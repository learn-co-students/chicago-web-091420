# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Emeril")
user2 = User.create(name: "Rachel")
user3 = User.create(name: "Guy")

user1.posts << Post.create(title: "my first post", content: "this is the content")
user1.posts << Post.create(title: "my second post", content: "this is the content")
user1.posts << Post.create(title: "my third post", content: "this is the content")
