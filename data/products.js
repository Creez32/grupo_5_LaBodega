const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/products.json', 'utf-8'))