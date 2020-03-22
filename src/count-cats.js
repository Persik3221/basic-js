module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((item)=>{
    item.forEach((item1)=>{
      if (item1 == '^^') count++;
    })
  })
  return count;
};
