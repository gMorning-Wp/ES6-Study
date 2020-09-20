//get 方法可以继承
let proto = new Proxy({}, {
    get: function (target, propKey, receiver) {
        console.log('get ' + propKey);

        return target[propKey];
    }
});
let obj = Object.create(proto);
console.log(obj.a);