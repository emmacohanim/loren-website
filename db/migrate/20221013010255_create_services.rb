class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :type
      t.integer :rate_base
      t.integer :rate_avg
      t.integer :rate_additional
      t.text :description
      t.integer :number_of_sessions
      t.integer :duration_of_session_in_minutes

      t.timestamps
    end
  end
end
