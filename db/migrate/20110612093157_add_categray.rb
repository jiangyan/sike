class AddCategray < ActiveRecord::Migration
  def self.up
    create_table :categories do |t|
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :sike_categories
  end
end
