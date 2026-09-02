const db = require('../database/db')

const getAllProducts = (req, res) => {
    const products = db.prepare('SELECT * FROM products').all()

    const formattedProducts = products.map(product => ({
        ...product,
        isActive: product.isActive === 1
    }))

    return res.status(200).json(formattedProducts)
}

const getProductById = (req, res) => {
    const { id } = req.params 

    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id)

    if (!product) {
        return res.status(404).json({
            message: 'Produto não encontrado'
        })
    }

    product.isActive = product.isActive === 1

    return res.status(200).json(product)
}

const createProduct = (req, res) => {
    const { name, price, stock, isActive, category } = req.body

    if (!name || price === undefined || stock === undefined || !category) {
        return res.status(400).json({
            message: 'Nome, preço, estoque e categoria são obrigatórios.'
        })
    }

    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({
            message: 'O preço inserido é inválido. Deve ser um número maior que zero.'
        })
    }

    if (typeof stock !== 'number' || stock < 0) {
        return res.status(400).json({
            message: 'A quantidade do estoque está incorreta! Deve ser um número >= 0.'
        })
    }

    if (typeof isActive !== 'boolean') {
        return res.status(400).json({
            message: 'O campo isActive deve ser verdadeiro (true) ou falso (false).'
        })
    }

    const newId = String(Date.now())
    const createdAt = new Date().toISOString()
    const isActiveDb = isActive ? 1 : 0

    db.prepare(`
        INSERT INTO products (id, name, price, stock, isActive, category, createdAt)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(newId, name, price, stock, isActiveDb, category, createdAt)

    const newProduct = db.prepare('SELECT * FROM products WHERE id = ?').get(newId)
    newProduct.isActive = newProduct.isActive === 1

    return res.status(201).json(newProduct)
}

const updateProduct = (req, res) => {
    const { id } = req.params
    const { name, price, stock, isActive, category } = req.body 
    
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id)
    if (!product) { 
        return res.status(404).json({ message: 'Produto não encontrado' })
    }

    const newName = name !== undefined ? name : product.name
    const newPrice = price !== undefined ? price : product.price
    const newStock = stock !== undefined ? stock : product.stock
    
    // CORREÇÃO 2: Converter booleano para 1 ou 0 antes de salvar no banco
    const newIsActive = isActive !== undefined ? (isActive ? 1 : 0) : product.isActive
    
    const newCategory = category !== undefined ? category : product.category

    db.prepare(`
        UPDATE products
        SET name = ?, price = ?, stock = ?, isActive = ?, category = ?
        WHERE id = ?
    `).run(newName, newPrice, newStock, newIsActive, newCategory, id)

    const updatedProduct = db.prepare('SELECT * FROM products WHERE id = ?').get(id)
    updatedProduct.isActive = updatedProduct.isActive === 1

    res.status(200).json({
        message: 'Produto atualizado com sucesso',
        product: updatedProduct 
    })
}

const deleteProduct = (req, res) => {
    const { id } = req.params
    
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id)
    if (!product) { 
        return res.status(404).json({ message: 'Produto não encontrado' })
    }

    db.prepare('DELETE FROM products WHERE id = ?').run(id)

    res.status(200).json({
        message: 'Produto deletado com sucesso'
    })
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}