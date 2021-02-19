const fs = require('fs');
const path = require('path');

const wines = path.join('data','products.json');

module.exports = {
    getWines: ()=> JSON.parse(fs.readFileSync( wines, 'utf-8')),
    setWines: (data) => {
        fs.writeFileSync(
            wines,
            JSON.stringify(data, null, 2), 
            "utf-8"
        );
    },
}