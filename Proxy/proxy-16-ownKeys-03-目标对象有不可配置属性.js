//如果目标对象有不可配置属性，属性必须被ownKeys()方法返回，否则会报错



var obj = {};

Object.defineProperty(obj, 'a', {
  configurable: true,
  enumerable: true,
  value: 10
});

var p = new Proxy(obj, {
  ownKeys: function (target) {
    return ['b'];
  }
});

Object.getOwnPropertyNames(p); // Uncaught TypeError: 'ownKeys' on proxy: trap result did not include 'a'

// 上面代码中，obj对象的a属性是不可配置的，这时ownKeys()方法返回的数组之中，必须包含a，否则会报错。