class ExplorerService {
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.map((explorer) => explorer.githubUsername);
    } 
}

module.exports = ExplorerService;