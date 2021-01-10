//标签模板  tagged template
// 模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。
//标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。

// ! 标签模板的作用
// * 过滤Html字符串，防止用户恶意输入
// * 实现国际化 ，比如i18n
// * 和模板字符串配合实现 模板库（Mustache） 为其添加条件判断和循环处理
// * 在js中嵌入其他语言

//例子1
// let a = 5;
// let b = 10;
// tag `Hello${a+b}world${a*b}`;

// //上面的语法等同于
// tag(['Hello', 'world', ''], 15, 50)

// //例子2 ,如何将各个参数按照原来的位置拼合回去
let total = 50;
let msg = passthru `The total is ${total} (${total*1.05} width tax)`;

// function passthru(literals) {
//     let result = '';
//     let i = 0;
//     //主要的循环对象是第一个参数
//     while (i < literals.length) {
//         result += literals[i++]
//         if (i < arguments.length) {
//             result += arguments[i];
//         }
//     }
//     return result;
// }
console.log(msg);

//例子3 上面的拼合用rest参数来实现

function passthru(literals, ...values) {
    let output = '';
    let index;
    //主要的循环对象变成了后面的参数
    for (index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }
    //最后会留下一个literals的最后一位,此时index已经为2
    output += literals[index]
    return output;

}

//标签模板的最重要的一个应用，就是过滤html字符串。防止用户输入恶意内容

let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = SaferHTML `<p>${sender} has sent you a message<p>`;

//处理非法字段函数
function SaferHTML(templateData) {
    let s = templateData[0]; // <p>
    for (let i = 1; i < arguments.length; i++) {
        //将整个变量先变成字符串
        let arg = String(arguments[i]);

        //在替换中要转义特殊字符
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        // 在模板字符串中本身的标签不予转换
        s += templateData[i];
    }
    return s;
}
console.log(message)

//! 模板处理函数的第一个参数（模板字符串数组），还有一个raw属性。


