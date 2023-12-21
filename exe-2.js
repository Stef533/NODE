// Per impostare i crypto methods faccio nel terminale, dopo aver scritto NODE e .help in modo da avviare il REPL:

const crypto = require('crypto');
const cryptoMethods = Object.keys(crypto);

console.log(cryptoMethods);

// Per il random Id ho usato randomBytes:

function generateRandomId(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

const randomId = generateRandomId(8);
console.log(randomId);