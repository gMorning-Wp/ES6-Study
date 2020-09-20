//使用get拦截实现数组读取负数的索引 ,原生的数组是不允许填写负数索引的
function createArray(...elements) {
    let handler = {
        get:function(target, propkey, receiver) {
            let idx = Number(propkey);
            if (idx < 0) {
                propkey = String(target.length + idx);
            }

            return Reflect.get(target, propkey, receiver);
        }
    };
    return new Proxy(elements,handler);
};
let arr = createArray('a','b','c');
console.log(arr[-1]);
arr[-1]
//上面代码中，数组的位置参数是-1，就会输出数组的倒数第一个成员。