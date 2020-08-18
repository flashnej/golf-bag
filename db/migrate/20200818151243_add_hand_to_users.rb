class AddHandToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :hand, :string, null: false
  end
end
