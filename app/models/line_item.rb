class LineItem < ApplicationRecord
  belongs_to :package
  belongs_to :transaction
end
