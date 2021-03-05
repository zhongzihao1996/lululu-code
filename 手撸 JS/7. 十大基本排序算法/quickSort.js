
// 从数列中挑出一个元素，称为"基准"（pivot）
// 重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
// 递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。

/** 快速排序
 *
 * @param {*} list
 */
const quickSort = (list) => {
  if (list.length <= 1) return list;
  // 基准
  const basic_index = Math.floor(list.length / 2);
  const basic = list.splice(basic_index, 1);
  const left_list = [];
  const right_list = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] <= basic) {
      left_list.push(list[i]);
    } else {
      right_list.push(list[i]);
    }
  }

  // 递归
  return quickSort(left_list).concat(basic, quickSort(right_list));
};

const data = quickSort('./data');
console.log(data);
console.log(mergerSort(data));
