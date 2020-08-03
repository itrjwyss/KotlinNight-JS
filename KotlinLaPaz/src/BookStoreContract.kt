interface BookStoreContract {

    interface View {
        fun showBooks(books: List<Book>)
        fun showLoader()
        fun hideLoader()
    }

    interface Presenter{
        fun attach(view: View)
        fun loadBooks()
    }

}