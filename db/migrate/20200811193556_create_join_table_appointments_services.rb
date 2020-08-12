class CreateJoinTableAppointmentsServices < ActiveRecord::Migration[6.0]
  def change
    create_join_table :appointments, :services do |t|
      # t.index [:appointment_id, :service_id]
      # t.index [:service_id, :appointment_id]
    end
  end
end
