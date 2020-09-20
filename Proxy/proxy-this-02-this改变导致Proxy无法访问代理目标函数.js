//由于this指向的变化，导致 Proxy 无法代理目标对象

//创建一个Map
const  _name = new WeakMap();

//创建一个类

class Person {
    constructor(name){
        _name.set(this,name);
    }
    get name(){
        return _name.get(this);
    }
}

//创建一个原生类
const jane = new Person('Jane');
jane.name; //'Jane'
const proxy = new Proxy(jane,{}); // 注意这里target传入的是jane 的Person实例
proxy.name  //undefined