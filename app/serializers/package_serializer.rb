class PackageSerializer < ActiveModel::Serializer
  attributes :id, :number_of_sessions, :price, :additional_info, :frequency
  has_one :service
end
