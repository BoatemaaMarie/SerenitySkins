class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :name
      t.string :date
      t.string :time
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
