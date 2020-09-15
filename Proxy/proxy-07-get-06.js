//对于 get方法的第三个参数，总是会指向原始的读操作所在的那个对象， 一般情况下就是Proxy实例

const proxy = new Proxy({}, {
    get: function (target, propkey, receiver) {
        return receiver;
    }
});
proxy.a === proxy; //true