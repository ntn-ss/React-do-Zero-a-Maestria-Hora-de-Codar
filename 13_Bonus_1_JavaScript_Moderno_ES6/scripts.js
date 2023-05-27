// 1 - Var, let e const: var é visível no código todo, let só no bloco em questão (mas seu valor pode ser alterado) e const é como um let que não pode ter o valor modificado.

var x = 10
var y = 15

if (y>10) {
    // o escopo global é alterado graças a um bloco if
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b>10) {
    // let e const só funcionam dentro do escopo das chaves
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i<5; i++) {
    // variável temporária executada apenas no for
    console.log(i)
}
console.log(i)

function logName() {
    // só existe no bloco
    const name = "Nathan"
    console.log(name)
}

const name = "Outro Nathan"
logName()
console.log(name);

// redefinir o valor de uma constante configura erro, claro.
// name = "teste"

// 2 - Arrow function: economiza por não precisar da palavra chave "function" e por não precisar ter suas chaves e colchetes explícitos caso seja uma operação simples de uma linha só.
const sum = function sum(a,b) {
    return a+b
}
const arrowSum = (a, b) => a+b //sem return e chaves por ser uma operação simples com os argumentos

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if (name){
        return "Olá, "+name+"!"
    } else {
        return "Olá!"
    }
}

console.log(greeting("Nathan"))
console.log(greeting())

const testeArrow = () => console.log("Testou.")

testeArrow()

const user = {
    name: "Theo",
    sayUsername() {
        var self = this
        setTimeout(function(){
            // dentro deste bloco, o "this" do objeto perde o significado. Foi necessário "bindá-lo" acima.
            console.log(self)
            console.log("Username: "+self.name)
        }, 100)
    },
    sayUsernameArrow() {
        setTimeout(()=>{
            console.log(this)
            console.log("Username: "+this.name)
        }, 300)
    }
}

user.sayUsername()
user.sayUsernameArrow();

// 3 - Filter: método de array para filtrar dados sob uma condição estabelecida. Isso traz um array apenas com os elementos interessantes.

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n)=>{
    // percorre como um for
    if (n>=3){
        return n
    }
})

console.log(highNumbers)

const users = [
    {name:"Nathan", available: true},
    {name: "Pedro", available: false},
    {name: "João", available: false},
    {name: "Marcos", available: true}
]

const availableUsers = users.filter((user)=> user.available)
const notAvailableUsers = users.filter((user)=> !user.available)

console.log(availableUsers)
console.log(notAvailableUsers);

// 4 - Map: outro método de array, percorre todos os elementos. Quando usamos um map, queremos modificar os dados do array.

// Quero que as roupas fiquem em promoção.
const products = [
    {name: 'Camisa', price: 10.99, category: "Roupas"},
    {name: 'Chaleira Elétrica', price: 49.99, category: "Eletrodomésticos"},
    {name: 'Fogão', price: 400, category: "Eletrodomésticos"},
    {name: "Calça", price: 50.99, category: "Roupas"}
]

products.map((product) =>{
    if (product.category==="Roupas"){
        product.onSale = true
    }
})

console.log(products);

// 5 - Template literals: strings entre backticks/acentos graves para colocar variáveis dentro do texto sem operadores de concatenação, como o +, por meio de ${variavel}.
const myUsers = [
    { name: "Nathan", age: 21 },
    { name: "Breno", age:23 }
]

console.log(`Meu nome é ${myUsers[0].name}. Eu tenho ${myUsers[0].age} anos. Já eu sou o ${myUsers[1].name}, tenho ${myUsers[1].age} anos.`);

// 6 - Destructuring: recurso a se usar em arrays e objetos, a ideia é transformar cada item desses dados em variáveis. Simplifica a declaração de n variáveis para uma linha só.

const fruits = ["Maçã", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

console.log(f1, f2, f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periférios",
    color: "Preto"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence à categoria ${productCategory} e sua cor é ${color}.`);

// 7 - Spread operator: pode ser usado em arrays e objetos. Usado para constituir novos valores destes dados em outros arrays e objetos. Podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro, sua sintaxe é reticências.
const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = [...a1, ...a2]

console.log(a3);

const a4 = [0, ...a1, 4]
console.log(a4);

const carName = {name: 'Gol'}
const carBrand = {brand: "VW"}
const otherInfo = {km: 1000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfo, wheels: 4}
console.log(car);

// 8 - Classes. O que comentar?
class Product {
    constructor (name, price){
        this.nome = name,
        this.preco = price
    }
    productOnSale(discount) {
        return `O produto ${this.nome} está em uma liquidação de ${discount}% e seu valor agora é  de R$${this.preco*((100-discount)/100)}.`
    }
}

const camisa = new Product("Camisa Gola V", 20)
console.log(camisa.name)
console.log(camisa.productOnSale(20))
console.log(camisa.productOnSale(50))

const tenis = new Product("Tênis Verde", 120)
console.log(tenis.productOnSale(20));

// 9 - Herança. Cria classes filhas, herdando métodos e atributos da mãe.

class ProductWithAttributes extends Product {
    constructor (name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color)=>{
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes ("Chapéu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.name)
console.log(hat.productOnSale(30))
hat.showColors();