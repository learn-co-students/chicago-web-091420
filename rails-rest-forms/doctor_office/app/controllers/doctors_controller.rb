class DoctorsController < ApplicationController
  before_action :find_doctor, only: [:show, :edit, :update, :destroy]

  def index
    @doctors = Doctor.all
  end

  def show
  end

  def new
    @doctor = Doctor.new
  end

  def create
    doctor = Doctor.create(doctor_params)

    # add some other behavior here

    # if doctor.save
      redirect_to doctor_path(doctor)
    # else
      # puts "oh no!!!!"
      # redirect_to #error page, #new with a flash message
    # end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def find_doctor
    @doctor = Doctor.find(params[:id])
  end
  
  def doctor_params
    params.require(:doctor).permit(:name, :specialty)
  end
end