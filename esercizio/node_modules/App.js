const figlet = require('figlet');

const text = 'Hello World';

figlet(text, function(err, data) {
  if(err){
    console.log('Error')
    console.dir(err)
    return
  }
  console.log(data)
})