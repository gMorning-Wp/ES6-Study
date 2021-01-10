
//导出模板字符串方法
module.exports = function compile (template){
    //匹配<%= data.supplies[i] %> ()来表示占位，.代表任意字符 + 代表一个或多个 ？表示非贪婪模式  g表示全局
    const evalExpr =/<%=(.+?)%>/g;
    //匹配 <% for(let i=0; i < data.supplies.length; i++) { %> 或 <% } %>
    // [\s\S]*是完全通配的意思
    // “[ ]”是范围描述符。
    // \s是指空白，包括空格、换行、zhuantab缩进等所有的空白，而\S刚好相反，这样一正一反下来，就表示所有的字符，完全的，一字不漏的。
    // 另外，[]这个符号，表示在它里面包含的单个字符不限顺序的出现，比如：
    // [ace]*---这表示，只要出现a/c/e这三个任意的字母，都会被匹配；
    // [\s]---表示，只要出现空白就匹配；
    // [\S]---表示，非空白就匹配；
    // \w 匹配包括下划线的任何单词字符。等价于“[A-Za-z0-9_]"。
    // \W 匹配任何非单词字符。等价于“[^A-Za-z0-9_]"。
    // 表示所有组合都是相应的，有[\w\W]等，意义完全相同。
    // 还有一点，有"."这个通配符了的原因是：
    // 原因是因为"."是不会匹配换行的，所有出现有换行匹配的时候，使用[\s\S]或者[\w\W]这样的完全通配模式。
    const expr =/<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n echo( $1 ); \n echo(`')
        .replace(expr,'`); \n $1 \n echo(`')
    template = 'echo(`' + template + '`);';
    //     "echo(`
    // <ul>
    //   `); 
    //   for(let i=0; i < data.supplies.length; i++) {  
    //  echo(`
    //     <li>`); 
    //  echo(  data.supplies[i]  ); 
    //  echo(`</li>
    //   `); 
    //   }  
    //  echo(`
    // </ul>
    // `);"
    let script = `(function parse(data){
        let output ="";
        function echo(html){
            output += html;
        }
        ${template}
        return output;
    })`
    return script;
    //这里虽然返回的是字符串。但是我们通过eval方法来将其转成真是的js
};