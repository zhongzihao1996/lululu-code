
// 将第一个元素看成一个有序序列，其他元素看成一个无序序列
// 取出无序序列耳朵第一个元素，与有序序列从尾向前依次比较，若重复步骤2，直至无序序列全部比较完

/** 插入排序
 * 
 * @param {*} list 
 */
const insertSort = (list) => {
  const len = list.length;
  let temp;
  // 从第2项开始  
  for (let i = 1; i < len; i++) {
    // 记录第一项
    temp = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > temp) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = temp;
  }
  return list;
};

const data = require('./data');
console.log(data);
console.log(insertSort(data));
