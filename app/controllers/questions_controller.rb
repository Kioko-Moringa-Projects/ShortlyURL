class QuestionsController < ApplicationController
    def create
        questions = Question.create!(question_params)
        render json: questions, status: :created
    end
    private

    def question_params
        params.permit(:email)
    end
end
