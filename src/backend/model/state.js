export default class State {

  #id;
  #name;
  #symbol;

  constructor(id, name, symbol) {
    this.#id = id;
    this.#name = name;
    this.#symbol = symbol;

		Object.seal(this)
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getSymbol() {
    return this.#symbol;
  }

  setId(id) {
    this.#id = id;
  }

  setName(name) {
    this.#name = name;
  }

  setSymbol(symbol) {
    this.#symbol = symbol;
  }

  toString() {
    return `State: ` +
      `id=${this.#id}, ` +
      `name=${this.#name}, ` +
      `symbol=${this.#symbol}`;
  }
}
