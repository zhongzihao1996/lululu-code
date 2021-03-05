
// 归并排序是建立在归并操作上的一种有效的排序算法，该算法是采用分治法的一个非常典型的应用。
// 将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。归并排序是一种稳定的排序方法。

/** 归并排序
 *
 * @param {*} list
 */
const mergerSort = (list) => {
  const len = list.length;
  // 最小颗粒度为1时处理
  if (len <= 1) return list;
  // 将数组切割为左、右两个数组
  const middle_index = Math.floor(len / 2);
  const left_list = list.slice(0, middle_index);
  const right_list = list.slice(middle_index);
  // 分治
  return merge(mergerSort(left_list), mergerSort(right_list));
};

const merge = (left_list, right_list) => {
  const result = new Array(left_list.length + right_list.length);
  let k = 0; // 新数组指针
  let lt = 0; // 左数组指针
  let rt = 0; // 右数组指针
  // 不断比较左右数组，小的塞入新数组里
  while (lt < left_list.length && rt < right_list.length) {
    // 左边比右边小
    if (left_list[lt] <= right_list[rt]) {
      result[k++] = left_list[lt++];
    } else {
      result[k++] = right_list[rt++];
    }
  }

  // 左右数组剩余的 push 进新数组
  while (lt < left_list.length) {
    result[k++] = left_list[lt++];
  }
  while (rt < right_list.length) {
    result[k++] = right_list[rt++];
  }

  return result;
};

const data = require('./data');
console.log(data);
console.log(mergerSort(data));
