const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt")

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

const saveProdutsToFile = (produtos) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("produtos.json", JSON.stringify(produtos), (err) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve();
    });
  });
};

const readUsersFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("produtos.json", "utf-8", (erro, data) => {
      if (erro) {
        console.log(erro);
        reject(erro);
        return;
      }
      const produtos = JSON.parse(data);
      resolve(produtos);
    });
  });
};

app.post("/produtos", async (req, res) => {
  const produto = req.body;

  try {

  let produtos = await readUsersFromFile();


  const produtoID = produtos.length + 1;

  produtos.push({
    id: produtoID,
    descricao: produto.descricao,
    preco: produto.preco,
    categoria: produto.categoria,
    imagens: produto.imagens,
    complemento: produto.complemento,
    promocional: produto.promocional,
    quantidade: produto.quantidade,
  });
  
    await saveProdutsToFile(produtos);
    res.status(200).json({ message: "Produto Cadastrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao cadastrar produto!" });
  }
});

app.get("/produtos", (req, res) => {
  try {
    const produtos = fs.readFileSync("produtos.json", "utf-8");
    const produtosData = JSON.parse(produtos);
    res.json(produtosData);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

app.get("/produtos/:id", (req, res) => {
  const produtoID = parseInt(req.params.id);

  fs.readFile("produtos.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Erro na leitura do arquivo JSON", err);
      res.status(500).json({ message: "Erro interno do servidor" });
      return;
    }
    try {
      const produtos = JSON.parse(data);
      const produto = usuarios.find((produto) => produto.id === produtoID);

      if (produto) {
        res.json(produto);
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
