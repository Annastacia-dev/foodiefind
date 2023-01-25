class ApplicationController < ActionController::API

    include ActionController::Cookies

    before_action :authorized
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # jwt authentication

    def encode_token(payload)
        JWT.encode(payload, 'my_s3cr3t', 'HS256')
    end

    def authorized
        header = request.headers['Authorization']
        token = header.split(' ').last if header
        begin
            @decoded = JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')[0]
            @current_user = User.find(@decoded['user_id'])
        rescue
            render json: { error: 'Please log in' }, status: :unauthorized
        end
    end


    private

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
        render json: { error: exception.message }, status: :not_found
    end


end
