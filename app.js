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
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

// const assignFizzTrick = function(explorer){
//     if(explorer.score%3 === 0){
//         explorer.trick = "FIZZ";
//         return explorer;
//     }else{
//         explorer.trick = explorer.score;
//         return explorer;
//     }
// };

// const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));

// // Part 6: Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score
// //
// const assignBuzzTrick = function(explorer){
//     if(explorer.score%5 === 0){
//         explorer.trick = "BUZZ";
//         return explorer;
//     }else{
//         explorer.trick = explorer.score;
//         return explorer;
//     }
// };

// const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));

// //Part7: Get a new list of explorers in Node, if the score number is divisible by 3 AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be the same score value

// const assignFizzBuzzTrick = function(explorer){
//     if(explorer.score%5 === 0 && explorer.score%3 === 0){
//         explorer.trick = "FIZZBUZZ";
//         return explorer;
//     }else{
//         explorer.trick = explorer.score;
//         return explorer;
//     }
// };

// const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));

// // Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
