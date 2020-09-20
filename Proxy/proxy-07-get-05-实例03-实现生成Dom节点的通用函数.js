//利用get拦截，实现一个生成各种DOM节点的通用函数dom   ********

// 最终执行的格式最简单的： dom.div({},'hello');   //第一参数为attrs
const dom = new Proxy({}, {
    get: function (target, property) {
        return function (attrs = {}, ...children) {
            const el = document.createElement(property);  //将 div创建出来
            //遍历第一个参数 attrs的所有配置项
            for(let prop of Object.keys(attrs)){
                el.setAttribute(prop,attrs[prop]);
            }
            //遍历第二个参数 打算放置的所有节点
            for(let child of children){
                if(typeof child === 'string'){
                    //将字符串的转变成文本节点
                   child = document.createTextNode(child); 
                }
                //将节点加入到el中成为其的子元素
                el.appendChild(child); //其中会包括一些嵌套的dom.ul等。 此点可看下面的执行
            }
            return el;
        }
    }
});
const el =dom.div({},'Hello,my name is ',
                     dom.a({href:'a.com'},'mark'),
                     '. I like',
                     dom.ul({},
                        dom.li({},'The web'),
                        dom.li({},'Food'),
                        dom.li({},'...actually that\'s it')
                        )
)
document.body.appendChild(el);// 扔到body中显示