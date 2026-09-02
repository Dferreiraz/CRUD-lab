const Database = require('better-sqlite3')

const db = new Database('src/database/products.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        stock INTEGER NOT NULL,
        isActive INTEGER NOT NULL,
        category TEXT NOT NULL,
        createdAt TEXT NOT NULL
    )
`)

const count = db.prepare('SELECT COUNT(*) as total FROM products').get()

if (count.total === 0) {
    const insert = db.prepare(`
        INSERT INTO products (id, name, price, stock, isActive, category, createdAt)
        VALUES (@id, @name, @price, @stock, @isActive, @category, @createdAt)
    `)

    const insertMany = db.transaction((products) => {
        for (const product of products) {
            insert.run(product)
        }
    })

    insertMany([
        {
            id: '1',
            name: 'Notebook Dell',
            price: 3500.00,
            stock: 10,
            isActive: 1,
            category: 'eletronicos',
            createdAt: new Date().toISOString()
        },
        {
            id: '2',
            name: 'Smartphone Samsung Galaxy',
            price: 2200.00,
            stock: 15,
            isActive: 1,
            category: 'eletronicos',
            createdAt: new Date().toISOString()
        },
        {
            id: '3',
            name: 'Mouse Logitech',
            price: 150.00,
            stock: 30,
            isActive: 1,
            category: 'perifericos',
            createdAt: new Date().toISOString()
        }
    ])

    console.log('Banco de dados inicializado com dados de teste!')
} else {
    console.log('Banco de dados conectado com sucesso!')
}

module.exports = db