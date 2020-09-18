//如果目标对象自身的某个属性，不可写或不可配置，那么set方法将不起作用


const obj ={};
//定义一个不可写的属性
Object.defineProperty(obj,'foo',{
    value:'bar',
    writable:false
});
const handler ={
    set:function(obj,prop,val,receiver){
        obj[prop] = 'baz';
    }
};
const proxy = new Proxy(obj,handler);
proxy.foo = 'baz';
proxy.foo  //得到的依旧是bar