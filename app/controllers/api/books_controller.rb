module Api
  class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create, :destroy, :update]
    before_action :set_book, only: [:destroy, :update]
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
      @book.destroy
      head :no_content
    end

    def update
      if @book.update(book_params)
        render json: @book
      else
        render nothing: true, status: :unprocessable_entity
      end
    end

    private
    def book_params
      params.require(:book).permit(:title, :author, :description,
                                   :power, :completed_date, :genre)
    end
    def set_book
      @book = Book.find(params[:id])
    end
  end
end