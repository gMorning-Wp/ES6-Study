// 同一个拦截器函数，可以设置拦截多个操作。

// new Proxy  为一个构造函数进行实例化，所以Proxy确实可以被称作拦截器函数

var handler = {
    get: function (target, propkey, receiver) {
        if (propkey === 'prototype') {
            return Object.prototype;
        }
        return 'Hello,' + propkey;
    },
    apply: function (target, thisBinding, args) {
        console.log(arguments);
        return args[0];

    },
    construct: function (target, args) {
        return {
            value: args[1]
        }
    }
};
//如果目标对象是个函数，那么还有俩种额外操作可以进行拦截，就是apply和 construct
var fproxy = new Proxy(function (x, y) {
    return x + y;
},handler);

console.log(fproxy(2,3));
console.log(new fproxy(2,3));
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo);
console.log('Hello,foo');
console.log(fproxy.foo === 'Hello,foo');




