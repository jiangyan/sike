class Metadata < ActiveRecord::Base
  self.table_name = "metadata"
  
  has_many :target
end
