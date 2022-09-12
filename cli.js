console.log("====================================");
console.log("Welcome to the MeiliSearch Toolkit");
console.log("====================================");

const readline = require("readline")
const config = require("./toolkitconfig.json")

const rl =
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

if (config.server.host == null) {

}

if (config.database.enabled) {
    console.log("Connecting to database...");

    console.log("====================================");
}

console.log("Options:");
console.log("1. Index data");


rl.question("What would you like to do? ", function(name) {
    console.log("Hello " + name + "!")
    rl.close()
});