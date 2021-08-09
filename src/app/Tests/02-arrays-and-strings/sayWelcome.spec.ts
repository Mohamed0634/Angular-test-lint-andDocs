import { SayWelcome } from "./sayWelcome";

xdescribe("SayWelcome", () => {
    it("should include the name in the message", () => {
        expect(SayWelcome("Mohamed")).toContain("Mohamed");
    });
});
