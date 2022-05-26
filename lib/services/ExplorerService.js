class ExplorerService {
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.map((explorer) => explorer.githubUsername);
    } 
}

module.exports = ExplorerService;