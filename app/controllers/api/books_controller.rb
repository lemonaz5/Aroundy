module Api
  class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create, :destroy, :update]
    before_action :set_book, only: [:destroy, :update]

    def index
      render json: {
        books: Book.paginate(page: page).order(sort_by + ' ' + order),
        page: page,
        pages: Book.pages
      }
    end

    def search
      query = params[:query]
      books = Book.where('title LIKE ? OR author LIKE ?',
                          "%#{query}%", "%#{query}%")
                  .paginate(page: page)
      pages = Book.where('title LIKE ? OR author LIKE ?',
                          "%#{query}%", "%#{query}%")
                  .pages
      render json: {
        books: books,
        pages: pages
      }
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

    def sort_by
      %w(title
         author
         completed_date
         genre
         power
         description).include?(params[:sort_by]) ? params[:sort_by] : 'title'
    end

    def order
      %w(asc desc).include?(params[:order]) ? params[:order] : 'asc'
    end

    def page
      params[:page] || 1
    end
  end
end
