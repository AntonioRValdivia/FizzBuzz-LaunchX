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

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const applyValidationInNumber = ExplorerController.applyValidationInNumber(score);

    response.json({score: request.params.score, trick: applyValidationInNumber});
});
    
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});