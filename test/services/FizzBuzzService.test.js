const FizzBuzzService = require("../../lib/services/FizzBuzzService");

describe("Tests for FizzBuzzService", () =>{

    test("1. Testing to give 1", () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        FizzBuzzService.applyValidationInExplorer(explorer1);

        expect(explorer1.trick).toBe(1);
    });

    test("2. Testing FIZZ", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        FizzBuzzService.applyValidationInExplorer(explorer3);

        expect(explorer3.trick).toBe("FIZZ");
    });

    test("3. Testing BUZZ", () =>{
        const explorer5 = {name: "Explorer5", score: 5};
        FizzBuzzService.applyValidationInExplorer(explorer5);

        expect(explorer5.trick).toBe("BUZZ");
    });

    test("4. Testing FIZZBUZZ", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        FizzBuzzService.applyValidationInExplorer(explorer15);

        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
});