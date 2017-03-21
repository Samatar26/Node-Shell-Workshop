// 2.c
const fs = require('fs');
const readStream = fs.createReadStream(process.argv[2]);

if (process.argv[3] === '>' && process.argv[4]){
var writeStream = fs.createWriteStream(process.argv[4]);
  readStream.on('open', function(){
    readStream.pipe(writeStream);
  })
}
