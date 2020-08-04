class CreateShots < ActiveRecord::Migration[5.2]
  def change
    create_table :shots do |t|
      t.belongs_to :club, null: false

      t.string :distance, null: false

      t.timestamps
    end
  end
end
