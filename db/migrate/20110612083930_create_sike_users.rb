class CreateSikeUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string  :email
      t.string  :password
      t.string  :nickname
      
      t.timestamps
    end
  end

  def self.down
    drop_table :sike_users
  end
end