const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
var app = express();
var port = 5000;
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(express.json());
app.post("/users", function (req, res) {
    var userPayload = req.body;
    var userID = uuidv4();
    fs.readFile("users.json", "utf-8", function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Erro ao verificar usuário !" });
            return;
        }
        var users = JSON.parse(data);
        var existingUser = users.find(function (user) { return user.email === userPayload.email; });
        if (existingUser) {
            res.status(409).json({ message: "E-mail já cadastrado !" });
            return;
        }
        users.push({ id: userID, nome: userPayload.nome, email: userPayload.email, senha: userPayload.senha });
        fs.writeFile("users.json", JSON.stringify(users), function (err) {
            if (err) {
                console.error(err);
                res.status(500).json({ message: "Erro ao salvar dados do usuário !" });
                return;
            }
            res.status(200).json({ message: "Usuário cadastrado com sucesso !" });
        });
    });
});
app.get("/users", function (req, res) {
    try {
        var usersData = fs.readFileSync("users.json", "utf-8");
        var users = JSON.parse(usersData);
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar pessoas" });
    }
});
app.get("/users/:id", function (req, res) {
    var userID = parseInt(req.params.id);
    fs.readFile("users.json", "utf-8", function (err, data) {
        if (err) {
            console.error("Erro na leitura do arquivo JSON", err);
            res.status(500).json({ message: "Erro interno do servidor" });
            return;
        }
        try {
            var usuarios = JSON.parse(data);
            var usuario = usuarios.find(function (user) { return user.id === userID; });
            if (usuario) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ message: "Usuário não encontrado" });
            }
        }
        catch (error) {
            console.error("Erro na verificação do arquivo JSON:", error);
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    });
});
app.listen(port, function () {
    console.log("Servidor rodando na porta ".concat(port));
});
