class CreateLineItems < ActiveRecord::Migration[7.0]
  def change
    create_table :line_items do |t|
      t.belongs_to :package, null: false, foreign_key: true
      t.belongs_to :transaction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
