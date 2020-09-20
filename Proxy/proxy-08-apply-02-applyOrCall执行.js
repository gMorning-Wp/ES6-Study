//我们调用proxy实例调用call或者apply或者Reflect.apply都会被拦截

// 此处需要去了解一下Reflect 的使用方式

//拦截处理对象
var twice = {
    apply(target,ctx,args){
        return Reflect.apply(...arguments)* 2;
    }
};
function sum (n,m){
    return n +m;
};
var proxy = new Proxy(sum,twice);

// 执行实例
proxy(1,2); // 6
proxy.call(null,5,6); // 22
proxy.apply(null,[7,8]); //30

Reflect.apply(proxy,null,[9,10]); //38