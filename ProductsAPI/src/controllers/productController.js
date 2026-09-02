const products = [
    {
        id: '1',
        name: 'Notebook Dell',
        price: 3500.00,           // NÚMERO (não string!)
        stock: 10,                // NÚMERO (quantidade em estoque)
        isActive: true,           // BOOLEANO (produto ativo/inativo)
        category: 'eletronicos',  // STRING
        createdAt: '2026-08-15T10:00:00.000Z'
    },
    {
        id: '2',
        name: 'Smartphone Samsung Galaxy',
        price: 2200.00,
        stock: 15,
        isActive: true,
        category: 'eletronicos',
        createdAt: '2026-08-16T11:30:00.000Z'
    },
    {
        id: '3',
        name: 'Mouse Logitech',
        price: 150.00,
        stock: 30,
        isActive: true,
        category: 'perifericos',
        createdAt: '2026-08-17T14:00:00.000Z'
    }
]

const getAllProducts = (req, res) => {
    return res.status(200).json(products)
}

const getProductById = (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).json({
            message: 'Produto não encontrado'
        })
    }

    return res.status(200).json(product)
}

const createProduct = (req, res) => {
    const { name, price, stock, isActive, category } = req.body

    if (!name || price === undefined || stock === undefined || !category) {
        return res.status(400).json({
            message: 'Nome, preço, estoque e categoria são obrigatórios.'
        })
    }

    //  Validação de Tipo e Valor
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

    
    const newProduct = {
        id: String(products.length + 1), 
        name,
        price,
        stock,
        isActive,
        category,
        createdAt: new Date().toISOString() 
    }

    products.push(newProduct)
    return res.status(201).json(newProduct)
}

const updateProduct = (req, res) => {
    const id = req.params.id 
    const { name, price, stock, isActive, category } = req.body
    
    const productIndex = products.findIndex(doc => doc.id === id)

    if (productIndex === -1) { 
        return res.status(404).json({
            message: 'Produto não encontrado'
        })
    }

    products[productIndex] = { // Corrigido: products (com s)
        ...products[productIndex],
        name,
        price,
        stock,
        isActive,
        category
    }

    res.status(200).json({
        message: 'Produto atualizado com sucesso'
    })
}

const deleteProduct = (req, res) => {
    const id = req.params.id 
    
    const productIndex = products.findIndex(doc => doc.id === id)

    if (productIndex === -1) { 
        return res.status(404).json({
            message: 'Produto não encontrado'
        })
    }

    products.splice(productIndex, 1)

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