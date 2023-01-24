class ApplicationController < ActionController::API

    include ActionController::Cookies
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # jwt authentication








    private

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
        render json: { error: exception.message }, status: :not_found
    end


end
