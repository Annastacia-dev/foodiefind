class RestaurantsController < ApplicationController

    def index 
        @restaurants = Restaurant.all
        render json: @restaurants
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render json: @restaurant
    end

    def create
        @restaurant = Restaurant.create!(restaurant_params)
        render json: @restaurant
    end

    def update
        @restaurant = Restaurant.find(params[:id])
        @restaurant.update!(restaurant_params)
        render json: @restaurant
    end

    def destroy
        @restaurant = Restaurant.find(params[:id])
        @restaurant.destroy
        render json: { message: "Restaurant deleted" }, status: :accepted
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :location, :cuisines, :price_range, :cover_image, :description,:phone_number, :website, :email, :opening_hours, :closing_hours, :payment_options, :delivery_options, :parking_options, :delivery_options, :takeout_options, :outdoor_seating, :has_wifi, :photos, :menu)
    end

end
