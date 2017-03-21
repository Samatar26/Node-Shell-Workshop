// 2.a
const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2]);
let fileContent = '';
readStream.on('data', function(chunk){
  fileContent += chunk;
})
readStream.on('error', function(err){
  return err;
});
readStream.on('end', function() {
  process.stdout.write(fileContent);
})
