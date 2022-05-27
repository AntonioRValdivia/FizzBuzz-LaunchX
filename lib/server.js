const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const getExplorersAmonutByMission = ExplorerController.getExplorersAmonutByMission(mission);

    response.json({mission: request.params.mission, quantity: getExplorersAmonutByMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const getExplorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);

    response.json({mission: request.params.mission, usernames: getExplorersUsernamesByMission});
});
    
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});