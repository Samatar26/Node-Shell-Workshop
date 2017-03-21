#!/usr/bin/env node

// 1.a
const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(error, file){
  if (error){
    return error;
  }
  process.stdout.write(file);
});
