//Proxy中的this问题

//正常情况下Proxy代理的钩子函数（就是那些拦截方法函数，get，set等）中this指向的是Proxy代理实例（construct钩子函数除外，该钩子函数中this指向的是handler）;

//虽然我们可以通过Proxy来对目标对象的访问做针对。但是它不是目标函数的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致性。主要的原因是 ！！！Proxy代理下。目标对象内部的this关键字总是Proxy代理实例

//创建一个对象
const target ={
    //存在一个非13种类型的自定义拦截函数,且没做什么拦截。只是比较了一下this指向
    m:function(){
        console.log(this === proxy);
    }
};
const handler ={};

//创建一个Proxy实例
const proxy = new Proxy(target,handler);

//尝试用无拦截。目标对象自身执行 
target.m(); // false
proxy.m(); //true