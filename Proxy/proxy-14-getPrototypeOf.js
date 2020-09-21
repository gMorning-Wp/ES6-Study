// getPrototypeOf() 方法主要用来拦截获取对象的原型的。具体会拦截下面几种操作：

// Object.prototype.__proto 
// Object.prototype.isPrototypeOf();
// Object.getPrototypeOf();
// Reflect.getPrototypeOf()
// instanceof

var proto ={};
var p = new Proxy({},{
  getPrototypeOf(target){
    return proto;
  }
});
console.log(Object.getPrototypeOf(p) === proto);

//!!!注意getPropertyOf 方法的返回值必须是对象或者null，否则报错。
// 另外，如果目标对象不可扩展（non-extensible） getPrototypeOf 必须返回目标对象的原型对象


