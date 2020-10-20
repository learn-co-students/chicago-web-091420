class ApplicationController < ActionController::Base
  before_action :get_user, except :login

  def cart
    session[:cart]||= []
  end

  def add_nacho_to_cart
    cart << params[:nacho_id]
  end

  def get_items_from_cart
    @cart_items = Nacho.find(cart)
  end

  def get_user
    @user = User.find(session[:current_user])
  end
end
