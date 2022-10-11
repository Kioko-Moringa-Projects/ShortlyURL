class Url < ApplicationRecord
    belongs_to :user
    #validates :description, presence: true, length: { minimum: 20 }
end
