import { init, dispatch } from "@rematch/core";
describe("testing effects in categories model", () => {
    it("reducer: fetch list of categories with params", async () => { 
        const categories = require("../../src/configurations/store/models/categories").default;
        const store = init({
          models: { categories }
        });

        await dispatch.categories.asyncfillCategories();

        const todoItem = store.getState().todos.reverse()[0];
        expect(categories.listOfCategories).toBe("testAsync");
        
    });
});