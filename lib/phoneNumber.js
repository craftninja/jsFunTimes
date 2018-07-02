class PhoneNumber {
  constructor(rawNumber) {
    this.rawNumber = rawNumber.split('');
  }

  number() {
    const skippingChars = this.rawNumber.reduce((newNumber, curChar) => {
      const ascii = curChar.charCodeAt(0);
      if ((ascii >= 48 && ascii <= 57) || ascii === 43) {
        newNumber.push(curChar);
      }
      return newNumber;
    }, []);
    if (skippingChars[0] === '+' && skippingChars.length > 10) {
      skippingChars.shift();
      skippingChars.shift();
    } else if (skippingChars[0] === '1' && skippingChars.length > 10) {
      skippingChars.shift();
    }
    const vaildCodes = number => {
      const ascii = number.charCodeAt(0);
      return ascii >= 50 && ascii <= 57;
    };
    const isVaildAreaCode = vaildCodes(skippingChars[0]);
    const isValidExchangeCode = vaildCodes(skippingChars[3]);
    return skippingChars.length === 10 && isVaildAreaCode && isValidExchangeCode
      ? skippingChars.join('')
      : null;
  }
}

module.exports = PhoneNumber;
