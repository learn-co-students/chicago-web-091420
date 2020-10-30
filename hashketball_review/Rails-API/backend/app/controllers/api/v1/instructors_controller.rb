class Api::V1::InstructorsController < ApplicationController

    def index
        # byebug
        instructors = Instructor.all
        render json: instructors 
        # render json: instructors, only: [:id, :name], include: {students: {only: [:name]} }
    end

    def show
        instructor = Instructor.find(params[:id])
        render json: instructor
    end

    def create
        # byebug
        instructor = Instructor.new(instructor_params)

        # .create = .new + .save 
        # byebug
        if instructor.valid?
            instructor.save
            render json: instructor
        else
            render json: instructor.errors.full_messages
            # render json: "Not accepted data"
        end
    end

    def update
        instructor = Instructor.find(params[:id])
        # byebug

        # .update = .assign_attributes + .save 

        instructor.update(instructor_params)
        render json: instructor
    end

    def destroy
        instructor = Instructor.find(params[:id])
        instructor.destroy

        render json: "Instructor deleted :( !!!"
    end



    private

    def instructor_params
        params.require(:instructor).permit(:name)
    end
end
