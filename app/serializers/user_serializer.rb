class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :gender, :email
end
