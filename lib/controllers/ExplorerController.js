const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
// const FizzBuzzService = require("./../services/FizzBuzzService");

class ExplorerController {
    static getExplorersByMission(mission){
        let explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission){
        let explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmonutByMission(mission){
        let explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
}

module.exports = ExplorerController;