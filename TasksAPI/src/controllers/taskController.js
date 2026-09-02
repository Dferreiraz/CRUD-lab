const tasks = [
    {
        id: '1',
        title: 'Finalizar documentação da API',
        description: 'Criar e revisar a documentação dos endpoints disponíveis.',
        status: 'completed',
        priority: 'high',
        createdAt: '2026-08-12'
    },
    {
        id: '2',
        title: 'Corrigir responsividade do dashboard',
        description: 'Ajustar o layout para funcionar corretamente em dispositivos móveis.',
        status: 'in_progress',
        priority: 'medium',
        createdAt: '2026-08-24'
    },
    {
        id: '3',
        title: 'Adicionar sistema de notificações',
        description: 'Implementar notificações para informar o usuário sobre novas atividades.',
        status: 'pending',
        priority: 'low',
        createdAt: '2026-08-29'
    }
]

const getAllTasks = (req, res) => {
    return res.status(200).json(tasks)
}

const getTaskById = (req, res) => {
    const id = req.params.id
    const task = tasks.find(task => task.id === id)

    if (!task) {
        return res.status(404).json({
            message: 'Essa task não foi encontrada'
        })
    }

    res.status(200).json(task)
}

const createTask = (req, res) => {
    const { title, description, status, priority } = req.body

    if (!title || !description || !status || !priority) {
        return res.status(400).json({
            message: 'Não foi possível criar esta task, preencha todas as informações!'
        })
    }

    const validStatuses = ['pending', 'in_progress', 'completed']
    if (!validStatuses.includes(status)) {
        return res.status(400).json({
            message: 'Status inválido. Use: pending, in_progress ou completed'
        })
    }

    const newTask = {
        id: String(tasks.length + 1),
        title,
        description,
        status,
        priority,
        createdAt: new Date().toISOString()
    }

    tasks.push(newTask)

    res.status(201).json(newTask)
}

const updateTask = (req, res) => {
    const id = req.params.id
    const { title, description, status, priority } = req.body

    const taskIndex = tasks.findIndex(doc => doc.id === id)

    if (taskIndex === -1) {
        return res.status(404).json({
            message: 'Documento não encontrado'
        })
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title,
        description,
        status,
        priority
    }

    res.status(200).json({
        message: 'Task atualizada com sucesso'
    })
}

const deleteTask = (req, res) => {
    const id = req.params.id

    const taskIndex = tasks.findIndex(doc => doc.id === id)

    if (taskIndex === -1) {
        return res.status(404).json({
            message: 'Documento não encontrado'
        })
    }

    tasks.splice(taskIndex, 1)

    res.status(200).json({
        message: 'Task deletado com sucesso'
    })
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}