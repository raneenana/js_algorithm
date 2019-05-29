/**
 * 
 * @param {Array} lefts 左括号的索引集合 
 * @param {*} rights 右括号的索引集合
 */
function exec(lefts, rights) {
  const all = lefts.concat(rights);
  const execRes = [];
  lefts.forEach(left => {
    let rightIndex = rights.findIndex(right => {
      let leftNum = findNumsAtSection(left, right, lefts);
      let rightNum = findNumsAtSection(left, right, rights);
      let result = findNumsAtSection(left, right, all)
      return isOdd(result) && (leftNum === rightNum);
    });
    let right = rights[rightIndex];
    rights.splice(rightIndex, 1);
    execRes.push({ left, right });
  });
  return execRes;
}

function findNumsAtSection(start, end, arr) {
  let all = 0;
  arr.forEach(item => {
    if (item < end && item > start) {
      all++;
    }
  });
  return all;
}
function isOdd(num) {
  return num % 2 === 0;
}

// const str = '[[],[],[]][]'
const str = '[o[j]][]w[[]]fo'
console.log(exec([0, 2, 6, 9, 10], [4, 5, 7, 11, 12]));
// console.log(exec([0,1,4,7,10], [2,5,8,9,11]));
