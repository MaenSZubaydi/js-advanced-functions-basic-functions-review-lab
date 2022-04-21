// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highlight='*'){
    let innerFunction = function(adjective){
        return `You are ${highlight}${adjective}${highlight}!`;
    }
    return innerFunction;
}



/**
 *  describe("defines an object called Calculator", function() {
    it("has a JavaScript Object called Calculator as a local variable", function() {
      expect(Calculator).to.be.a('object')
    })

    describe("that has a function called add", function() {
      it("Calculator.add exists", function() {
        expect(Calculator.add).to.exist
      })

      it("calculates 1 + 3", function() {
        expect(Calculator.add(1,3)).to.equal(4)
      })
    })

    describe("that has a function called subtract", function() {
      it("Calculator.subtract exists", function() {
        expect(Calculator.subtract).to.exist
      })

      it("calculates 1 - 3", function() {
        expect(Calculator.subtract(1,3)).to.equal(-2)
      })
    })

    describe("that has a function called multiply", function() {
      it("Calculator.multiply exists", function() {
        expect(Calculator.multiply).to.exist
      })

      it("calculates 1 * 3", function() {
        expect(Calculator.multiply(1,3)).to.equal(3)
      })
    })

    describe("that has a function called divide", function() {
      it("Calculator.divide exists", function() {
        expect(Calculator.divide).to.exist
      })

      it("calculates 10 / 5", function() {
        expect(Calculator.divide(10,5)).to.equal(2)
      })
    })
  })
 */