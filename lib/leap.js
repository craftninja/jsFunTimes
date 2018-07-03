class Year
{
    constructor(year)
    {
        this.yearToCheck = year
    }
    isLeap()
    {
        return ((this.yearToCheck % 4 == 0) && (this.yearToCheck % 100 != 0)) || (this.yearToCheck % 400 == 0);
    }
}
module.exports = Year;