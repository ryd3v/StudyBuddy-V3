const items = require('./data.js');

var item = Array.from(items);

let study = item.sort(() => 0.5 - Math.random())[0];
console.log(study);
