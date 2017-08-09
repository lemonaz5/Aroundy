class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.date :completed_date
      t.text :description
      t.string :genre
      t.integer :power

      t.timestamps
    end
  end
end
