class Package < ApplicationRecord
    belongs_to :service
    has_many :line_items
    has_many :transactions, through: :line_items
end
