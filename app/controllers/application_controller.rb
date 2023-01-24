class ApplicationController < ActionController::API
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up) do |user_params|
            user_params.permit(:email, :password, :password_confirmation, :first_name, :last_name, :avatar, :location, :role)
        end

        devise_parameter_sanitizer.permit(:sign_in) do |user_params|
            user_params.permit(:email, :password, :remember_me)
        end
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
        render json: { error: exception.message }, status: :not_found
    end


end
