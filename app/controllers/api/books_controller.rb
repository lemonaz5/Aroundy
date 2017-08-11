module Api
  class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create, :destroy]
    def index
      render json: Book.all
    end

    def search
      query = params[:query]
      books = Book.where('title LIKE ? OR author LIKE ?',
                          "%#{query}%", "%#{query}%")
      render json: books
    end

    def create
      book = Book.new(book_params)
      if book.save
        render json: book
      else
        render nothing: true, status: :bad_request
      end
    end

    def destroy
      Book.find(params[:id]).destroy
      head :no_content
    end

    private
    def book_params
      params.require(:book).permit(:title, :author, :description,
                                   :power, :completed_date, :genre)
    end
  end
end