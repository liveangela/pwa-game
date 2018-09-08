export default class Player {
  constructor(name = 'test') {
    this.name = name
  }

  create() {
    const {name} = this
    return {
      name,
      str: 10,
      agi: 10,
      int: 10,
      dur: 10,
      coin: 0,
      gold: 0,
      exp: 0,
      lv: 1
    }
  }
}
