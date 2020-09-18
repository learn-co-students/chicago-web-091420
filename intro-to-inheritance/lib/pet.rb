class Pet
  attr_reader :name
  attr_accessor :mood, :num_lives

  def initialize(name, num_lives )
    @name = name
    @mood = 'nervous'
    @num_lives = num_lives
  end

  def speak
    puts "I can't speak"
  end
end
