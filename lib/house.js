function house(_height = 3, _width = null) {
  const height = _height;
  const width = _width || _height;

  const wallGrid = Array(height)
    .fill(0)
    .map(() => Array(width + 2).fill(0));

  return '\n' + build();

  function build() {
    const roof = makeRoof();
    const roofStr = draw(roof);
    makeSideWall();
    makeFloor();
    const basement = draw(wallGrid);
    const house = [roofStr, basement].join('\n');
    return house;
  }

  function makeRoof() {
    const needRoofJoin = width % 2 !== 0;
    const heightOfRoof = Math.floor(width / 2) + 1 + (needRoofJoin ? 1 : 0);
    let roof = Array(heightOfRoof)
      .fill(0)
      .map(() => Array(width + 3).fill(0));
    for (let y = 0; y < heightOfRoof; y++) {
      const xPos = heightOfRoof - 1 - y;
      const xMax = roof[y].length - 1;
      if (needRoofJoin && y === 0) {
        roof[y][xPos] = '^';
        roof[y][xPos + 1] = 'stop';
      } else {
        roof[y][xPos] = '/';
        roof[y][xMax - xPos - 1] = '\\';
        roof[y][xMax - xPos] = 'stop';
      }
    }
    return roof;
  }

  function draw(grid) {
    return grid
      .map((row, index) => {
        let rowStr = '';
        for (let ele of row) {
          if (ele === 'stop') break;
          else rowStr += ele === 0 ? ' ' : ele;
        }
        return rowStr;
      })
      .join('\n');
  }

  function makeSideWall() {
    wallGrid.forEach(row => {
      row[0] = '|';
      row[row.length - 1] = '|';
    });
  }

  function makeFloor() {
    let floor = wallGrid[wallGrid.length - 1];
    if (width >= 3) {
      const doorInfo = makeDoor();
      makeWindow(doorInfo);
      floor.forEach((cell, index) => {
        if (index < doorInfo.startIndex || index > doorInfo.endIndex) {
          floor[index] = cell === 0 ? '_' : cell;
        }
      });
    } else if (width < 3) {
      floor.forEach((cell, index) => {
        floor[index] = cell === 0 ? '_' : cell;
      });
    }
  }

  function makeDoor() {
    const doorStartXIndex = Math.floor((width + 2) / 2) - 1;
    const heightOfDoor = height >= 3 ? 2 : 1;
    const maxYIndex = wallGrid.length - 1;
    let topIndex = null;
    wallGrid[maxYIndex][doorStartXIndex] = '|';
    wallGrid[maxYIndex][doorStartXIndex + 2] = '|';
    if (heightOfDoor > 1) {
      wallGrid[maxYIndex - 1][doorStartXIndex] = '|';
      wallGrid[maxYIndex - 1][doorStartXIndex + 2] = '|';
      wallGrid[maxYIndex - 2][doorStartXIndex + 1] = '_';
      topIndex = maxYIndex - 2;
    } else {
      wallGrid[maxYIndex - 1][doorStartXIndex + 1] = '_';
      topIndex = maxYIndex - 1;
    }
    return {
      startIndex: doorStartXIndex,
      endIndex: doorStartXIndex + 2,
      topIndex
    };
  }

  function makeWindow(doorInfo) {
    if (height >= 5 && width >= 10) {
      // left window
      const leftWindowXIndex = Math.floor(doorInfo.startIndex / 2);
      const bottomYIndex = doorInfo.topIndex - 1;
      wallGrid[bottomYIndex][leftWindowXIndex] = '|';
      wallGrid[bottomYIndex][leftWindowXIndex + 2] = '|';
      wallGrid[bottomYIndex][leftWindowXIndex + 1] = '_';
      wallGrid[bottomYIndex - 1][leftWindowXIndex + 1] = '_';
      //right window
      const rightWindowXIndex = wallGrid[0].length - leftWindowXIndex - 1;
      wallGrid[bottomYIndex][rightWindowXIndex] = '|';
      wallGrid[bottomYIndex][rightWindowXIndex - 2] = '|';
      wallGrid[bottomYIndex][rightWindowXIndex - 1] = '_';
      wallGrid[bottomYIndex - 1][rightWindowXIndex - 1] = '_';
    }
  }
}

module.exports = house;
