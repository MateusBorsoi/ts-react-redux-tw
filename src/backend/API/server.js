import express from 'express';
import fs from 'fs';
var app = express();
var port = 3001;
app.use(express.json());
app.get('/users', function (req, res) {
    try {
        var usersData = fs.readFileSync('users.json', 'utf-8');
        var users = JSON.parse(usersData);
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar pessoas" });
    }
});
app.post('/users', function (req, res) {
    try {
        var usersData = fs.readFileSync('users.json', 'utf-8');
        var users = JSON.parse(usersData);
        var newUser = req.body;
        users.push(newUser);
        fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
        res.status(201).json(newUser);
    }
    catch (error) {
        console.log('Erro ao adicionar usuário:', error);
        res.status(500).json({ error: "Erro ao adcionar usuário" });
    }
});
app.listen(port, function () {
    console.log("Servidor rodando na porta ".concat(port));
});
