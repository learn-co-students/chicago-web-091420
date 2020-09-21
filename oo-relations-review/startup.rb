class Startup
    attr_accessor :name
    attr_reader :founder, :domain

    @@all = []

    def initialize(name, founder, domain)
        @name = name
        @founder = founder
        @domain = domain
        
        @@all << self
    end

    def pivot (domain, name)
        @domain = domain
        @name = name
        helper
    end

    def self.all 
        @@all
    end

    def helper
        puts "i was defined below"
    end

    def self.find_by_founder(founder)
        all.find do |startup|
            startup.founder == founder
        end
    end

    def self.domains 
        all.map do |startup|
            startup.domain
        end
    end
end