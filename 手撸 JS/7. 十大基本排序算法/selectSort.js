
// 首先在未排序序列中找到最小元素，存放到排序序列的起始位置
// 再从剩余未排序元素中继续寻找最小元素，然后放到已排序序列的末尾
// 重复第二步，直到所有元素均排序完毕

/** 选择排序
 * 
 * @param {*} list 
 */
const selectSort = (list) => {
  const len = list.length;
  let min_index; // 最小值索引
  for (let i = 0; i < len - 1; i++) {
    min_index = i; // 从 0 开始
    for (let j = i + 1; j < len; j++) {
      if (list[min_index] > list[j]) {
        min_index = j;
      }
    }
    [list[i], list[min_index]] = [list[min_index], list[i]];
  }
  return list;
};

const data = require('./data');
console.log(data);
console.log(selectSort(data));
