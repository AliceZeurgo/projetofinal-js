var pizzaria = {  

    usuarios:[
        {
          Id: 1,
          Nome: "Alice Tavares",
          Email: "Alicetavares@gmail.com",
          Senha: "luanapererecasuicida",
          Foto: "./img-usuarios/AliceTavares.jpg",
          Endereço: [{
      
                Estado: "SP",
              Cidade: "Jandira",
              Bairro: "Santa teresa",
              Complemento: "Rua guarulhos 130"
          }],
               
          Telefone: "11 97122-7890"
      },
      {
          Id: 2,
          Nome: "Vitoria Alves",
          Email: "Vitoriaalves@rhyta.com",
          Senha: "12345678",
          Foto: "./img-usuarios/VitoriaAlves.jpg",
          Endereço: [{
      
                Estado: "BA",
              Cidade: "Salvador",
              Bairro: "xique xique",
              Complemento: "4ª Travessa Mamede 1742"
          }],
               
          Telefone: "71 3126-8865"
      },
      {
          Id: 3,
          Nome: "Livia Azevedo",
          Email: "liviaaraujoazevedo@gmail.com",
          Senha: "liviaaaaa2121332",
          Foto: "./img-usuarios/LiviaAzevedo.jpg",
          Endereço: [{
      
                Estado: "RS",
              Cidade: "Novo Hamburgo",
              Bairro: "Santa teresa",
              Complemento: "Rua Tabatinga 441"
          }],
               
          Telefone: "51 7067-8639"
      },
      {
          Nome: "Eduardo Zeurgo",
          Email: "EduardoZeurgo@gmail.com",
          Senha: "amoAaliceeee123",
          Foto: "./img-usuarios/EduardoZeurgo.jpg",
          Endereço: [{
      
                Estado: "SP",
              Cidade: "Barueri",
              Bairro: "xiq xiq",
              Complemento: "Rua cafundó 160"
          }],
               
          Telefone: "11 97165-7270"
      },
      {
          Nome: "Letícia Costa",
          Email: "LetCosta@gmail.com",
          Senha: "lrecasuicida",
          Foto: "./img-usuarios/LeticiaCosta.jpg",
          Endereço: [{
      
                Estado: "MT",
              Cidade: "Cuiabá",
              Bairro: "lut put",
              Complemento: "Rua L-2 1484"
          }],
               
          Telefone: "11 9583-7140"
         } 
      ]
    }
    var categorias=
    [
      {
        id: 1,
        nome: "Pizza de Chocolate",
        descricao: "Chocolate derretido, pedaços de chocolate ao leite, morangos.",
        preco: 24.99,
        avaliacao: "4/5"
      },
      {
        id: 2,
        nome: "Pizza de Banana Caramelada",
        descricao: "Bananas carameladas, creme de baunilha, amêndoas.",
        preco: 21.99,
        avaliacao: "5/5"
      },
      {
        id: 3,
        nome: "Pizza de Morango com Nutella",
        descricao: "Morangos frescos, Nutella, amêndoas.",
        preco: 26.99,
        avaliacao: "4/5"
      },
      {
        id: 4,
        nome: "Pizza de Maçã com Canela",
        descricao: "Maçã, canela, açúcar mascavo, nozes.",
        preco: 22.99,
        avaliacao: "3/5"
      },
      {
        id: 5,
        nome: "Pizza Romeu e Julieta",
        descricao: "Goiabada, queijo minas fresco.",
        preco: 23.99,
        avaliacao: "5/5"
      },
      {
        id: 6,
        nome: "Pizza de Pistache",
        descricao: "Creme de pistache, pistaches picados.",
        preco: 27.99,
        avaliacao: "4/5"
      },
      {
        id: 7,
        nome: "Pizza de Frutas Vermelhas",
        descricao: "Morangos, framboesas, mirtilos, creme de baunilha.",
        preco: 25.99,
        avaliacao: "5/5"
      }
    ],
    pizzasSalgadas 
    [
      {
        id: 11,
        nome: "Pizza Margherita",
        descricao: "Molho de tomate, mussarela, manjericão fresco.",
        preco: 25.99,
        avaliacao: "3/5"
      },
      {
        id: 12,
        nome: "Pizza Pepperoni",
        descricao: "Molho de tomate, pepperoni, queijo, orégano.",
        preco: 21.99,
        avaliacao: "5/5"
      },
      {
        id: 13,
        nome: "Pizza Calabresa",
        descricao: "Molho de tomate, calabresa, cebola, azeitonas.",
        preco: 23.99,
        avaliacao: "4/5"
      },
      {
        id: 14,
        nome: "Pizza Quatro Queijos",
        descricao: "Molho de tomate, mussarela, parmesão, provolone, gorgonzola.",
        preco: 28.99,
        avaliacao: "4/5"
      },
      {
        id: 15,
        nome: "Pizza Frango com Catupiry",
        descricao: "Molho de tomate, frango desfiado, catupiry, milho.",
        preco: 26.99,
        avaliacao: "3/5"
      },
      {
        id: 16,
        nome: "Pizza Portuguesa",
        descricao: "Molho de tomate, presunto, mussarela, ovos, cebola, azeitonas.",
        preco: 24.99,
        avaliacao: "5/5"
      },
      {
        id: 17,
        nome: "Pizza Vegetariana",
        descricao: "Molho de tomate, brócolis, milho, champignon, pimentão, cebola.",
        preco: 27.99,
        avaliacao: "2/5"
      }
    ],
    bebidas
     [
      {
        id: 21,
        nome: "Refrigerante Coca-Cola",
        descricao: "Refrigerante de cola carbonatado.",
        preco: 4.99,
        avaliacao: "4/5"
      },
      {
        id: 22,
        nome: "Suco de Laranja Natural",
        descricao: "Suco de laranja fresco e natural.",
        preco: 5.99,
        avaliacao: "5/5"
      },
      {
        id: 23,
        nome: "Água Mineral sem Gás",
        descricao: "Água mineral sem gás.",
        preco: 2.99,
        avaliacao: "4/5"
      },
      {
        id: 24,
        nome: "Suco de Maçã",
        descricao: "Suco natural de maçã.",
        preco: 4.29,
        avaliacao: "4/5"
      },
      {
        id: 25,
        nome: "Chá Gelado de Pêssego",
        descricao: "Chá preto gelado com sabor de pêssego.",
        preco: 3.99,
        avaliacao: "5/5"
      },
      {
        id: 26,
        nome: "Cerveja Artesanal IPA",
        descricao: "Cerveja artesanal India Pale Ale.",
        preco: 6.99,
        avaliacao: "4/5"
      },
      {
        id: 27,
        nome: "Café Espresso",
        descricao: "Café forte e encorpado em dose única.",
        preco: 2.99,
        avaliacao: "4/5"
      }
    ],
    adicionais
    [
      {
        id: 31,
        nome: "Molho de Pimenta",
        descricao: "Molho picante para acompanhar.",
        preco: 1.99,
        avaliacao: "4/5"
      },
      {
        id: 32,
        nome: "Azeitonas Verdes",
        descricao: "Azeitonas verdes fatiadas.",
        preco: 2.49,
        avaliacao: "3/5"
      },
      {
        id: 33,
        nome: "Queijo Parmesão Ralado",
        descricao: "Queijo parmesão ralado para finalizar suas pizzas.",
        preco: 2.99,
        avaliacao: "5/5"
      },
      {
        id: 34,
        nome: "Tomate Seco",
        descricao: "Tomates secos para adicionar um toque especial.",
        preco: 3.49,
        avaliacao: "4/5"
      },
      {
        id: 35,
        nome: "Orégano",
        descricao: "Tempero clássico para pizzas.",
        preco: 1.49,
        avaliacao: "5/5"
      },
      {
        id: 36,
        nome: "Cebola Caramelizada",
        descricao: "Cebolas caramelizadas para um sabor doce.",
        preco: 2.79,
        avaliacao: "3/5"
      },
      {
        id: 37,
        nome: "Bacon Crocante",
        descricao: "Bacon crocante para os amantes de carne.",
        preco: 3.99,
        avaliacao: "4/5"
      }
    ]
    module.exports = { adicionarPizza, listarPizzas, atualizarPizza, excluirPizza };