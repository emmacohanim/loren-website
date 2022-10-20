class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :type_of_service, :description, :duration_of_session_in_minutes
  has_many :packages
end
