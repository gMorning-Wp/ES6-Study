//Proxy类本身提供提供了一个方法来开关性质的释放代理权和收回代理权

// Proxy.revocable()

// Proxy.revocable方法返回一个可取消的Proxy实例

let target ={};
let handler={};

let {proxy,revoke} =Proxy.revocable(target,handler);
console.log(Proxy.revocable(target,handler));

proxy.foo =123; //注意此proxy是通过Prxoy.revocable处理过后的proxy。我们通过new Proxy是不能达到revocable的效果的
proxy.foo; //123
revoke();
proxy.foo; // 此时我们再访问proxy实例上的foo时会报错

// Proxy.revocable()方法返回一个对象，该对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。


// Proxy.revocable()有一个使用场景：
// 有一个目标对象，不允许直接访问，必须通过代理来访问。但是一旦访问结束后我们将代理关闭（收回代理权），不允许再次访问

