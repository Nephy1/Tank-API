const mongoose = require('mongoose')

const tankSchema = new mongoose.Schema({
  id: Number,
  name: String,
  nation: String,
  role: String,
  alphaDamage: Number,
  regularShellPenetration: Number,
  premiumShellPenetration: Number,
  highExplosivePenetration: Number,
  frontHullArmor: Number,
  sideHullArmor: Number,
  rearHullArmor: Number,
  frontTurretArmor: Number,
  sideTurretArmor: Number,
  rearTurretArmor: Number,
})

const tanks = new mongoose.model('tank', tankSchema)

module.exports = tanks