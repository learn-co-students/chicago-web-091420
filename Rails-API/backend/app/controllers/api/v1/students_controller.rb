class Api::V1::StudentsController < ApplicationController

    def index
    
    end

    def show
        student = Student.find(params[:id])
        render json: student
    end
end
