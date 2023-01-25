class SessionsController < ApplicationController

    wrap_parameters format: []

    skip_before_action :authorized, only: :create

    def create 
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
        else
            render json: { error: 'Invalid username or password' }, status: :unauthorized
        end
    end

    def destroy
        session.clear
        render json: { message: "Logged out" }, status: :accepted
    end

end