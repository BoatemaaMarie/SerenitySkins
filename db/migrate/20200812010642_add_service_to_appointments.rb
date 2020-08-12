class AddServiceToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_reference :appointments, :service, null: false, foreign_key: true
  end
end
