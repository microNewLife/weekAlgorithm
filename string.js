// function getListWordLength(s) {
//     let returnlength = 0;
//     let tempLenth = 0;
//     for (let i in s) {
//         if (s[i] !== ' ') {
//             tempLenth++
//         } else {
//             returnlength = tempLenth || returnlength;
//             tempLenth = 0;
//         }
//     }
//     return tempLenth == 0 ? returnlength : tempLenth;
// }


// function getTarget(str) {
//     str = str.trim(); 
//     return str.length - str.lastIndexOf(" ") - 1;
// }

// const tests = [
//     'hello world',
//     'who am       i   ',
//     '   fly   me     to     the moon   ',
//     'luffy is still joyboy'
// ]
// tests.map(s => {
//     console.log(s, getTarget(s))
// })


function getMaxWord(str) {
    // return (str.trim().replace(/ +/ig, '-').split('-').sort((a, b) => b.length - a.length))[0];
    // return (str.trim().split(' ').filter((ele) => ele).sort((a, b) => b.length - a.length))[0];
    return str.trim().split(' ').reverse()[0].length;
}
const testArr = [
    'adasd adasdaswqe qewqweqw ffdfd gfdgdgdf',
    'asdasdasd  adasda adasdafegeg hhh     yhrh   ht ',
    '  adad d   fsdfds  ffd g dfgdgdfgd  dg dfg d',
]
testArr.forEach((ele) => {
    console.log(getMaxWord(ele));
})
