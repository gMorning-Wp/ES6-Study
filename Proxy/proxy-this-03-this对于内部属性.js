//有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性。
const target  =new Date();
const hander ={};
const proxy = new Proxy(target,hander);

proxy.getDate();


//getDate()方法 只能在Date对象实上拿到，如果this不是Date对象实例就会报错。我们通过让this绑定到原始对象就解决了这个问题

const target = new Date('2015-01-01');
const hander ={
    get(target,key){
        if(key=== 'getDate'){
            return target.getDate.bind(target);
        }
        return Reflect.get(target,key);
        
    }
}
const proxy = new Proxy(target,hander);
proxy.getDate() // 1