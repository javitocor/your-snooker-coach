class TrainingsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_provider, only: [:show, :update, :destroy]

  def index 
    trainings = Training.order("created_at DESC")
    render json: training
  end

  def create 
    @training = current_user.trainings.build(training_params)
    if @training && @training.save
      render json: @training
    else
      render json: { message: @training.errors }, status: 400
    end
  end

  def show 
    render json: @training
  end

  def update 
    if @training.update(training_params)
      render json: @training
    else
      render json: { message: @training.errors }, status: 400
    end
  end

  def destroy 
    if @training.destroy
      render json: { message: "Successfully removed item." }, status: 204
    else
      render json: { message: "Unable to remove item" }, status: 400
    end
  end

  private 

  def set_provider
    @training = Training.find_by(params[:id])
  end

  def training_params
    params.require(:training).permit(:location, :date)
  end

end

