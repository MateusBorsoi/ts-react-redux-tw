import express, {Request, Response } from 'express'
import fs from 'fs'

const app = express()
const port = 3001


app.use(express.json()) 

app.get('/users', (req: Request, res: Response) => {
    try {
        const usersData = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersData)
        res.json(users)
    } catch (error) {
        res.status(500).json({error:"Erro ao buscar pessoas"})
    }
})

app.post('/users', (req: Request, res: Response) => {
    try {
        const usersData = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersData)
        const newUser = req.body
        users.push(newUser)
        fs.writeFileSync('users.json', JSON.stringify(users, null, 2))
        res.status(201).json(newUser)
    } catch (error) {
        console.log('Erro ao adicionar usuário:', error)
        res.status(500).json({error: "Erro ao adcionar usuário"})
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
