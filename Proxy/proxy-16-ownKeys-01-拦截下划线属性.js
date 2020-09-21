//ownKeys 方法用来拦截对象自身属性的读取操作。 具体来说，拦截以下操作

//  Object.getOwnPropertyNames()
//  Object.getOwnPropertySymbols()
//  Object.keys()
//  for ...in 


//只返回对象中的a属性

var target = {
  a: 1,
  b: 2,
  c: 3
};
let handler = {
  ownKeys(target) {
    return ['a']; //返回是一个数组
  }
};
let p = new Proxy(target, handler);
Object.keys(p);


//拦截第一个字符是下划线的属性名

let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
};
let handler = {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_');
  }

}

let p = new Proxy(target, handler);

for (let key of Object.keys(p)) {
  console.log(target[key]);
}
//baz


//
// 使用Object.keys()方法时，有三类属性会被ownKeys()方法自动过滤，不会返回。

// 目标对象上不存在的属性
// 属性名为 Symbol 值
// 不可遍历（enumerable）的属性