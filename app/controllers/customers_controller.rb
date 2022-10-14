class CustomersController < ApplicationController

    def index
        customers = Customer.all
        render json: customers, status: :created
    end

    def create
        customers = Customer.create!(customer_params)
        render json: customers, status: :created
    end

    def show
        customers = Customer.find(params[:id])
        render json: customers, status: :ok
    end

    def update
        customers = Customer.find(params[:id])
        if customers
            customers.update(customer_params)
            render json: customers
        else
            render json: customers,  status: :updated
        
        end
    end

    def destroy
        customers = Customer.find_by(id: params[:id])
        if customers
            customers.destroy 
            head :no_content
        else
            render json: { error: "Customer is unavailable" }, status: :not_found
        end
    end
    private

    def customer_params
        params.permit(:first_name, :last_name, :email, :username, :password)
    end
end
