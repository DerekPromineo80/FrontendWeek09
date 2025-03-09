/* Week 9 Extra Credit Attempt */

/* Mocha and Chai test */

let expect = chai.expect;

describe("Number of Round", () => {

    it("should see if the round is equal to 1", function(done) {
        let testRound = this.round;
        console.log("Here is my round: ", testRound);
      
        expect(testRound).to.equal(1);
        done;
    
    });

});
