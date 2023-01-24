class ReviewsController < ApplicationController

    def index 
        @reviews = Review.all
        render json: @reviews
    end

    def show
        @review = Review.find(params[:id])
        render json: @review
    end

    def create
        @review = Review.create!(review_params)
        render json: @review
    end

    def update
        @review = Review.find(params[:id])
        @review.update!(review_params)
        render json: @review
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render json: { message: "Review deleted" }, status: :accepted
    end

    private

    def review_params
        params.require(:review).permit(:title, :content, :meal, :date_of_visit, :service_rating, :food_rating, :ambience_rating, :overall_rating, :photos, :user_id, :restaurant_id)
    end





end
