/**
 * 
 * @param {string} firstLetter 子传中的第一个字符
 * @param {string} parentStr 父串
 * @returns {Array} 在父串中匹配子串第一个字符的索引集合。
 */
function collectLetterIndex(firstLetter,parentStr){
    const firstLetterIndexs = []
    for(let i = 0; i < parentStr.length; i++){
        if(firstLetter === parentStr[i]){
            firstLetterIndexs.push(i);
        }
    }
    return firstLetterIndexs;
}
/**
 * 
 * @param {*} collectIndex 
 * @param {*} parentStr 
 * @param {*} childStr 
 */
function findFromCollectIndex(collectIndex,parentStr,childStr){
    for(let i = 1; i < childStr.length; i++){
        if(collectIndex + 1 >= parentStr.length){
            return false;
        }
        // console.log(parentStr[collectIndex + i], childStr[i]);
        if(parentStr[collectIndex + i] !== childStr[i]){
            return false;
        }
    }
    return true;
}
function findStr(childStr, parentStr){
    const firstLetterIndexs = collectLetterIndex(childStr[0],parentStr);
    // console.log(firstLetterIndexs);
    for(let i = 0; i < firstLetterIndexs.length; i++){
        const result = findFromCollectIndex(firstLetterIndexs[i],parentStr,childStr);
        if(result){
            return firstLetterIndexs[i];
        }
    }
    return false;
}

const a = '56'
const b = '15656';
console.log(findStr(a,b));
