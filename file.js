let fs = require('fs');
let files = fs.readdirSync('.');
for(fn in files){
  console.log(files[fn]);
}