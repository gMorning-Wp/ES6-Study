//如果原对象不可配置或者禁止扩展，这时has拦截将会报错

// 如果某个属性不可配置（或者目标对象不可扩展）也是如此

//创建一个对象
var target = {a:1};
//为这个对象设置禁止扩展
Object.preventExtensions(target);
var p = new Proxy(obj,{
    has:function(target,key){
        return false;
    }
});

'a' in p //此时会报错，TypeError is thrown

//上面代码中，obj对象禁止扩展，结果使用has拦截就会报错。也就是说，如果某个属性不可配置（或者目标对象不可扩展），则has()方法就不得“隐藏”（即返回false）目标对象的该属性。

