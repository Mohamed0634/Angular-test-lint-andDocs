import { getCurrencies } from "./getCurrencies";

xdescribe("getCurrencies", () => {
    it("Should return the supported currencies", () => {
        const result = getCurrencies();
        expect(result).toContain("USD");
        expect(result).toContain("<AD>");
        expect(result).toContain("EUR");
    });
});
