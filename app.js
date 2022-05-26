const Reader = require("./lib/utils/Reader");
const ExplorerService = require('./lib/services/ExplorerService')
const FizzBuzzService = require('./lib/services/FizzBuzzService')


// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo


// Part 2: Get the explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers, "node");



// Part 3: Get the quantity of explorers names in node
const getAmountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");


// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new property called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Score: 3, Trick: FIZZ.
// Score: 4, Trick: 4.
// Score: 5, Trick: 5.

const explorer1 = {name: "Explorer1", score: 1}
FizzBuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzBuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
FizzBuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
FizzBuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

