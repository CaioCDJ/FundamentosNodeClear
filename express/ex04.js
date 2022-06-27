const express = require('express');
const server = express();

server.route('/clientes')
  .get((req,res) => res.send('Lista de cliente'))
  .post((req,res) => res.send('Novo cliente'))
  .put((req,res) => res.send('Alterar Cliente'))
  .delete((req,res) => res.send('Remover Cliente'))

server.listen(3000,() => console.log('Executando...'));
