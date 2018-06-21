// Implement your solution following the failing tests.
// Remember Red, Green, Refactor... that is...
// 1. Red: get a test that is FAILING in the way you expect the test to fail. Do the minimum needed to get past the error message.
// 2. Green: Once your test passes, consider a commit to make sure you are "safe" to refactor
// 3. Refactor: With a solid commit on a passing test, feel free to rewrite code to be more:
//    * Human readable
//    * Efficient
//    * Consider abstraction only if it improves the CURRENT situation
//    * Consider DRYing your code once you have duplicate ideas in 3 places
// 4. Delete these comments!
class Year{
    constructor(year){
        this.year = year;
    }

    isLeap(){
        if( (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0 ){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Year
