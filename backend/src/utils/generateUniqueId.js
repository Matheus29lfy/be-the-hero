const crypto = require('crypto') 

module.exports = function gemerationUniqueId(){
  return crypto.randomBytes(4).toString('HEX')
}