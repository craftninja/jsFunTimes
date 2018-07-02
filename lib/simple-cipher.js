const letters = 'abcdefghijklmnopqrstuvwxyz';

class Cipher {
  constructor(key) {
    if (
      key === '' ||
      (key && (key.toUpperCase() === key || /^\d+$/.test(key)))
    ) {
      throw Error('Bad key');
    }
    this.key = key || this.generateRandomKey();
  }

  encode(text) {
    let characters = text.split('');
    let encodedChars = characters.map(function(character, index) {
      var newIndex =
        letters.indexOf(character) +
        letters.indexOf(this.key[index % this.key.length]);
      if (newIndex >= letters.length) {
        newIndex -= letters.length;
      }
      return letters[newIndex];
    }, this);
    return encodedChars.join('');
  }

  decode(text) {
    let characters = text.split('');
    let decodeChars = characters.map(function(character, index) {
      var newIndex =
        letters.indexOf(character) -
        letters.indexOf(this.key[index % this.key.length]);
      if (newIndex < 0) {
        newIndex += letters.length;
      }
      return letters[newIndex];
    }, this);
    return decodeChars.join('');
  }

  generateRandomKey() {
    return Array(100)
      .fill(0)
      .map(_ => {
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');
  }
}

module.exports = Cipher;
