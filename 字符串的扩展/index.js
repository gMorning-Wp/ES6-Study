const compile = require('./templateCompile');

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
const parse = eval(compile(template));

const str =parse({ supplies: [ "broom", "mop", "cleaner" ] });

console.log(str);