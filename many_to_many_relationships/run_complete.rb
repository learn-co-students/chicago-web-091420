require "pry"

require_relative "tweet.rb"
require_relative "user.rb"
require_relative "like.rb"

joe = User.new('joe')
sam = User.new('sam')

joes_tweet = joe.post_tweet('my great tweet')
sams_liked_tweets = sam.like_tweet(joes_tweet)

binding.pry