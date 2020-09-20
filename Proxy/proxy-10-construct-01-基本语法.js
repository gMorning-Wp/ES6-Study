//construct方法用于拦截new命令 下面是拦截对象的写法

// const handler = {
//     construct(target, args, newTarget) {
//         return new target(...args);
//     }
// };
//语法说明 construct(目标对象，构造函数的参数数组，利用proxy创造实例对象时，new命令作用的构造函数)

const p =new Proxy(function(){},{  //由于construct()拦截的是构造函数，所以它的目标对象必须是函数，否则就会报错。
    construct:function(target,args){
        //construct()方法返回的必须是一个对象，否则会报错。
        // Uncaught TypeError: 'construct' on proxy: trap returned non-object ('1')
        return {value:args[0]*10}  
    }
})
 (new p(1)).value; //10

 //其中proxy创造实例对象时 即new p(1) 动作， 也就说 第三个参数 newTarget 即 上面例子中的 p