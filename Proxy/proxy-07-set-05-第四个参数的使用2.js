//拦截set方法中有第四个参数，一般我们称作receiver
//receiver，指向的是原始的操作行为所在的那个对象， 一般情况下是proxy实例本身

// 此例子是让我们来理解什么叫做receiver 指的是原始操作行为所在的对象

const handler ={
    set:function(obj,prop,val,receiver){
        //设置值时会返回proxy实例
        obj[prop] = receiver;
        return true;
    }
};
const proxy = new Proxy({},handler);

//创建一个空对象
const myObj ={};
//将myObj的原型设置为proxy实例
Object.setPrototypeOf(myObj,proxy);
//尝试设置myobj中的属性
obj.foo = 'bar';  //此时的过程： 1、obj会去查看本身是否有foo属性，发现没有则去原型链上找，myObj的原型链是一个Proxy实例则触发来set函数。 返回的是receiver  这时候receiver则指向的是myObj（即原始赋值行为所在的对象）
