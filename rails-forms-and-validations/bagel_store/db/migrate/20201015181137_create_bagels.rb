class CreateBagels < ActiveRecord::Migration[6.0]
  def change
    create_table :bagels do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.boolean :tasty, null: false, default: false

      t.timestamps
    end
  end
end
