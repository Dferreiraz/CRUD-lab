let books = [
    { id: '1', title: 'book1', author: 'undefined', year: '2017' },
    { id: '2', title: 'book2', author: 'undefined', year: '2022' },
    { id: '3', title: 'book3', author: 'undefined', year: '2025' }
]

const getAllBooks = (req, res) => {
    res.status(200).json(books)
}

const getBookById = (req, res) => {
    const id = req.params.id
    const book = books.find(doc => doc.id === id)

    if (!book) {
        return res.status(404).json({
            message: 'O livro não foi encontrado'
        })
    }

    res.status(200).json(book)
}

const createBook = (req, res) => {
    const { title, author, year } = req.body

    if (!title || !author || !year) {
        return res.status(400).json({
            message: 'Todos os campos são obrigatórios'
        })
    }

    const newBook = {
        id: String(books.length + 1),
        title,
        author,
        year
    }

    books.push(newBook)

    res.status(201).json(newBook)
}

const updateBook = (req, res) => {
    const id = req.params.id
    const { title, author, year } = req.body

    const bookIndex = books.findIndex(doc => doc.id === id)

    if (bookIndex === -1) {
        return res.status(404).json({
            message: 'Documento não encontrado'
        })
    }

    books[bookIndex] = {
        ...books[bookIndex],
        title,
        author,
        year
    }

    res.status(200).json({
        message: 'Livro atualizado com sucesso'
    })

}

const deleteBook = (req, res) => {
    const id = req.params.id

    const bookIndex = books.findIndex(doc => doc.id === id)

    if (bookIndex === -1) {
        return res.status(404).json({
            message: 'Livro não encontrado'
        })
    }

    books.splice(bookIndex, 1)

    res.status(200).json({
        message: 'Livro removido com sucesso'
    })
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}