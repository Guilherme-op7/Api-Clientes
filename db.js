const mysql = require('mysql2/promise');

const clientes = mysql.createPool(process.env.CONNECTION_STRING);

async function selectCustomers() {
    const resultados = await clientes.query("SELECT * FROM clientes;")
    return resultados[0];

}

async function selectCustomerr(id) {
    const resultados = await clientes.query("SELECT * FROM clientes WHERE id =?;", [id])
    return resultados[0];

}

async function insertCustomer(customer) {
    await clientes.query(
        `INSERT INTO clientes (nome, email, telefone, endereco)
         VALUES (?, ?, ?, ?)`,
        [customer.nome, customer.email, customer.telefone, customer.endereco]
    );
}

async function updateCustomer(id, customerData) {
    await clientes.query(
        `UPDATE clientes
         SET nome = ?, email = ?, telefone = ?, endereco = ?
         WHERE id = ?`,
        [customerData.nome, customerData.email, customerData.telefone, customerData.endereco, id]
    );
}

async function deletecustomer(id) {
    const values = [id];

    await clientes.query(
        `DELETE FROM clientes WHERE id = ?`, values);

}

module.exports = {
    selectCustomers,
    selectCustomerr,
    insertCustomer,
    updateCustomer,
    deletecustomer
}