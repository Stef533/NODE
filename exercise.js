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

async function getResults() {
  try {
    const resultsTina = await luckyDraw("Tina");
    console.log(resultsTina);
  } catch (error) {
    console.error(error.message);
  }

  try {
    const resultsJorge = await luckyDraw("Jorge");
    console.log(resultsJorge);
  } catch (error) {
    console.error(error.message);
  }

  try {
    const resultsJulien = await luckyDraw("Julien");
    console.log(resultsJulien);
  } catch (error) {
    console.error(error.message);
  }
}
getResults();
