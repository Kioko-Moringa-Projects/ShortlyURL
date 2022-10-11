class UrlsController < ApplicationController
    
    def index
        urls = Url.all
        render json: urls, status: :created
    end

    def create
        user = Url.find(session[:user_id])
        urls = user.urls.create!(urls_params)
        render json: urls, status: :created
    end

    private

    def urls_params
        params.permit(:original_url, :shortly_url)
    end
end
