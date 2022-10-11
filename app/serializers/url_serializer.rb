class UrlSerializer < ActiveModel::Serializer
  attributes :id, :original_url, :shortly_url
  belongs_to :user
end
