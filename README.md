# 📦 API de Clientes - Node.js + Express + MySQL

Este projeto é uma **API REST** para gerenciar clientes. Ele permite criar, listar, atualizar e excluir registros de clientes em um banco MySQL. Foi desenvolvido por **Guilherme Neto** como prática acompanhando uma vídeo-aula.

---

## 🚀 Funcionalidades

✅ Criar cliente - `POST /clientes`  
✅ Listar todos os clientes - `GET /clientes`  
✅ Buscar cliente por ID - `GET /clientes/:id`  
✅ Atualizar cliente por ID - `PATCH /clientes/:id`  
✅ Deletar cliente por ID - `DELETE /clientes/:id`

---

## ⚙️ Tecnologias utilizadas

- Node.js
- Express
- MySQL
- dotenv

---

## 📂 Estrutura do Projeto

.
├── index.js # Arquivo principal com as rotas
├── db.js # Módulo para conexão e queries no MySQL
├── package.json


---

## 📌 Variáveis de ambiente

PORT=3000

CONNECTION_STRING=mysql://root:1234@localhost:3306/clientes

---

## 🧭 Como rodar o projeto localmente

1️⃣ Clone este repositório:
```bash
git clone https://github.com/GuilhermeNeto/Api-Clientes.git
cd Api-Clientes

2️⃣ Instale as dependências:

npm install

3️⃣ Configure o .env com as credenciais do seu banco.

4️⃣ Inicie o servidor:

npm start

5️⃣ Acesse as rotas via navegador, Insomnia ou Postman:
http://localhost:3000/clientes

## 


💡 Observação
Projeto desenvolvido para estudo, acompanhando uma vídeo-aula. 

## 
👤 Autor
Guilherme Neto