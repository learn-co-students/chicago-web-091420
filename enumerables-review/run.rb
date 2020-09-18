require "pry"

string = "this is a string"
array = [2, 5, 6, 145, 4]

array.find{ |num| num == 5} # 5
array.map{ |num| num * 3 } # [6, 15, .. , .. ]

trippled_integers = []

array.each do |integer|
    trippled_integers << integer * 3 
end


class Dog
    attr_accessor :name, :owner
    @@all = []

    def initialize(name, owner)
        @name = name
        @owner = owner

        @@all << self
    end

    def self.all
        @@all
    end

    def self.pet_all_the_dogs
        all.each do |dog|
            puts "pet pet hi #{dog.name}"
        end
    end

    def self.pet_owners
        all.map do |dog|
            dog.owner 
        end
    end

    def self.pet_names
        all.each do |dog|
            puts dog.owner 
        end
    end

    def self.find_owners_dogs(owner_name)
        all.select do |dog|
            dog.owner == owner_name
        end
    end
end

fido = Dog.new('fido', "sally")
sam = Dog.new('sam', "george")
spot = Dog.new('spot', "micky")
spot = Dog.new('lorenzo', "micky")
lola = Dog.new('lola', "louise")

dogs_hash = {
    sally: 'fido',
    sam: 'george',
    micky: 'spot'
}

dogs_hash.each do |owner, pet_name|
    puts "#{owner} has the pet #{pet_name}"
end

dogs_hash.each { |owner, pet_name| puts "hello" }
# is the same as
dogs_hash.each do |owner, pet_name| 
    puts "hello" 
end

