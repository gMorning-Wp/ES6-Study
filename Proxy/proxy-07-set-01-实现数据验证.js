//set 用来拦截某个属性的赋值操作，可以接受的参数如下
// set(目标对象，属性名，属性值，Proxy实例本身可选)


//假定Person对象有一个age属性，该属性应该是一个不大于 200 的整数，那么可以使用Proxy保证age的属性值符合要求。
//由于设置了存值函数set，任何不符合要求的age属性赋值，都会抛出一个错误，这是数据验证的一种实现方法
let validator = {
    set: function (obj, prop, val, receiver) {
        if (prop === 'age') {
            //不是整型数,抛出TypError的错误
            if (!Number.isInteger(val)) {
                throw new TypeError('The age is not an integer');
            }
            //大于200时抛出范围错误
            if (val > 200) {
                throw new RangeError('The age seems invalid');
            }
            obj[prop] = val;
        }
    }
};
let person = new Proxy({},validator);
person.age = 100;
person.age = 'young'; //TypeError
person.age = 2001; //RangeError