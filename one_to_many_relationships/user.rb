class User
    attr_reader :username

    def initialize(username)
        @username = username
        # @tweets = []
    end

    def post_tweet(message)
        Tweet.new(message, self)
        
        # @tweets << new_tweet
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end
end