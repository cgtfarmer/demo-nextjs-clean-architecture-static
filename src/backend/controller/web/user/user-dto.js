export default class UserDto {

  #id;
  #firstName;
  #lastName;
  #age;
  #weight;
  #income;
  #stateId;

  constructor(id, firstName, lastName, age, weight, income, stateId) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
    this.#weight = weight;
    this.#income = income;
    this.#stateId = stateId;

		Object.seal(this)
  }

  getId() {
    return this.#id;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getAge() {
    return this.#age;
  }

  getWeight() {
    return this.#weight;
  }

  getIncome() {
    return this.#income;
  }

  getStateId() {
    return this.#stateId;
  }

  setId(id) {
    this.#id = id;
  }

  setFirstName(firstName) {
    this.#firstName = firstName;
  }

  setLastName(lastName) {
    this.#lastName = lastName;
  }

  setAge(age) {
    this.#age = age;
  }

  setWeight(weight) {
    this.#weight = weight;
  }

  setIncome(income) {
    this.#income = income;
  }

  setStateId(stateId) {
    this.#stateId = stateId;
  }

  toString() {
    return `UserDto: ` +
      `id=${this.#id}, ` +
      `firstName=${this.#firstName}, ` +
      `lastName=${this.#lastName}, ` +
      `age=${this.#age}, ` +
      `weight=${this.#weight}, ` +
      `income=${this.#income}, ` +
      `stateId=${this.#stateId}`;
  }
}
