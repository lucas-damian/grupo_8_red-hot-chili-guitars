const fs = require("fs");
const path = require("path");
module.exports = {
    read: (dataBase) => {
        return JSON.parse(fs.readFileSync(dataBase, "utf-8"));
    },

    write: (route,dataBase) => {
        return fs.writeFileSync(path.join(route),JSON.stringify(dataBase,null,2));
    }
}