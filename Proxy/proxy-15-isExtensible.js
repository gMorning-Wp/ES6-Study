//isExtensible 方法拦截Object.isExtensible()操作

// 注意！！
// 1. 该方法只能返回布尔值，否则返回值会被自动转成布尔值
// 2. 这个方法有一个限制，返回值必须和目标对象的isExtensible属性保持一致。如果不保持一致的话会报错

 var p = new Proxy({},{
   isExtensible(target){
     console.log("called");
     return true  //这里必须返回的是true而不能是false 原因为上面注意事项2
   }
 });
 Object.isExtensible(p);

//如下面的例子
var p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p)
// Uncaught TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')