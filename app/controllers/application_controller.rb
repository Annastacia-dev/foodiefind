class ApplicationController < ActionController::API
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up) do |user_params|
            user_params.permit(:email, :password, :password_confirmation, :first_name, :last_name, :avatar, :location, :role)
        end

        devise_parameter_sanitizer.permit(:sign_in) do |user_params|
            user_params.permit(:email, :password, :remember_me)
        end


    end


end
