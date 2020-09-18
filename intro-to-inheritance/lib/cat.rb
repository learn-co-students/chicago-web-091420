class Cat < Pet
  def initialize(name, num_lives = 9)
    super
  end

  def lives_left
    @lives
  end

  def speak
    puts "meow"
  end
end
