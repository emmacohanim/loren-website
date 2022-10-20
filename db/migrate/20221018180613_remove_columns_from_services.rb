class RemoveColumnsFromServices < ActiveRecord::Migration[7.0]
  def change
    remove_column :services, :rate_base, :integer
    remove_column :services, :rate_avg, :integer
    remove_column :services, :rate_additional, :integer
    remove_column :services, :number_of_sessions, :integer
  end
end
