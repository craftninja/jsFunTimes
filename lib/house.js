function house(h = 3, w = h) {
  return (getTop(h, w) + getBase(h, w));
}

const getBase = (h, w) => {
  const totalWidth = w + 2;
  base = [];
  for (i = 0; i < h; i++) {
    base[i] = getBaseRow(i, h, w);
  }
  return gerArrayText(base, totalWidth);
};

const gerArrayText = (array, totalWidth) => {
  let arrayText = "";
  array.forEach(r => {
    arrayText += "\n";
    for (i = 0; i < totalWidth && r[i] !== '#'; i++) {
      arrayText += r[i] = r[i] ? r[i] : " ";
    }
  });
  return arrayText;
}

const getBaseRow = (r, h, w) => {
  const totalWidth = w + 2;
  const halfWidth = parseInt(totalWidth / 2);
  let row = new Array(totalWidth);
  row[0] = '|';
  row[totalWidth - 1] = '|';
  if (w > 2 && h > 1) {
    if (r === 0 && h === 2) {
      row[halfWidth] = '_';
    }
    else if (r === h - 3) {
      row[halfWidth] = '_';
    }
    else if (r > h - 3) {
      row[halfWidth - 1] = '|';
      row[halfWidth + 1] = '|';
    }
  }
  if (r === h - 1 && w < 3) {
    for (i = 1; i < totalWidth - 1; i++) {
      row[i] = '_';
    }
  }
  else if (r === h - 1 && w > 4) {
    for (i = 1; i < totalWidth - 1; i++) {
      if (i < halfWidth - 1 || i > halfWidth + 1) {
        row[i] = '_';
      }
    }
  }
  if (h > 4 && w > 9) {
    if (r === h - 4) {
      row[halfWidth - 4] = row[halfWidth + 1] = '|';
      row[halfWidth - 3] = row[halfWidth + 2] = '_';
      row[halfWidth - 2] = row[halfWidth + 3] = '|';
    }
    else if (r === h - 5) {
      row[halfWidth - 3] = row[halfWidth + 2] = '_';
    }
  }
  return row;
};

const getTop = (h, w) => {
  const totalWidth = w + 2;
  const totalHeight = parseInt((totalWidth + 1) / 2);
  top = [];
  for (i = 0; i < totalHeight; i++) {
    top[i] = getTopRow(i, totalHeight, totalWidth);
  }
  return gerArrayText(top, totalWidth);
}

const getTopRow = (r, totalHeight, totalWidth) => {
  let row = new Array(totalWidth);
  if (r === 0 && totalWidth % 2 === 1) {
    row[totalHeight - 1] = '^';
    row[totalHeight] = '#';
  }
  else {
    row[totalHeight - 1 - r] = '/';
    const lastIndex = totalHeight + r - (totalWidth % 2 === 0 ? 0 : 1);
    row[lastIndex] = '\\';
    if (lastIndex < totalWidth - 1) {
      row[lastIndex + 1] = '#';
    }
  }
  return row;
}

module.exports = house;