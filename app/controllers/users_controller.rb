class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    if user_signed_in? 
      trainings = current_user.trainings.ordered_by_most_recent
      render json: trainings, status: 200 
    else
      render json: {}, status: 401
    end
    
  end
end
