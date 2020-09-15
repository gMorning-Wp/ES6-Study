//下面是拦截方法的详细介绍
// get方法拦截某个属性的读取操作，可接收三个参数：目标对象、属性名、proxy实例本身（操作行为所针对的对象，可选）
var person ={
    name:'张三'
}
var proxy = new Proxy(person,{
    get:function(target,propkey){
        if(propkey in target){
            return target[propkey];
        }else{
           throw new ReferenceError('Prop name \"'+ propkey+'\" does not exist.')
        }
    }
})
console.log(proxy.name);
console.log(proxy.a);
