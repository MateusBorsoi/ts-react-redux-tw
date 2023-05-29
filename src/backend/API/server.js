const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

const encryptPassword = async (senha) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(senha, saltRounds);
  return hashedPassword;
};

const saveUsersToFile = (users, user) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("users.json", JSON.stringify(users), (err) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve();
    });
  });
};

app.post("/users", async (req, res) => {
  const userPayload = req.body;
  const userID = uuidv4();

  try {
    const hashedPassword = await encryptPassword(userPayload.senha);

    fs.readFile("users.json", "utf-8", async (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Erro ao verificar usuário !" });
        return;
      }

      const users = JSON.parse(data);

      const existingUser = users.find(
        (user) => user.email === userPayload.email
      );

      if (existingUser) {
        res.status(409).json({ message: "E-mail já cadastrado !" });
        return;
      }

      users.push({
        id: userID,
        nome: userPayload.nome,
        email: userPayload.email,
        senha: hashedPassword,
      });
      await saveUsersToFile(users, userPayload);
      res.status(200).json({ message: "Usuário cadastrado com sucesso !" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao salvar dados do usuário" });
  }
});

app.get("/users", (req, res) => {
  try {
    const usersData = fs.readFileSync("users.json", "utf-8");
    const users = JSON.parse(usersData);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pessoas" });
  }
});

app.get("/users/:id", (req, res) => {
  const userID = parseInt(req.params.id);

  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Erro na leitura do arquivo JSON", err);
      res.status(500).json({ message: "Erro interno do servidor" });
      return;
    }
    try {
      const usuarios = JSON.parse(data);
      const usuario = usuarios.find((user) => user.id === userID);

      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro na verificação do arquivo JSON:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
