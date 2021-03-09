# Typescript

## 1. 你选择 TS 的原因是什么，给你带来了收益或者好处？

## 2. TS 的特性

## 3. any 和 unknown 区别

## 4. interface 和 type 区别

# Vue

## 1. 对比其他框架，为什么选择 Vue，从哪些维度进行对比的？

## 2. 首屏优化怎做的？做了哪些事情？performance 哪些指标衡量？

## 3. Vue 组件生命周期

### 1. new vue()

vm 实例化时会调用原型方法 this.\_init 方法进行初始化

```bash
Vue.prototype._init = function(options) {
    vm.$options = mergeOptions(  // 合并options
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
    )
    ...
    initLifecycle(vm) // 开始一系列的初始化
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate') //执行 beforeCreate 钩子
    initInjections(vm)
    initState(vm)
    initProvide(vm)
    callHook(vm, 'created') //执行 created 钩子
    ...
    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
}
```

### 2. beforeCreate

将用户提供的 options 对象，父组件定义在子组件上的 event、props(子组件实例化时)，vm 原型方法，和 Vue 构造函数内置的选项合并成一个新的 options 对象，赋值给 vm.\$options

执行 3 个初始化方法：

- initLifecycle(vm): 主要作用是确认组件的父子关系和初始化某些实例属性。找到父组件实例赋值给 vm.$parent，将自己push给父组件的$children
- initEvents(vm): 主要作用是将父组件使用 v-on 或@注册的自定义事件添加到子组件的私有属性 vm.\_events 中
- initRender(vm): 主要作用是初始化用来将 render 函数转为 vnode 的两个方法 vm.\_c 和 vm.$createElement。用户自定义的render函数的参数h就是vm.$createElement 方法，它可以返回 vnode。等以上操作全部完成，就会执行 beforeCreate 钩子函数，此时用户可以在函数中通过 this 访问到 vm.$parent和vm.$createElement 等有限的属性和方法

### 3. created

执行 3 个初始化方法：

- initInjections(vm): 初始化 inject，使得 vm 可以访问到对应的依赖
- initState(vm): 初始化会被使用到的状态，状态包括 props，methods，data，computed，watch 五个选项。调用相应的 init 方法，使用 vm.\$options 中提供的选项对这些状态进行初始化，其中 initData 方法会调用 observe(data, true)，实现对 data 中属性的监听，实际上是使用 Object.defineProperty 方法定义属性的 getter 和 setter 方法
- initProvide(vm)：初始化 provide，使得 vm 可以为子组件提供依赖

这 3 个初始化方法先初始化 inject，然后初始化 props/data 状态，最后初始化 provide，这样做的目的是可以在 props/data 中使用 inject 内所注入的内容。
等以上操作全部完成，就会执行 created 钩子函数，此时用户可以在函数中通过 this 访问到 vm 中的 props，methods，data，computed，watch 和 inject 等大部分属性和方法。

### 4. beforeMount

### 5. mounted

### 6. activated

### 7. deactivated

### 8. beforeUpdate

### 9. updated

### 10. beforeDestroy

### 11. destroyed

## 4. 对象新增属性为什么没有响应式更行？为什么？

## 5. 数组有哪些方法侦测不到变化？

## 6. 两个路由对应同一个组件，切换路由，生命钩子执行？

## 7. watch 使用功能场景

## 8. 各种组件共享数据方式

1. props/\$emit

2. $emit/$on

3. vuex

4. $emit/$on

5. provide/inject

6. $parent / $children 与 ref

# 其他

## 1. 多人开发有什么难点？
