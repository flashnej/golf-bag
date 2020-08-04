class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.belongs_to :user, null: false

      t.string :name, null: false

      t.timestamps
    end
  end
end
