class PackageSerializer < ActiveModel::Serializer
  attributes :id, :number_of_sessions, :price, :additional_info, :frequency
  
end
