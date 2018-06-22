
class Binary{
    constructor(number){
        this.binaryNumber=number;
}
toDecimal() {
let decimal =0   
var regex = new RegExp("^[01]+$");
if(regex.test(this.binaryNumber)){
     decimal = parseInt(this.binaryNumber,2);  
}
return decimal;
}
}
module.exports=Binary;