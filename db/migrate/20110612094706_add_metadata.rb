class AddMetadata < ActiveRecord::Migration
  def self.up
    create_table :metadata do |t|
      t.string  :name
      t.integer :data_type

      t.timestamps
    end
  end

  def self.down
    drop_table :metadata
  end
end
