class BeerSong {
  verse(bottle) {
    switch (bottle) {
      case 2:
        return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
      case 1:
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
      case 0:
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
      default:
        return `${bottle.toString()} bottles of beer on the wall, ${bottle.toString()} bottles of beer.\nTake one down and pass it around, ${(
          bottle - 1
        ).toString()} bottles of beer on the wall.\n`;
    }
  }

  sing(start, end = 0) {
    let song = [];
    while (start >= end) {
      song.push(this.verse(start));
      start--;
    }
    return song.join('\n');
  }
}
module.exports = BeerSong;
