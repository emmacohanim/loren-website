class Transaction < ApplicationRecord
  belongs_to :user
  has_many :line_items
  has_many :packages, through: :line_items 
end
