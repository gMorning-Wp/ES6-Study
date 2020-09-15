// 如果一个属性不可配置(configurable)且不可写(writable),则Proxy不能修改此属性。否则通过Proxy对象访问该属性会报错

//定义了一个对象，含有foo属性，且foo属性不可写和不可配置的
const target =Object.defineProperties({},{
    foo:{
        value:123,
        writable:false,
        configurable:false
    }
})

const proxy = new Proxy(target,{
    get(target,propkey){
        return 'abc';  //尝试去改变 target的值
    }
})
//通过proxy来访问foo属性，此时会报错   //Uncaught TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected '123' but got 'abc')
proxy.foo