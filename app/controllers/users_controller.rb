class UsersController < ApplicationController
    #wrap_parameters format: []
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: cur_user
    end

    def update
        user = User.find(params[:id])
        user.update!(update_user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email, :email_confirmation, :gender, :preferred_contact_method)
    end

    def update_user_params
        params.permit(:password, :password_confirmation, :first_name, :last_name, :email, :gender, :phone, :preferred_contact_method)
    end
end
