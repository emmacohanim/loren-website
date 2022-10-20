class CreatePackages < ActiveRecord::Migration[7.0]
  def change
    create_table :packages do |t|
      t.integer :number_of_sessions
      t.integer :price
      t.string :frequency
      t.string :additional_info

      t.timestamps
    end
  end
end
