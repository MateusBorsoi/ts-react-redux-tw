import express, { Request, Response } from "express";
import fs from "fs";
import {v4 as uuidv4} from 'uuid'

const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

app.use(express.json());

app.post("/users", (req: Request, res: Response) => {
  const userPayload = req.body;

  const userID = uuidv4();

  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao verificar usuário !" });
      return;
    }

    const users = JSON.parse(data);

    const existingUser = users.find(
      (user: any) => user.email === userPayload.email
    );

    if (existingUser) {
      res.status(409).json({ message: "E-mail já cadastrado !" });
      return;
    }

    users.push({id:userID, nome:userPayload.nome, email:userPayload.email, senha:userPayload.senha});
    fs.writeFile("users.json", JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Erro ao salvar dados do usuário !" });
        return;
      }
      res.status(200).json({message: "Usuário cadastrado com sucesso !"})
    });
  });

});

app.get("/users", (req: Request, res: Response) => {
  try {
    const usersData = fs.readFileSync("users.json", "utf-8");
    const users = JSON.parse(usersData);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pessoas" });
  }
});

app.get("/users/:id", (req: Request, res: Response) => {
  const userID = parseInt(req.params.id);

  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Erro na leitura do arquivo JSON", err);
      res.status(500).json({ message: "Erro interno do servidor" });
      return;
    }
    try {
      const usuarios: User[] = JSON.parse(data);
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
