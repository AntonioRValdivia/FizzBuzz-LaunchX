const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests for Explorer Controller", () =>{

    test("1. Get the list of explorers in node", () =>{
        const explorersInNode = ExplorerController.getExplorersByMission("node");

        expect(explorersInNode[0].name).toBe("Woopa1");
    });

    test("2. Get explorers usernames", () =>{
        const explorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");

        expect(explorersUsernames[1]).toBe("ajolonauta2");
    });

    test("3. Get number of explorers in java", () =>{
        const AmountOfexplorersInJava = ExplorerController.getExplorersAmonutByMission("java");

        expect(AmountOfexplorersInJava).toBe(5);
    });

    test("4. Testing FIZZBUZZ", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        ExplorerController.applyValidationInExplorer(explorer15);

        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
  
});