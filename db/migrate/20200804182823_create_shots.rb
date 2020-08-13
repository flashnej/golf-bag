class CreateShots < ActiveRecord::Migration[5.2]
  def change
    create_table :shots do |t|
      t.belongs_to :club, null: false

      t.integer :distance, null: false
      t.string :surface
      t.string :shot_quality

      t.timestamps
    end
  end
end
