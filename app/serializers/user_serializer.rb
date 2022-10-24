class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :gender, :email, :phone, :preferred_contact_method
end
