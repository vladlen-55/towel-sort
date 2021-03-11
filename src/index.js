
// You should implement your task here.

module.exports = function towelSort (matrix) { 
  if (matrix) {
    let out = [];
    for (let row = 0; row < matrix.length; row++) {
      if (row % 2 == 0) { 
        for (let item = 0; item < matrix[row].length; item++) {
          out.push(matrix[row][item]);
        }
      } else {
        for (let item = matrix[row].length - 1; item >= 0; item--) {
          out.push(matrix[row][item]);
        }
      }
    }
    
    return out;

  } else {
      return [];
  }
};
