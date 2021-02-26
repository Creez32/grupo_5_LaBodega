const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/users.json', 'utf-8'))
