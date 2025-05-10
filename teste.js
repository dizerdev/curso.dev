class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}

function salvarUsuario(input) {
  if (!input) {
    throw new ReferenceError();
  }
}

try {
  salvarUsuario({});
} catch (error) {
  if (error instanceof ReferenceError) {
    throw error;
  }

  if (error instanceof ValidationError) {
    console.log(error);
    return;
  }

  console.log("Erro desconhecido:");
  console.log(error.stack);
}

class Product {
  constructor(id, name, price) {
    if (typeof id !== "number") throw new TypeError("id must be a number");
    if (typeof name !== "string") throw new TypeError("name must be a string");
    if (typeof price !== "number")
      throw new TypeError("price must be a integer");

    this.id = id;
    this.name = name;
    this.price = price;
  }

  getFormattedPrice() {
    return `R$ ${this.price.toFixed(2)}`;
  }
}

// Criando um produto
const prod = new Product(1, "Camisa", 599 / 33);

// Verificando o tipo via instanceof
if (prod instanceof Product) {
  console.log(prod.getFormattedPrice()); // R$ 59.90
}
