const Reader = require("./../lib/utils/Reader");
const ExplorerService = require('./../lib/services/ExplorerService')



describe('Tests for ExplorerService', () =>{
  
  test('1. Get all explorers in node', () =>{
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");

    expect(explorersInNode[0].name).toBe('Woopa1')
  });

  test('2. Get number of explorers in node', () =>{
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");

    expect(explorersInNode.length).toBe(10)
  });

  test('3. Get number of explorers in node', () =>{
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");

    expect(explorersInNode.length).toBe(10)
  });

})