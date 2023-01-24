class UsersController < ApplicationController

    wrap_parameters format: []

    skip_before_action :authorized, only: [:create]

    helper_method :current_user

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
        @user = User.create!(user_params)
        @token = encode_token(user_id: @user.id)
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created    
    end

    def update
        current_user.update!(user_params)
        render json: { user: UserSerializer.new(current_user) }, status: :accepted  
    end

    def destroy
        current_user.destroy
        render json: { message: "User deleted" }, status: :accepted
    end


    private

    def user_params
        params.require(:user)permit(:first_name, :last_name, :username, :email, :location, :bio, :profile_picture, :password)
    end




end
