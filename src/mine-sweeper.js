const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 function minesweeper(matrix) {
  let resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    resultMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let value = 0;
      if (i === 0) {
        if (j === 0) {
          if (matrix[i][j+1]) value++;
          if (matrix[i+1][j+1]) value++;
          if (matrix[i+1][j]) value++;
        } else if (j < matrix[i].length - 1 && j > 0) {
          if (matrix[i][j+1]) value++;
          if (matrix[i][j-1]) value++;
          if (matrix[i+1][j+1]) value++;
          if (matrix[i+1][j]) value++;
          if (matrix[i+1][j-1]) value++;
        } else if (j === matrix[i].length - 1) {
          if (matrix[i][j-1]) value++;
          if (matrix[i+1][j]) value++;
          if (matrix[i+1][j-1]) value++;
        }
      } else if (i < matrix.length - 1 && i > 0) {
        if (j === 0) {
          if (matrix[i][j+1]) value++;
          if (matrix[i+1][j+1]) value++;
          if (matrix[i+1][j]) value++;
          if (matrix[i-1][j+1]) value++;
          if (matrix[i-1][j]) value++;
        } else if (j < matrix[i].length - 1 && j > 0) {
          if (matrix[i][j+1]) value++;
          if (matrix[i][j-1]) value++;
          if (matrix[i+1][j+1]) value++;
          if (matrix[i+1][j]) value++;
          if (matrix[i+1][j-1]) value++;
          if (matrix[i-1][j+1]) value++;
          if (matrix[i-1][j]) value++;
          if (matrix[i-1][j-1]) value++;
        } else if (j === matrix[i].length - 1) {
          if (matrix[i][j-1]) value++;
          if (matrix[i+1][j]) value++;
          if (matrix[i+1][j-1]) value++;
          if (matrix[i-1][j]) value++;
          if (matrix[i-1][j-1]) value++;
        }
      } else if (i === matrix.length - 1) {
        if (j === 0) {
          if (matrix[i][j+1]) value++;
          if (matrix[i-1][j+1]) value++;
          if (matrix[i-1][j]) value++;
        } else if (j < matrix[i].length - 1 && j > 0) {
          if (matrix[i][j+1]) value++;
          if (matrix[i][j-1]) value++;
          if (matrix[i-1][j+1]) value++;
          if (matrix[i-1][j]) value++;
          if (matrix[i-1][j-1]) value++;
        } else if (j === matrix[i].length - 1) {
          if (matrix[i][j-1]) value++;
          if (matrix[i-1][j]) value++;
          if (matrix[i-1][j-1]) value++;
        }
      }
      resultMatrix[i].push(value);
      value = 0;
    }
  }
  return resultMatrix;
}


module.exports = {
  minesweeper
};

/*
function minesweeper(matrix) {
  let resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    resultMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let checkLine = 0;
      switch (j) {
        case 0:
          if (matrix[i][j + 1]) checkLine++;
          break;
        case 1:
          if (matrix[i][j + 1]) checkLine++;
          if (matrix[i][j - 1]) checkLine++;
          break;
        case 2:
          if (matrix[i][j - 1]) checkLine++;
          break;
      }
      let checkCol = 0;
      let checkDiag = 0;
      switch (i) {
        case 0:
          if (matrix[i+1][j]) checkCol++;
          switch (j) {
            case 0:
              if (matrix[i+1][j + 1]) checkDiag++;
              break;
            case 1:
              if (matrix[i+1][j + 1]) checkDiag++;
              if (matrix[i+1][j - 1]) checkDiag++;
              break;
            case 2:
              if (matrix[i+1][j - 1]) checkDiag++;
              break;
          }
          break;
        case 1:
          if (matrix[i + 1][j]) checkCol++;
          switch (j) {
            case 0:
              if (matrix[i+1][j + 1]) checkDiag++;
              break;
            case 1:
              if (matrix[i+1][j + 1]) checkDiag++;
              if (matrix[i+1][j - 1]) checkDiag++;
              break;
            case 2:
              if (matrix[i+1][j - 1]) checkDiag++;
              break;
          }
          if (matrix[i - 1][j]) checkCol++;
          switch (j) {
            case 0:
              if (matrix[i-1][j + 1]) checkDiag++;
              break;
            case 1:
              if (matrix[i-1][j + 1]) checkDiag++;
              if (matrix[i-1][j - 1]) checkDiag++;
              break;
            case 2:
              if (matrix[i-1][j - 1]) checkDiag++;
              break;
          }
          break;
        case 2:
          if (matrix[i - 1][j]) checkCol++;
          switch (j) {
            case 0:
              if (matrix[i-1][j + 1]) checkDiag++;
              break;
            case 1:
              if (matrix[i-1][j + 1]) checkDiag++;
              if (matrix[i-1][j - 1]) checkDiag++;
              break;
            case 2:
              if (matrix[i-1][j - 1]) checkDiag++;
              break;
          }
          break;
      }
      resultMatrix[i].push(checkLine + checkCol + checkDiag);
    }
  }
  return resultMatrix;
}
*/