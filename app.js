const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  adicionarPizza,
  listarPizzas,
  atualizarPizza,
  excluirPizza
} = require('./modulo/functions.js');

const app = express();
const port = 3030;

app.use(cors());
app.use(bodyParser.json());

//adicionar um novo produto 
app.post('/produtos/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    const novaPizza = req.body;
  
    let pizzaAdicionada;
    switch (categoria) {
      case 'pizzasSalgadas':
        pizzaAdicionada = adicionarPizzaSalgada(novaPizza);
        break;
      case 'pizzasDoces':
        pizzaAdicionada = adicionarPizzaDoce(novaPizza);
        break;
      case 'bebidas':
        pizzaAdicionada = adicionarBebida(novaPizza);
        break;
      default:
        pizzaAdicionada = false;
    }
  
    if (pizzaAdicionada) {
      res.status(201).send(`Produto na categoria ${categoria} adicionado com sucesso!`);
    } else {
      res.status(400).send(`Erro ao adicionar produto na categoria ${categoria}.`);
    }
  });
  
//listar todas as pizzas
app.get('/produtos/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    let produtos;
  
    switch (categoria) {
      case 'pizzasSalgadas':
      case 'pizzasDoces':
      case 'bebidas':
        produtos = listarProdutosPorCategoria(categoria);
        break;
      default:
        res.status(400).send(`Categoria ${categoria} não encontrada.`);
        return;
    }
  
    res.json(produtos);
  });
  

//editar ou atualizar as informações de uma pizza
app.put('/produtos/:categoria/:id', (req, res) => {
    const categoria = req.params.categoria;
    const idProduto = parseInt(req.params.id);
    const novasInformacoes = req.body;


    let produtoAtualizado;
    switch (categoria) {
      case 'pizzasSalgadas':
        produtoAtualizado = atualizarPizzaSalgada(idProduto, novasInformacoes);
        break;
      case 'pizzasDoces':
        produtoAtualizado = atualizarPizzaDoce(idProduto, novasInformacoes);
        break;
      case 'bebidas':
        produtoAtualizado = atualizarBebida(idProduto, novasInformacoes);
        break;
      default:
        produtoAtualizado = false; 
    }
  
    if (produtoAtualizado) {
      res.send(`Produto na categoria ${categoria} atualizado com sucesso!`);
    } else {
      res.status(404).send(`Produto na categoria ${categoria} não encontrado.`);
    }
  });
  

// Para excluir uma pizza
app.delete('/produtos/:categoria/:id', (req, res) => {
    const categoria = req.params.categoria;
    const idProduto = parseInt(req.params.id);
  
    let produtoExcluido;
    switch (categoria) {
      case 'pizzasSalgadas':
        produtoExcluido = excluirPizzaSalgada(idProduto);
        break;
      case 'pizzasDoces':
        produtoExcluido = excluirPizzaDoce(idProduto);
        break;
      case 'bebidas':
        produtoExcluido = excluirBebida(idProduto);
        break;
      default:
        produtoExcluido = false;
    }
  
    if (produtoExcluido) {
      res.send(`Produto na categoria ${categoria} excluído com sucesso!`);
    } else {
      res.status(404).send(`Produto na categoria ${categoria} não encontrado.`);
    }
  });
  

app.listen(port, () => {
  console.log(`API funcionando e aguardando requisições na porta ${port}`);
});
