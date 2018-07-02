class Bob {
  hey(text) {
    text = text.trim();
    if (/^\s*$/.test(text)) return 'Fine. Be that way!';
    if (this.isforcefulQuestion(text))
      return "Calm down, I know what I'm doing!";
    if (this.isShouting(text)) return 'Whoa, chill out!';
    if (this.isQuestion(text)) return 'Sure.';
    else return 'Whatever.';
  }
  isforcefulQuestion(text) {
    return this.isShouting(text) && this.isQuestion(text);
  }
  isShouting(text) {
    return text.toUpperCase() === text && text.toLowerCase() !== text;
  }
  isQuestion(text) {
    return text[text.length - 1] === '?';
  }
}

module.exports = Bob;
