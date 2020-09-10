class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    app_path
  end

  private 

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  protected 

  def authenticate_admin!
    authenticate_user!
    redirect_to :back, status: :forbidden, notice: "You must be an admin to perform that function!" unless current_user.admin?
  end

end
