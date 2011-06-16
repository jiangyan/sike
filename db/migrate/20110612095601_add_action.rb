class AddAction < ActiveRecord::Migration
  def self.up
    create_table :actions do |t|
      t.integer :target_id
      t.integer :metadata_id
      t.integer :user_id
      t.integer :sequence_no
      t.integer :action_count

      t.timestamps
    end
  end

  def self.down
    drop_table :actions
  end
end
