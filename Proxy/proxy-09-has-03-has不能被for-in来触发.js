//虽然for in 循环也用到 in 运算符，但是has拦截对for...in循环不生效

//下面的例子来排除不及格的成绩

var stu1 = {
    name: 'w',
    score: 54
};
var stu2 = {
    name: 'd',
    score: 77
};

var handler = {
    has(target, key) {
        if (key === 'score' && target[key] < 60) {
            console.log(`${target.name}不及格`);
            return false;
        }
        return key in target;
    }
}

let oproxy1 = new Proxy(stu1,handler);  //得到的实例proxy:oproxy1={name:'w',score:54};
let oproxy2 = new Proxy(stu2,handler);

'score' in oproxy1;
// w 不及格
//false

'score' in oproxy2;
//true

//！！！！下面我们对实例proxy对象来进行for in循环

for (const a in oproxy1) {
    console.log(oproxy1[a]);
}

//此时我们依旧会得到 w的分数，说明has拦截方法没有生效
// w
// 54
