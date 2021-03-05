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
  for (let i = Math.floor((len - 1 - 1) / 2); i >= 0; i--) {
    // 构建最大顶堆
    maxHeadDown(list, i, len - 1);
  }
  for (let i = len - 1; i >= 0; i--) {
    swap(list, 0, i);
    len--;
    // 最大对不断沉底
    maxHeadDown(list, 0, len);
  }

  return list;
};

const maxHeadDown = (list, i, len) => {
  let left = i * 2 + 1; // 左子节点
  let ritght = i * 2 + 2; // 右子节点
  let largest = i;

  // 孩子节点比父节点大，交换
  if (left < len && list[left] > list[largest]) {
    largest = left;
  }
  if (ritght < len && list[ritght] > list[largest]) {
    largest = ritght;
  }

  if (largest !== i) {
    swap(list, i, largest);
    maxHeadDown(list, largest, len);
  }
};

const swap = (list, i, j) => {
  [list[i], list[j]] = [list[j], list[i]];
};

const data = require('./data');
console.log(data);
console.log(heapSort(data));
