import { init, dispatch } from "@rematch/core";
describe("testing effects in questions model", () => {
    it("reducer: fetch list of questions with params", () => { 
        const categories = require("../../src/configurations/store/models/questions").default;
        const store = init({
          models: { categories }
        });
    });
});