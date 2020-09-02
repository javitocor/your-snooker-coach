class TrainingsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_provider, only: [:show, :update, :destroy]

  def index 
    if user_signed_in? 
    @trainings = current_user.trainings.order("created_at DESC")
    render json: @trainings
    else
      render json: {}, status: 401
    end
  end

  def create 
    if user_signed_in? 
      @training = current_user.trainings.build(training_params)
      if @training && @training.save
        render json: @training
      else
        render json: { message: @training.errors }, status: 400
      end
    else
      render json: {}, status: 401
    end
  end

  def show 
    render json: @training
  end

  def update 
    if user_signed_in? 
      if @training.update(training_params)
        render json: @training
      else
        render json: { message: @training.errors }, status: 400
      end
    else
      render json: {}, status: 401
    end
  end

  def destroy 
    if user_signed_in?
      if @training.destroy
        render json: { message: "Successfully removed item." }, status: 204
      else
        render json: { message: "Unable to remove item" }, status: 400
      end
    else
      render json: {}, status: 401
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

