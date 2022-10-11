class CreateUserUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :user_urls do |t|
      t.integer :user_id
      t.integer :url_id

      t.timestamps
    end
  end
end
