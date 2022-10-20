class Service < ApplicationRecord
    has_many :packages
    has_many :subscriptions, through: :packages
end
