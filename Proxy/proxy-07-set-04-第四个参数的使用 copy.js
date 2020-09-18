//拦截set方法中有第四个参数，一般我们称作receiver
//receiver，指向的是原始的操作行为所在的那个对象， 一般情况下是proxy实例本身

const handler ={
    set:function(obj,prop,val,receiver){
        obj[prop] = receiver;
        return true; //在严格模式下set函数必须返回true 其他均报错
    }
};
const proxy = new Proxy({},handler);

proxy.foo = 'bar'; //给属性赋值来触发set中obj[prop] =receiver
proxy.foo === proxy  //true  
