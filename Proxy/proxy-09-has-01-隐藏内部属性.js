//has方法拦截的是hasProperty操作，即判断对象是否具备某个属性时生效，典型的操作就是使用in运算符

// has方法接受俩个参数 1.target 2.要查询的属性名

//下面的例子来隐藏某些属性，不被in运算符发现

var handler = {
    has(target, key) {
        if (key[0] === '_') { //我们通常将下划线开头的属性名定义为对象的内部属性
            return false;
        }
        return key in target;
    }
}

var target = {_prop:'foo',prop:'fpp'};
var p = new Proxy(target,handler);
'_prop' in Proxy;


// 我们需要注意的是has拦截的是一个hasProperty操作，而不是hasOwnProperty操作。也就是无论是自身属性还是继承过来的属性都判断