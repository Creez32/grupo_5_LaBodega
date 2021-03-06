const fs = require("fs");
const path = require('path');

const products_db = path.join('data','products.json');

module.exports = {
    getWines: ()=> JSON.parse(fs.readFileSync(products_db, "utf-8")),
    setWines: (data) => {
        fs.writeFileSync(
            products_db,
            JSON.stringify(data, null, 2),
            "utf-8"
        );
    },
};
