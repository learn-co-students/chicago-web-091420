class Post < ApplicationRecord
  belongs_to :user, dependent: :destroy

  # find_or_create_by solution

  # def user=(name)
  #   user = User.find_or_create_by(name: name)
    
  #   self.user_id = user.id
  # end
end
