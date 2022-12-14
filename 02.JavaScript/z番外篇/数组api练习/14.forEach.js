// forEach()：对数组进行遍历循环，对数组中每一项运行给定函数，参数都是function类型，默认有传参，参数分别为：遍历数组内容、对应的数组索引、数组本身。没有返回值
const arr = [1, 2, 3, 4, 5]
arr.forEach(function (item, index, a) {
    console.log(item + '|' + index + '|' + a)
})
// 1 | 0 | 1, 2, 3, 4, 5
// 2 | 1 | 1, 2, 3, 4, 5
// 3 | 2 | 1, 2, 3, 4, 5
// 4 | 3 | 1, 2, 3, 4, 5
// 5 | 4 | 1, 2, 3, 4, 5