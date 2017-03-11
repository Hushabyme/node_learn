const fs = require('fs');

fs.writeFile('test1.txt', 'Hello,World!', error => {
  if(error) {
    throw new Error('cannot create this file!')
  }
});
