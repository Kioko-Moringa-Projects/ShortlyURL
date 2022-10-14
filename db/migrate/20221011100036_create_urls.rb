class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.integer :user_id
      t.string :original_url
      t.string :shortly_url

      t.timestamps
    end
  end
end
