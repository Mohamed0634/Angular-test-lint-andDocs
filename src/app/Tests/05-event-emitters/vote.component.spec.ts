import { VoteComponent } from "./vote.component";

describe("VoteComponent", () => {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it("should raise voteChanged event when upvoted", () => {
        let totalVotes = null;
        component.voteChanged.subscribe(v => (totalVotes = v));

        component.upVote();

        // expect(totalVotes).not.toBeNull();
        expect(totalVotes).toBe(1);
    });
});
