function house(h = 3, w = h) {
  return getTop(h, w) + getBase(h, w);
}

const getBase = (h, w) => {
  const totalWidth = w + 2;
  base = new Array(h, totalWidth);
  for (i = 0; i < h; i++) {
    base[i] = getBaseRow(i, h, w);
  }
  let baseText = '';
  base.forEach(r => {
    baseText += "\n";
    for (i = 0; i < totalWidth; i++) {
      baseText += r[i] = r[i] ? r[i] : " ";
    }
  });
  return baseText;
};

const getBaseRow = (r, h, w) => {
  const totalWidth = w + 2;
  let row = new Array(totalWidth);
  row[0] = '|';
  row[totalWidth - 1] = '|';
  if (w > 2 && h > 1) {
    if (r === 0 && h === 2) {
      row[parseInt(totalWidth / 2)] = '_';
    }
    else if (r === h - 3) {
      row[parseInt(totalWidth / 2)] = '_';
    }
    else if (r > h - 3) {
      row[parseInt(totalWidth / 2) - 1] = '|';
      row[parseInt(totalWidth / 2) + 1] = '|';
    }
  }
  if (r === h - 1 && w < 3) {
    for (i = 1; i < totalWidth - 1; i++) {
      row[i] = '_';
    }
  }
  else if (r === h - 1 && w > 4) {
    for (i = 1; i < totalWidth - 1; i++) {
      if (i < parseInt(totalWidth / 2) - 1 || i > parseInt(totalWidth / 2) + 1) {
        row[i] = '_';
      }
    }
  }
  if (h > 4 && w > 9) {
    if (r === h - 4) {
      row[parseInt(totalWidth / 2) - 4] = row[parseInt(totalWidth / 2) + 1] = '|';
      row[parseInt(totalWidth / 2) - 3] = row[parseInt(totalWidth / 2) + 2] = '_';
      row[parseInt(totalWidth / 2) - 2] = row[parseInt(totalWidth / 2) + 3] = '|';
    }
    else if (r === h - 5) {
      row[parseInt(totalWidth / 2) - 3] = row[parseInt(totalWidth / 2) + 2] = '_';
    }
  }
  return row;
};

const getTop = (h, w) => {
  const totalWidth = w + 3;
  const totalHeight = parseInt(totalWidth / 2);
  top = new Array(totalHeight, totalWidth);
  for (i = 0; i < totalHeight; i++) {
    top[i] = getTopRow(i, totalHeight, totalWidth);
  }
  let topText = '';
  top.forEach(r => {
    topText += "\n";
    for (i = 0; i < totalWidth; i++) {
      topText += r[i] = r[i] ? r[i] : " ";
    }
  });
  return topText;
}

const getTopRow = (r, totalHeight, totalWidth) => {
  let row = new Array(totalWidth);
  if (r === 0 && totalWidth % 2 === 0) {
    row[totalHeight - 1] = '^';
  }
  else {
    row[totalHeight - 1 - r] = '/';
    row[totalHeight + r - (totalWidth % 2 === 0 ? 1 : 0)]
      // = row[totalHeight + r + (totalWidth % 2 === 0 ? 0 : 1)]
      = '\\';
  }
  return row;
}

module.exports = house;