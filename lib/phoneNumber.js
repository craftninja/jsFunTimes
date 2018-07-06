class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = null;
    if (/^[0-9-.+() ]*$/.test(phoneNumber)) {
      let cleanedNumber = phoneNumber.replace(/\D/g, '');
      if (cleanedNumber.length === 10) {
        this.phoneNumber = cleanedNumber;
      }
      else if (cleanedNumber.length === 11 && cleanedNumber[0] === '1') {
        this.phoneNumber = cleanedNumber.substr(1);
      }
      if (this.phoneNumber && (!/[2-9]/.test(this.phoneNumber[0]) || !/[2-9]/.test(this.phoneNumber[3]))) {
        this.phoneNumber = null;
      }
    }
  }
  number() {
    return this.phoneNumber;
  }
}

module.exports = PhoneNumber;