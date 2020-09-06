module Api 
  module V1
    class TrainingsController < ApplicationController
      before_action :set_provider, only: [:show, :update, :destroy]
      ##before_action :authenticate_user!

      def index 
        ##if user_signed_in? 
          @trainings = current_user.trainings.order("created_at DESC")
          render json: @trainings
        ##else
          ##render json: {}, status: 401
        ##end
      end

      def create 
        if user_signed_in? 
          ## @training = current_user.trainings.create(training_params) 
          @training = current_user.trainings.build(training_params)
          if @training && @training.save
            render json: @training, status: :created
          else
            render json: { message: @training.errors.full_messages }, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      def show 
        render json: @training
      end

      def update 
        if user_signed_in? 
          if @training.update(training_params)
            render json: @training, status: :ok
            head :no_content
          else
            render json: { message: @training.errors.full_messages }, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      def destroy 
        if user_signed_in?
          if @training.destroy
            render json: { message: "Successfully removed training." }, status: 204
            head :no_content
          else
            render json: { message: "Unable to remove training" }, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      private 

      def set_provider
        @training = Training.find(params[:id])
      end

      def training_params
        params.require(:training).permit(:location, :date, :player_id)
      end

    end
  end 
end

