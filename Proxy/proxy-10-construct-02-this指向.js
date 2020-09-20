//construct 方法中的this指向的时handler，而不是实例对象

const P = function (){return {a:1}};
const handler ={
    construct:function(P,args){
        console.log(this === handler);
        console.log(new P(...args));
        console.log(...args);
        return new P(...args);
    }
}

let p = new Proxy(function () {}, handler);
new p() // true

console.log(new p(1) === new P(2));//false