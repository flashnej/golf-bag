class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.belongs_to :user, null: false

      t.string :club_name, null: false
      t.string :club_class, null: false

      t.timestamps
    end
  end
end
