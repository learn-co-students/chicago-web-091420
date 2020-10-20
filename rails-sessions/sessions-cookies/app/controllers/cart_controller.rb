class CartController < ApplicationController
  def update
    flash[:notice] = "Success"
    add_nacho_to_cart
    redirect_to nachos_path
  end
end
