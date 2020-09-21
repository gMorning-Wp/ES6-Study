//setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法。

var handler ={
  setPrototypeOf(target,proto){
    throw new Error('Changing the prototype is forbidden');
  }
};
var target = function(){};
var proto ={};

var proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto);
// Error: Changing the prototype is forbidden


// 1.此方法必须返回布尔值
// 2.如果目标对象不可扩展（non-extensible），setPrototypeOf()方法不得改变目标对象的原型