class AddImgUrlToServices < ActiveRecord::Migration[6.0]
  def change
    add_column :services, :img_url, :string
  end
end
