class Promise {
  constructor(fn) {
    this.status = 'pending';
    this.value = undefined;
    const resolve = (result) => {
      if (this.status !== 'pending') return;
      this.status = 'resolve';
      this.value = result;
    };
    const reject = (reason) => {
      if (this.status !== 'pending') return;
      this.status = 'reject';
      this.value = reason;
    };
    try {
      fn(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
}

let promise1 = new Promise((resolve, reject) => {
  resolve(1);
})

let promise2 = new Promise((resolve, reject) => {
  reject(2);
})

console.log(promise1);
console.log(promise2);