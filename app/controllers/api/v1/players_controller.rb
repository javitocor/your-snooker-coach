module Api
  module V1
    class PlayersController < ApplicationController
      before_action :authenticate_user!

      def index
        if user_signed_in?
          @players = Player.all
          render json: @players
        else
          render json: {}, status: 401
        end
      end

      def create
        if user_signed_in?
          @player = Player.create(player_params)
          if @player&.save
            render json: @player, status: :create
          else
            render json: { message: @player.errors.full_messages }, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      def show
        if user_signed_in?
          @player = Player.find(params[:id])
          render json: @player
        else
          render json: {}, status: 401
        end
      end

      private

      def player_params
        params.require(:player).permit(:name, :nationality, :born, :ranking, :rate, :info, :image, :firstseason)
      end
    end
  end
end
