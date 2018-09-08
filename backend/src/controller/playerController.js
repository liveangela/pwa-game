import PlayerClass from '../game/Player'

export const create = name => {
  const player = new PlayerClass(name)
  return player.create()
}

export default {
  create
}
