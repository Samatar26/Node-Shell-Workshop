#!/usr/bin/env node


// 1.b
// const fs = require('fs');
//
// fs.readdir(process.cwd(), 'utf-8', function(error, files){
//   if (error){
//     return error;
//   }
//   console.log(files.join(' '));
// });

// 1.c
const fs = require('fs');
const extension = process.argv[3];

function extensionType(file){
  return file.split('.')[1] === extension;
}

if (process.argv[2] === '-ex'){
  fs.readdir(process.cwd(), 'utf-8', function(error, files){
    if (error){
      return error;
    }
    console.log(files.filter(extensionType).join(' '));
  });
}
