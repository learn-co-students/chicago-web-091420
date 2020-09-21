require "pry"

require_relative "funding_round.rb"
require_relative "startup.rb"
require_relative "venture_capitalist.rb"

startup1 = Startup.new('startup1', 'Lindsay', 'Space Travel')
startup2 = Startup.new('startup2', 'Max', 'Oyster Diving')

vc1 = VentureCapitalist.new('frank', 100)
vc2 = VentureCapitalist.new('bezos', 10000000000)

funding_round1 = FundingRound.new(startup1, vc2, 1000000, "angel")
funding_round2 = FundingRound.new(startup1, vc1, 10000, "angel")
funding_round3 = FundingRound.new(startup2, vc2, 100, "angel")


binding.pry
