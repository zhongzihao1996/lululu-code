/** 堆排序
 * 
 * @param {*} list 
 */
// 索引从 0 开始
// 索引为 i 的左孩子索引为 2i + 1 
// 索引为 i 的右孩子索引为 2i + 2 
// 索引为 i 的父节点为 floot((i-1)/2)
const heapSort = (list) => {
  let len = list.length;
  // 构建最大顶堆
  for (let i = Math.floor((len - 1 - 1) / 2); i >= 0; i--) {
    maxHeadDown(list, i, len - 1);
  }
  for (let i = len - 1; i >= 0; i--) {
    // 首尾交换
    swap(list, 0, i);
    // 最大值已沉底，对剩余 n-1 继续构建最大堆
    maxHeadDown(list, 0, i - 1);
  }
  return list;
};

// 从 start 节点开始，不断沉底，若子节点比父节点大，交换后，继续对该节点沉底
const maxHeadDown = (list, start, end) => {
  let parent = start;
  let son = parent * 2 + 1; // 左子节点
  while (son <= end) {
    // 如果有右子节点，比较
    if (son + 1 <= end && list[son + 1] > list[son]) {
      son++;
    }
    if (list[son] > list[parent]) {
      swap(list, parent, son);
      parent = son;
      son = parent * 2 + 1;
    } else {
      return;
    }
  }
};

const swap = (list, i, j) => {
  [list[i], list[j]] = [list[j], list[i]];
};

const data = require('./data');
console.log(data);
console.log(heapSort(data));