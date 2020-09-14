//如果handler对象是个空对象，没有设置任何拦截。 那么等同于直接通向源对象
var target ={};
var handler={};
var proxy = new Proxy(target,handler);
proxy.a = 1;
console.log(target.a); //1
target.k =2;
console.log(proxy.k); //2


// !!!!!有一个技巧是将Proxy对象，实例化设置到object.proxy属性上，从而可以通过obecjt对象来访问调用

var obj = {proxy:new Proxy(target,handler)};