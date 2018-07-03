class Binary
{
    constructor(binaryNumber)
    {
        this.binaryNumToCheck = binaryNumber
    }    
    toDecimal()
    {
        var regExp = /^[10]+$/;
        if(this.binaryNumToCheck.search(regExp) != -1) {
            return parseInt(this.binaryNumToCheck, 2);
        }
        else {
            return 0;
        }   
    }
    
}
module.exports = Binary;