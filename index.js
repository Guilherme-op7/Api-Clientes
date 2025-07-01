require("dotenv").config()
const db = require("./db")
const express = require("express");

const app = express();

app.use(express.json());


app.delete("/clientes/:id", async (request, response) =>  {
    const id = parseInt(request.params.id) 
    await response.json (db.deletecustomer(id))
    response.sendStatus(204)
})

app.patch("/clientes/:id", async (request, response) => {
    const id = request.params.id
    const customer = request.body;
    await db.updateCustomer(id, customer);
    response.sendStatus(201);
})

app.post("/clientes", async (req, res) => {
  console.log(req.body); 
  await db.insertCustomer(req.body);
  res.sendStatus(201);
});


app.get("/clientes/:id", async (request, response) =>  {
    const id = parseInt(request.params.id) 
    const resultados = await db.selectCustomerr(id);

    response.json(resultados)
})

app.get("/clientes", async (request, response) =>  {
    const resultados = await db.selectCustomers()
    response.json(resultados)
})

app.get("/", (request, response, next) => {
    response.json({
        message: "Ola mundo"
    })
})

app.listen(process.env.PORT, () => (
    console.log("Funcionando")
));