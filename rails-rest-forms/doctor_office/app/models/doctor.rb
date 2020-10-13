class Doctor < ApplicationRecord
  before_create :do_a_thing

  def do_a_thing
    
  end
end
