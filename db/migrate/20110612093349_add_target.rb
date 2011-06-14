class AddTarget < ActiveRecord::Migration
  def self.up
    create_table :targets do |t|
      t.integer :user_id
      t.integer :category_id
      t.integer :metadata_id
      t.integer :sequence_no
      t.string  :status
      t.integer :target_count

      t.timestamps
    end
  end

  def self.down
    drop_table :sike_targets
  end
end
