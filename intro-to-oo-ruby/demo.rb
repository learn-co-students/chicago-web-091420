require "pry"

class BankAccount
    attr_reader :balance, :user_name
    attr_writer :user_name
    
    @@users = []

    def initialize(user_name, balance)
        @user_name = user_name
        @balance = balance

        @@users << self
        puts "new account created for #{@user_name}"
    end

    # def balance
    #     @balance
    # end

    # def user_name=(new_name)
    #     @user_name = new_name
    # end
    def self.all
        @@users
    end
end

bank_account = BankAccount.new("Jane", 10000000)
binding.pry