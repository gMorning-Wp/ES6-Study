
// ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。 var proxy = new Proxy(target, handler);

// Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。


/**
 * new Proxy(target,handler)
 * 
 * params target --  第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象
 * params handler -- 第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作,比如，上面代码中，配置对象有一个get方法，用来拦截对目标对象属性的访问请求。get方法的两个参数分别是目标对象和所要访问的属性。可以看到，由于拦截函数总是返回20，所以访问任何属性都得到20
 */
var target ={}
var proxy = new Proxy(target,{
    get:function(target,propkey,receiver){
        return 20;
    }
});
proxy.name;
proxy.time;
proxy.title;
target.a =2;

console.log(target);
console.log(proxy.name,proxy.time,proxy.title);

//!!!!!!要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。