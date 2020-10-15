class Bagel < ApplicationRecord
  validates :name, :price, presence: true 
  validates :name, uniqueness: true
  validate :validate_num_for_price

  def validate_num_for_price
    if self.price.class != Float || self.price > 30
      self.errors.add(:price, "Needs to be a number less than 30")
    end
  end
end
