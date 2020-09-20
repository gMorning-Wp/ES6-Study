// apply方法拦截函数的调用、call、apply

// apply方法接受三个参数，分别是目标对象、目标对象的上下文(this)、和目标对象的参数数组


// var handler ={
//     apply (target,ctx,args){
//         return Reflect.apply(...arguments);
//     }
// }

//要被拦截的函数
var target = function (){ return 'I am target';};
//处理函数
var handler ={
    apply:function(){
        return 'I am the proxy';
    }
}
//建立Proxy实例

var proxy = new Proxy(target,handler);
//此时执行会得到 处理函数中返回的 I am the proxy
proxy(); 