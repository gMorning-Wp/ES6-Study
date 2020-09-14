

//Proxy 实例也可以作为其他对象的原型对象。
var proxy =new Proxy({},{
    get:function(target,propkey,receiver){
        return 30;
    }
});
let obj = Object.create(proxy);//此时原型对象已经为Proxy

console.log(obj.time);//obj上任何属性都会返回30