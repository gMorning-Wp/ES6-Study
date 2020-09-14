//下面是对一个空对象进行了一层拦截，重新定义了属性的读取get 和设置set方法 
var k =new Proxy({},{
    get:function(target,propkey,receiver){
        console.log('getting obj prop')
        console.log(target,propkey,receiver);
        return Reflect.get(target,propkey,receiver);
    },
    set:function(target,propkey,value,receiver){
        console.log('setting obj prop')
        console.log(target,propkey,receiver);
        return Reflect.get(target,propkey,value,receiver);
    }
})

k.count = 1;
++k.count

// 上面代码说明，Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。