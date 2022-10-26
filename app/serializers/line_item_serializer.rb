class LineItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :package
  has_one :transaction
end
