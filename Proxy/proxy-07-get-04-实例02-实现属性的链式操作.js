//利用Proxy，可将读取属性的操作，转变为执行某个函数。从而实现属性的链式操作
var pipe = function (value) {
    var funcStack = []; //收集的函数堆栈， 很有意思的是。开始会很好奇。funcStack 是函数执行时每次都初始化的空数组，为啥能依次存入呢。其实我们开始理解错误。由于下面oproxy每次都被返回。我们的拦截器get函数因为被属性访问执行了多次。而我们的pipe函数只执行了一次。
    var oproxy = new Proxy({}, {
        get: function (target, propkey, receiver) {
            if (propkey === 'get') { //当链式操作以get结束时，将收集起来的所有操作函数依次执行
                return funcStack.reduce((total, fn) => {
                    return fn(total);
                }, value);
            }
            funcStack.push(window[propkey]); //从window中拿到对应名称的函数
            return oproxy;
        }
    });
    return oproxy;
}

var double = val => val * 2;
var pow = val => val * val;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;  //做位运算
 
pipe(3).double.pow.reverseInt.get  // 得到63