class Dog < Pet
  def initialize(name, favorite_food)
    super(name)
    @favorite_food = favorite_food
  end

  def speak
    puts "woof"
  end
end
