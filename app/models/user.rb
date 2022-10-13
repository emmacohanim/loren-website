class User < ApplicationRecord
    has_secure_password
    has_many :subscriptions
    has_many :services, through: :subscriptions

    validates_presence_of :username, :password_digest, :first_name, :last_name, :email, :gender
    validates_uniqueness_of :username, case_sensitive: false
    validates_length_of :username, within: 6..20
end
