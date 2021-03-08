/** 神拷贝
 *
 * @param {*} obj
 */
function deepClone(obj) {
  const type = Object.prototype.toString.call(obj);
  if (type.includes('Null')) return null;
  if (type.includes('RegExp')) return new RegExp(obj);
  if (type.includes('Date')) return new Date(obj);
  if (typeof obj !== 'object') return obj;

  const cloneObj = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}

const obj = {
  a: undefined,
  b: null,
  c: /\d+/g,
  d: () => {},
  e: 1,
  f: 'hello world',
  g: { name: '小豪' },
  h: [1, 2, 3],
};
const cloneObj = deepClone(obj);
