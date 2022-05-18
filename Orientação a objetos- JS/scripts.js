//Crie uma classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = 0;
  }
  //Dentro de ContaBancaria, construa o getter eo setter de saldo;
  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    this._saldo = valor;
  }
  //Dentro de ContaBancaria, os métodos sacar e depositar;
  sacar(valor) {
    if (valor > this._saldo) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }
  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}
//Crie uma classe-filha chamada ContaCorrenteque herda todos esses parâmetros cartaoCredito; e ainda possui o parâmetro

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = this.cartaoCredito;
  }
  // Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;

  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}
//Crie uma classe-ilha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}
//Crie uma classe-ilha chamada ContaUniversitariaque herda todos os parâmetros de ContaBancaria;
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }
  sacar(valor) {
    if (valor > 500) {
      return "Operação negada!";
    }

    this._saldo(this._saldo - valor);
  }
}
