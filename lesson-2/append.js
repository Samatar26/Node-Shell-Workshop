// 2.d
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
  var toBeAppended = fileContent;
  if (process.argv[3] === '>>' && process.argv[4]){
    fs.appendFile(process.argv[4], toBeAppended, function(err){
      if (err){
        return err;
      }
    })
  }
})
