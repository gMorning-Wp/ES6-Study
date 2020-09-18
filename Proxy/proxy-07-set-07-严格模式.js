'use strict';

const handler = {
    set: function(obj, prop, value, receiver) {
      obj[prop] = receiver;
      // 无论有没有下面这一行，都会报错
      return false;
    }
  };
  const proxy = new Proxy({}, handler);
  proxy.foo = 'bar';

//   上面代码中，严格模式下，set代理返回false或者undefined，都会报错。