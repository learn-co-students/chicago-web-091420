class FundingRound
    attr_reader :venture_capitalist, :startup, :type

    def initialize(startup, venture_capitalist, amount, type = "angel")
        @startup = startup
        @venture_capitalist = venture_capitalist
        @type = type
        @amount = amount
    end

    def change_type(new_type)
        @type = new_type
    end
end