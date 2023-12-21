const fs = require('fs')
const filePath = 'example.txt';
const fileContent = 'Ciao, questo è il testo'

fs.writeFile(filePath, fileContent, (err) => {
  if(err){
    console.error('Error, text not found')
  } else {
    console.log(`${filePath}`)
  }
})
