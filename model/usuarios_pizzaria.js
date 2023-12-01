const { urlencoded } = require("body-parser");

var usuarios =
[
   {
    Id: 1,
    Nome: "Alice Tavares",
    Email: "Alicetavares@gmail.com",
    Senha: "luanapererecasuicida",
    Foto: "./img-usuarios/AliceTavares.jpg"
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