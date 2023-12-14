/************************************************************
 * Objetivo: Trazer informações sobre os produtos da pizzaria: Tony-Pizzaria.
 * Data: 24/11/2023
 * Autor: Alice Zeurgo 
 * Versão: 1.0
 ***********************************************************/


const fs = require('fs');


function adicionarPizza(novaPizza) {
    try {
       
        const conteudoAtual = fs.readFileSync('pizzaria_tudo.json', 'utf-8');
        
        const pizzas = JSON.parse(conteudoAtual);
        
        // Adiciona a nova pizza 
        pizzas.push(novaPizza);
        
        // Escreve o novo array de pizzas de volta no arquivo
        fs.writeFileSync('pizzaria_tudo.json', JSON.stringify(pizzas, null, 2));
        
        console.log('Pizza adicionada!');
    } catch (error) {
        console.error('Erro ao adicionar!', error);
    }
}

module.exports = { adicionarPizza };



const fs = require('fs');

function listarPizzas() {
    try {
        const pizzas = JSON.parse(fs.readFileSync('pizzaria_tudo.json', 'utf-8'));
        console.log('Lista de Pizzas:', pizzas);
    } catch (error) {
        console.error('Erro ao listar pizzas:', error);
    }
}


const fs = require('fs');

function atualizarPizza(idPizza, novasInformacoes) {
    try {
        const pizzas = JSON.parse(fs.readFileSync('pizzaria_tudo.json', 'utf-8'));
        const pizzaIndex = pizzas.findIndex(pizza => pizza.id === idPizza);

        if (pizzaIndex !== -1) {
            pizzas[pizzaIndex] = { ...pizzas[pizzaIndex], ...novasInformacoes };
            fs.writeFileSync('pizzaria_tudo.json', JSON.stringify(pizzas, null, 2));
            console.log('Pizza atualizada com sucesso!');
        } else {
            console.log('Pizza não encontrada.');
        }
    } catch (error) {
        console.error('Erro ao atualizar pizza:', error);
    }
}


const fs = require('fs');

function excluirPizza(idPizza) {
    try {
        let pizzas = JSON.parse(fs.readFileSync('pizzaria_tudo.json', 'utf-8'));
        pizzas = pizzas.filter(pizza => pizza.id !== idPizza);
        fs.writeFileSync('pizzaria_tudo.json', JSON.stringify(pizzas, null, 2));
        console.log('Pizza excluída com sucesso!');
    } catch (error) {
        console.error('Erro ao excluir pizza:', error);
    }
}

module.exports = { adicionarPizza, listarPizzas, atualizarPizza, excluirPizza };


