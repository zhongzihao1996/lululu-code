function Parent(age) {
  this.age = age;
}

Parent.prototype.say = function () {
  console.log(this.age);
};

function Child(age) {
  // 借用父构造函数，并传值
  Parent.call(this, age);
}

// 继承原型
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});


const child = new Child(25);
child.say(); // 25