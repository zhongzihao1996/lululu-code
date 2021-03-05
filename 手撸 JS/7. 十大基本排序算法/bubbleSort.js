
// 比较相邻的元素，如果第一个比第二个大，就交换它们两个；
// 依次比较相邻的元素，直到数组元素比较完成，那么这时，最大的元素就应该在数组的最后面；
// 不断重复 1 和 2 的操作

/** 冒泡排序
 *
 * @param {*} list
 */
const bubbleSort = (list) => {
  const len = list.length;
  let k = len - 1;
  let last_index = 0; // 最后一次交换的位置
  for (let i = 0; i < len - 1; i++) {
    let is_change = false; // 本地循环是否有交换
    for (let j = 0; j < k; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        is_change = true;
        last_index = j;
      }
    }
    k = last_index;
    if (!is_change) break;
  }
  return list;
};

const data = require('./data');
console.log(data);
console.log(bubbleSort(data));
