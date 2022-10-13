class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :type, :rate_base, :rate_avg, :rate_additional, :description, :number_of_sessions, :duration_of_session_in_minutes
end
