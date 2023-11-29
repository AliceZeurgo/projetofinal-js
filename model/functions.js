/************************************************************
 * Objetivo: Trazer informações sobre os produtos da pizzaria: Tony-Pizzaria.
 * Data: 24/11/2023
 * Autor: Alice Zeurgo 
 * Versão: 1.0
 ***********************************************************/

var produtos = require('./Produtos')
const produtosJs = Produtos.Produtos

const getPizzasSalgadasLista = function () {

    let PizzasSalgadas = Produtos.Salgadas.slice();
    PizzasSalgadas.push.apply(Produtos.Salgadas);
    
    
    let SalgadasLista = [];
    let status = false; 

    for (let i  = 0; i < PizzasSalgadas.length; i++) {

        let Salgada = PizzasSalgadas[i];
        let InfosPizza = {
            Nome: Salgadas.Nome,
            Preço: Salgadas.Preço
        };

        let Resultados = {
        Pizzas: PizzasSalgadas,
        };

        if (status) {
            return Resultados;
        } else {
            return false; }
    };
}

//Função sendo chamada

getPizzasSalgadasLista();
