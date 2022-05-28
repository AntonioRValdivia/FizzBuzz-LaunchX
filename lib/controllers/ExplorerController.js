const ExplorerService = require("./../services/ExplorerService");
const FizzBuzzService = require("./../services/FizzBuzzService");
const Reader = require("./../utils/Reader");


const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController {
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static applyValidationInExplorer(explorer){
        return FizzBuzzService.applyValidationInExplorer(explorer);
    }
    static applyValidationInNumber(number){
        return FizzBuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;