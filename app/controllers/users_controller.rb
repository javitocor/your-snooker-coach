class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find(params[:id])
    @trainings = @user.trainings.ordered_by_most_recent
  end
end
