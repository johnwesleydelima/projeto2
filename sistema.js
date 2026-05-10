// lista dos 10 produtos
const produtos = [
  {
      nome: "shaampo",
      valor: "R$ 28,00",
      quantidade: 100,
      peso: 2,
      marca: "Above",
      codigo: 1234
  },
  {
      nome: "Achocolatado em pó",
      valor: "R$ 10,00",
      quantidade: 55,
      peso: 0.7,
      marca: "AAAA",
      codigo: 6767
  },
  {
      nome: "Feijão Preto",
      valor: "R$ 13,00",
      quantidade: 105,
      peso: 1,
      marca: "BBBB",
      codigo: 7373
  },
 {
      nome: "Macarrão",
      valor: "R$ 6,90",
      quantidade: 130,
      peso: 0.5,
      marca: "CCCC",
      codigo: 9090
 },
  {
      nome: "Óleo",
      valor: "R$ 5,90",
      quantidade: 70,
      peso: 0.9,
      marca: "DDDD",
      codigo: 1212
  },
 {
      nome: "Arroz",
      valor: "R$ 25,00",
      quantidade: 95,
      peso: 5,
      marca: "EEEE",
      codigo: 8787
 },
  {
      nome: "Açucar",
      valor: "R$ 9,00",
      quantidade: 67,
      peso: 1,
      marca: "FFFF",
      codigo: 2324
  },
 {
      nome: "Sal",
      valor: "R$ 3,99",
      quantidade: 140,
      peso: 1,
      marca: "GGGG",
      codigo: 9999
 },
  {
      nome: "Leite em pó",
      valor: "R$ 32,00",
      quantidade: 100,
      peso: 0.5,
      marca: "HHHH",
      codigo: 5555
  },
  {
      nome: "Farinha de Trigo",
      valor: "R$ 7,80",
      quantidade: 80,
      peso: 1,
      marca: "IIII",
      codigo: 8888
},
]

// Criar o JSON:
const produtosJSON = JSON.stringify(produtos)
console.log(produtosJSON)

// Criar o arquivo
const fs = require("fs")
fs.writeFileSync("produtos.json", produtosJSON)

// Ler o arquivo
const produtosArquivo = require("./produtos.json")
console.log(produtosArquivo)

// MOSTRAR OS DADOS DO ARQUIVO ORGANIZADAMENTE
produtosArquivo.forEach((produtos)=>{
    console.log(produtos.nome + 
        " - nome: " + produtos.nome + 
        " - valor: " + produtos.valor+
        " - quantidade: " + produtos.quantidade +
        " - peso: " + produtos.peso +
        " - marca: " + produtos.marca +
        " - codigo: " + produtos.codigo)
})

// Funções de listas
const produtosLista = require("./produtos.json")

produtosLista.push({
        nome: "Macarrão",
        valor: 10.50,
        quantidade: 100,
        peso: 10,
        marca: "CCCCC",
        codigo: 1234
    })

// Filtrar produtos
console.log("##### Produtos filtrados por valor menor que 25 #####")

const filtro = produtosLista.filter((produto)=> 
    parseFloat(
        produto.valor.toString()
        .replace("R$", "")
        .replace(",", ".")
    ) < 25
)

console.log(filtro)

// Alterar todos os produtos
console.log("##### Produtos com 15% de desconto: #####")

const desconto = produtosLista.map((produto)=> {

    const valorNumero = parseFloat(
        produto.valor.toString()
        .replace("R$", "")
        .replace(",", ".")
    )

    return {
        ...produto,
        valor: valorNumero * 0.85
    }
})

console.log(desconto)

// Encontrar um produto
console.log("##### Produto encontrado pelo código #####")

const encontrar = produtosLista.find((produto) => produto.codigo == 1234)

console.log(encontrar)
