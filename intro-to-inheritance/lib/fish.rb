class Fish < Pet
  def initialize(name)
    fish_lives = 1
    super(name, fish_lives)
  end
end
