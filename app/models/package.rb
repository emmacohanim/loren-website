class Package < ApplicationRecord
    belongs_to :service
    has_many :subscriptions
    has_many :users, through: :subscriptions
end
