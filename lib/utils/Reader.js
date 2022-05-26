const fs = require("fs");

class Reader {
    static readJsonFile(){
        return JSON.parse(fs.readFileSync("explorers.json"));
    }
}

module.exports = Reader;