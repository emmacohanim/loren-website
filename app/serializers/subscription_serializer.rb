class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :service
end
