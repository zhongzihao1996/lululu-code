
/** 任意时刻时针与分针的夹角
 * 
 * @param {*} h 
 * @param {*} m 
 */
const angle = (h, m) => {
  if (h >= 24 || m >= 60) return 0;
  let num1 = h % 12 * 30 + m * 0.5;
  let num2 = m * 6;
  return Math.abs(num1 - num2);
};


console.log(angle(0, 0)); // 0
console.log(angle(9, 30)); // 105