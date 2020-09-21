//defineProperty 
// defineProperty() 方法拦截了 Object.defineProperty

var handler ={
    defineProperty(target,key,descriptor){
        return false;
    }
};
var target ={};
var proxy = new Proxy(target,handler);
proxy.foo = 'bar';

// 上面代码中，defineProperty()方法内部没有任何操作，只返回false，导致添加新属性总是无效。注意，这里的false只是用来提示操作失败，本身并不能阻止添加新属性。

//1.如果目标对象不可扩展（non-extensible），则defineProperty 不能添加目标对象上不存在的属性，否则会报错
//2.目标对象的某个属性不可写（writable）或者不可配置（configurable），则defineProperty方法不得改变这俩个属性