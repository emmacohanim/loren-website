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

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email, :email_confirmation, :gender, :preferred_contact_method)
    end
end
