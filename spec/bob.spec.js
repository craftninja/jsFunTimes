const Bob = require('../lib/bob');

describe('Bob', function() {
  let bob = new Bob();

  it('stating something', function() {
    const result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('shouting', function() {
    const result = bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting gibberish', function() {
    const result = bob.hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('asking a question', function() {
    const result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  it('asking a numeric question', function() {
    const result = bob.hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });

  it('asking gibberish', function() {
    const result = bob.hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });

  it('talking forcefully', function() {
    const result = bob.hey("Let's go make out behind the gym!");
    expect(result).toEqual('Whatever.');
  });

  it('using acronyms in regular speech', function() {
    const result = bob.hey("It's OK if you don't want to go to the DMV.");
    expect(result).toEqual('Whatever.');
  });

  it('forceful questions', function() {
    const result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual("Calm down, I know what I'm doing!");
  });

  it('shouting numbers', function() {
    const result = bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('only numbers', function() {
    const result = bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  it('question with only numbers', function() {
    const result = bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('shouting with special characters', function() {
    const result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting with no exclamation mark', function() {
    const result = bob.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('statement containing question mark', function() {
    const result = bob.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('prattling on', function() {
    const result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('silence', function() {
    const result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('prolonged silence', function() {
    var result = bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('alternate silence', function() {
    var result = bob.hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('multiple line question', function() {
    var result = bob.hey('\nDoes this cryogenic chamber make me look fat?\nno');
    expect(result).toEqual('Whatever.');
  });

  it('starting with whitespace', function() {
    var result = bob.hey('         hmmmmmmm...');
    expect(result).toEqual('Whatever.');
  });

  it('ending with whitespace', function() {
    var result = bob.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).toEqual('Sure.');
  });

  it('other whitespace', function() {
    var result = bob.hey('\n\r \t');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('non-question ending with whitespace', function() {
    var result = bob.hey('This is a statement ending with whitespace      ');
    expect(result).toEqual('Whatever.');
  });
});
