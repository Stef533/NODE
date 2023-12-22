const process = require('process');

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player}`);
      } else {
        reject(new Error(`${player}`));
      }
    });
  });
}

luckyDraw('Joe')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .then(() => {
    return luckyDraw('Caroline');
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .then(() => {
    return luckyDraw('Sabrina');
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
