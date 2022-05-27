const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");

const explorers = Reader.readJsonFile("explorers.json");



describe("Tests for ExplorerService", () =>{
  
    test("1. Get all explorers in node", () =>{
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");

        expect(explorersInNode[0].name).toBe("Woopa1");
    });

    test("2. Get number of explorers in node", () =>{
        const AmountexplorersInJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java");

        expect(AmountexplorersInJava).toBe(5);
    });

    test("3. Get explorers usernames", () =>{
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(explorersUsernames[1]).toBe("ajolonauta2");
    });

});