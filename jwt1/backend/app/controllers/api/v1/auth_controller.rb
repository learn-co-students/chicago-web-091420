
class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username]) 

    if user && user.authenticate(params[:password])
        render json: { user: {id: user.id, username: user.username},  comments: ['foo', 'bar'] }
    else
      render json: { error: 'Invalid username/password.' }, status: 401
    end
  end
end



# grab the params
# first find the user based on the username
#   -if none found then send an err
# if found compare the password of the user in the db with that in the form(params)
#   - if no match send an error
# else 
#   - send back the user as json
