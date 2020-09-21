//non-extensible

//如果目标对象是不可扩展的（non-extensible），这时ownKeys()返回的数组中必须包含目标对象的所有属性。且不能有多余的属性。否则报错

var obj ={
  a:1
};

//设置对象不可扩展
Object.preventExtensions(obj);

var p = new Proxy(obj,{
  ownKeys(target){
    //我们尝试返回多余属性b
    return ['a','b'];
  }
});

// 通过getOwnPropertyNames()来触发拦截
Object.getOwnPropertyNames(p); // Uncaught TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible

// 上面代码中，obj对象是不可扩展的，这时ownKeys()方法返回的数组之中，包含了obj对象的多余属性b，所以导致了报错。
