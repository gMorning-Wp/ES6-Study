//preventExtensions()方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。

// 1.该方法必须返回一个布尔值，否则会自动转换为布尔值
// 2.有一个限制，只有目标对象为不可扩展时。（即Object.isExtensible(proxy)为false，此拦截方法才能返回true）

//上面解释时我们用的是Object.isExtensible(proxy) 是因为在proxy的拦截函数isExtensible中 返回值必须和Obj.isExtensible一致。所以无所谓是哪个

var proxy = new Proxy({},{
  preventExtensions:function(target){
    return true;
  }
});
Object.preventExtensions(proxy);  // Uncaught TypeError: 'preventExtensions' on proxy: trap returned truish but the proxy target is extensible


//为来防止出现这个问题，通常要在preventExtensions() 方法里面执行一次Object.preventExtensions()方法
var p =new Proxy({},{
  preventExtensions(target){
    console.log('called');
    //在返回值前执行以下对目标对象禁止扩展的命令
  Object.preventExtensions(target);
    //这时候就可以返回true了
    return  true;
  }
});
Object.preventExtensions(p)