//我们会在对象上面设置内部属性，属性名的第一个字符使用下划线开头，表示这些属性不应该被外部使用。结合get和set方法，就可以做到防止这些内部属性被外部读写。
//此需求需要我们用get和set配合完成
const handler = {
    get: function (target, prop) {
        invariant(prop, 'get');
        return target[prop];
    },
    set: function (target, prop, val) {
        invariant(prop, 'set');
        target[key] = val;
        return true;
    }
};

function invariant(prop, action) {
    if (prop.startsWith('_')) {  //字符串已谁开头 startsWith  注意s
        throw new Error(`Invalid attempt to ${action} private "${prop} property;"`)
    }
}
const target = {};
const proxy = new Proxy(target, handler);
proxy._prop
proxy._prop = 'a';