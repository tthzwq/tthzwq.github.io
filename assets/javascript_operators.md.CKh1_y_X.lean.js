import{_ as l,c as a,o as n,m as s,a as i,a4 as t}from"./chunks/framework.IXvbZIHp.js";const A=JSON.parse('{"title":"表达式和运算符","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/operators.md","filePath":"javascript/operators.md","lastUpdated":1710746186000}'),h={name:"javascript/operators.md"},p=s("h1",{id:"表达式和运算符",tabindex:"-1"},[i("表达式和运算符 "),s("a",{class:"header-anchor",href:"#表达式和运算符","aria-label":'Permalink to "表达式和运算符"'},"​")],-1),e=s("h2",{id:"运算符优先级",tabindex:"-1"},[i("运算符优先级 "),s("a",{class:"header-anchor",href:"#运算符优先级","aria-label":'Permalink to "运算符优先级"'},"​")],-1),d=s("tbody",null,[s("tr",null,[s("th",null,"优先级"),s("th",null,"运算符类型"),s("th",null,"结合性"),s("th",null,"运算符")]),s("tr",null,[s("td",null,"19"),s("td",null,[s("a",{href:"javascript:void(0);"},"分组")]),s("td",null,"n/a（不相关）"),s("td",null,[s("code",null,"( … )")])]),s("tr",null,[s("td",{rowspan:"5"},"18"),s("td",null,[s("a",{href:"javascript:void(0);"},"成员访问")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… . …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"需计算的成员访问")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… [ … ]")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"new")]),i("（带参数列表）")]),s("td",null,"n/a"),s("td",null,[s("code",null,"new … ( … )")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"函数调用")]),s("td",null,"从左到右"),s("td",null,[s("code",null,[i("… ( "),s("var",null,"… "),i(")")])])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"可选链（Optional chaining）")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"?.")])]),s("tr",null,[s("td",null,"17"),s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"new")]),i("（无参数列表）")]),s("td",null,"从右到左"),s("td",null,[s("code",null,"new …")])]),s("tr",null,[s("td",{rowspan:"2"},"16"),s("td",null,[s("a",{href:"javascript:void(0);"},"后置递增")]),s("td",{rowspan:"2"},"n/a"),s("td",null,[s("code",null,"… ++")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"后置递减")]),s("td",null,[s("code",null,"… --")])]),s("tr",null,[s("td",{rowspan:"10"},"15"),s("td",null,[s("a",{href:"javascript:void(0);"},"逻辑非 (!)")]),s("td",{rowspan:"10"},"从右到左"),s("td",null,[s("code",null,"! …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"按位非 (~)")]),s("td",null,[s("code",null,"~ …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"一元加法 (+)")]),s("td",null,[s("code",null,"+ …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"一元减法 (-)")]),s("td",null,[s("code",null,"- …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"前置递增")]),s("td",null,[s("code",null,"++ …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"前置递减")]),s("td",null,[s("code",null,"-- …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"typeof")])]),s("td",null,[s("code",null,"typeof …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"void")])]),s("td",null,[s("code",null,"void …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"delete")])]),s("td",null,[s("code",null,"delete …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"await")])]),s("td",null,[s("code",null,"await …")])]),s("tr",null,[s("td",null,"14"),s("td",null,[s("a",{href:"javascript:void(0);"},"幂 (**)")]),s("td",null,"从右到左"),s("td",null,[s("code",null,"… ** …")])]),s("tr",null,[s("td",{rowspan:"3"},"13"),s("td",null,[s("a",{href:"javascript:void(0);"},"乘法 (*)")]),s("td",{rowspan:"3"},"从左到右"),s("td",null,[s("code",null,"… * …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"除法 (/)")]),s("td",null,[s("code",null,"… / …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"取余 (%)")]),s("td",null,[s("code",null,"… % …")])]),s("tr",null,[s("td",{rowspan:"2"},"12"),s("td",null,[s("a",{href:"javascript:void(0);"},"加法 (+)")]),s("td",{rowspan:"2"},"从左到右"),s("td",null,[s("code",null,"… + …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"减法 (-)")]),s("td",null,[s("code",null,"… - …")])]),s("tr",null,[s("td",{rowspan:"3"},"11"),s("td",null,[s("a",{href:"javascript:void(0);"},"按位左移 (<<)")]),s("td",{rowspan:"3"},"从左到右"),s("td",null,[s("code",null,"… << …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"按位右移 (>>)")]),s("td",null,[s("code",null,"… >> …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"无符号右移 (>>>)")]),s("td",null,[s("code",null,"… >>> …")])]),s("tr",null,[s("td",{rowspan:"6"},"10"),s("td",null,[s("a",{href:"javascript:void(0);"},"小于 (<)")]),s("td",{rowspan:"6"},"从左到右"),s("td",null,[s("code",null,"… < …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"小于等于 (<=)")]),s("td",null,[s("code",null,"… <= …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"大于 (>)")]),s("td",null,[s("code",null,"… > …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"大于等于 (>=)")]),s("td",null,[s("code",null,"… >= …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"in")])]),s("td",null,[s("code",null,"… in …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},[s("code",null,"instanceof")])]),s("td",null,[s("code",null,"… instanceof …")])]),s("tr",null,[s("td",{rowspan:"4"},"9"),s("td",null,[s("a",{href:"javascript:void(0);"},"相等 (==)")]),s("td",{rowspan:"4"},"从左到右"),s("td",null,[s("code",null,"… == …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"不相等 (!=)")]),s("td",null,[s("code",null,"… != …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"一致/严格相等 (===)")]),s("td",null,[s("code",null,"… === …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"不一致/严格不相等 (!==)")]),s("td",null,[s("code",null,"… !== …")])]),s("tr",null,[s("td",null,"8"),s("td",null,[s("a",{href:"javascript:void(0);"},"按位与 (&)")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… & …")])]),s("tr",null,[s("td",null,"7"),s("td",null,[s("a",{href:"javascript:void(0);"},"按位异或 (^)")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… ^ …")])]),s("tr",null,[s("td",null,"6"),s("td",null,[s("a",{href:"javascript:void(0);"},"按位或 (|)")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… | …")])]),s("tr",null,[s("td",null,"5"),s("td",null,[s("a",{href:"javascript:void(0);"},"逻辑与 (&&)")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… && …")])]),s("tr",null,[s("td",{rowspan:"2"},"4"),s("td",null,[s("a",{href:"javascript:void(0);"},"逻辑或 (||)")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… || …")])]),s("tr",null,[s("td",null,[s("a",{href:"javascript:void(0);"},"空值合并 (??)")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… ?? …")])]),s("tr",null,[s("td",null,"3"),s("td",null,[s("a",{href:"javascript:void(0);"},"条件（三元）运算符")]),s("td",null,"从右到左"),s("td",null,[s("code",null,"… ? … : …")])]),s("tr",null,[s("td",{rowspan:"16"},"2"),s("td",{rowspan:"16"},[s("a",{href:"javascript:void(0);"},"赋值")]),s("td",{rowspan:"16"},"从右到左"),s("td",null,[s("code",null,"… = …")])]),s("tr",null,[s("td",null,[s("code",null,"… += …")])]),s("tr",null,[s("td",null,[s("code",null,"… -= …")])]),s("tr",null,[s("td",null,[s("code",null,"… **= …")])]),s("tr",null,[s("td",null,[s("code",null,"… *= …")])]),s("tr",null,[s("td",null,[s("code",null,"… /= …")])]),s("tr",null,[s("td",null,[s("code",null,"… %= …")])]),s("tr",null,[s("td",null,[s("code",null,"… <<= …")])]),s("tr",null,[s("td",null,[s("code",null,"… >>= …")])]),s("tr",null,[s("td",null,[s("code",null,"… >>>= …")])]),s("tr",null,[s("td",null,[s("code",null,"… &= …")])]),s("tr",null,[s("td",null,[s("code",null,"… ^= …")])]),s("tr",null,[s("td",null,[s("code",null,"… |= …")])]),s("tr",null,[s("td",null,[s("code",null,"… &&= …")])]),s("tr",null,[s("td",null,[s("code",null,"… ||= …")])]),s("tr",null,[s("td",null,[s("code",null,"… ??= …")])]),s("tr",null,[s("td",null,"1"),s("td",null,[s("a",{href:"javascript:void(0);"},"逗号 / 序列")]),s("td",null,"从左到右"),s("td",null,[s("code",null,"… , …")])])],-1),k=t("",17),r=[p,e,d,k];function u(o,c,E,g,y,v){return n(),a("div",null,r)}const D=l(h,[["render",u]]);export{A as __pageData,D as default};
