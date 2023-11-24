import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.36bc40e2.js";const d=JSON.parse('{"title":"Functions","description":"","frontmatter":{},"headers":[],"relativePath":"rust/003_functions.md","filePath":"rust/003_functions.md","lastUpdated":1700831160000}'),p={name:"rust/003_functions.md"},o=l(`<h1 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h1><ul><li>main 函数，它是很多程序的入口点</li><li>fn 关键字，它用来声明新函数</li><li>Rust 代码中的函数和变量名使用 snake case 规范风格 (所有字母都是小写并使用下划线分隔单词)</li><li>Rust 不关心函数定义所在的位置，只要函数被调用时出现在调用之处可见的作用域内就行</li></ul><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><ul><li>可以定义为拥有 parameters (形参) 的函数，参数是特殊变量，是函数签名的一部分。当函数拥有参数（形参）时，可以为这些参数提供具体的值 arguments（实参）</li><li>在函数签名中，必须 声明每个参数的类型</li></ul><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">print_labeled_measurement</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;h&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">print_labeled_measurement</span><span style="color:#E1E4E8;">(value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">i32</span><span style="color:#E1E4E8;">, unit_label</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">char</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The measurement is: {value}{unit_label}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print_labeled_measurement</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;h&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">print_labeled_measurement</span><span style="color:#24292E;">(value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">i32</span><span style="color:#24292E;">, unit_label</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">char</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The measurement is: {value}{unit_label}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="语句和表达式" tabindex="-1">语句和表达式 <a class="header-anchor" href="#语句和表达式" aria-label="Permalink to &quot;语句和表达式&quot;">​</a></h2><ul><li>Rust 是一门基于表达式（expression-based）的语言</li><li>函数体由一系列的语句和一个可选的结尾表达式构成</li><li><strong>语句</strong>（Statements）是执行一些操作但不返回值的指令</li><li><strong>表达式</strong>（Expressions）计算并产生一个值</li><li><strong>表达式的结尾没有分号。如果在表达式的结尾加上分号，它就变成了语句，而语句不会返回值</strong></li></ul><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 函数定义也是语句，上面整个例子本身就是一个语句。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 语句不返回值。因此，不能把 let 语句赋值给另一个变量，比如下面的例子尝试做的，会产生一个错误：</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;"> // error: expected expression, found \`let\` statement</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 函数定义也是语句，上面整个例子本身就是一个语句。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 语句不返回值。因此，不能把 let 语句赋值给另一个变量，比如下面的例子尝试做的，会产生一个错误：</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">);</span><span style="color:#6A737D;"> // error: expected expression, found \`let\` statement</span></span></code></pre></div><p>let y = 6 语句并不返回值，所以没有可以绑定到 x 上的值。这与其他语言不同，例如 C 和 Ruby，它们的赋值语句会返回所赋的值。在这些语言中，可以这么写 x = y = 6，这样 x 和 y 的值都是 6；Rust 中不能这样写</p><p>表达式会计算出一个值，并且你将编写的大部分 Rust 代码是由表达式组成的</p><p>函数调用是一个表达式。宏调用是一个表达式。用大括号创建的一个新的块作用域也是一个表达式</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The value of y is: {y}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这个表达式：</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">//     let x = 3;</span></span>
<span class="line"><span style="color:#6A737D;">//     x + 1</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// 是一个代码块，它的值是 4。这个值作为 let 语句的一部分被绑定到 y 上。注意 x+1 这一行在结尾没有分号，与你见过的大部分代码行不同。表达式的结尾没有分号。如果在表达式的结尾加上分号，它就变成了语句，而语句不会返回值。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The value of y is: {y}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这个表达式：</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">//     let x = 3;</span></span>
<span class="line"><span style="color:#6A737D;">//     x + 1</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// 是一个代码块，它的值是 4。这个值作为 let 语句的一部分被绑定到 y 上。注意 x+1 这一行在结尾没有分号，与你见过的大部分代码行不同。表达式的结尾没有分号。如果在表达式的结尾加上分号，它就变成了语句，而语句不会返回值。</span></span></code></pre></div><h2 id="具有返回值的函数" tabindex="-1">具有返回值的函数 <a class="header-anchor" href="#具有返回值的函数" aria-label="Permalink to &quot;具有返回值的函数&quot;">​</a></h2><ul><li>函数可以向调用它的代码返回值。我们并不对返回值命名，但要在箭头（-&gt;）后声明它的类型。</li><li>在 Rust 中，函数的返回值等同于函数体最后一个表达式的值。</li><li>使用 return 关键字和指定值，可从函数中提前返回；但大部分函数隐式的返回最后的表达式</li></ul><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在 five 函数中没有函数调用、宏、甚至没有 let 语句 —— 只有数字 5。这在 Rust 中是一个完全有效的函数。</span></span>
<span class="line"><span style="color:#6A737D;">// 注意，也指定了函数返回值的类型，就是 -&gt; i32</span></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">five</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">i32</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">five</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The value of x is: {x}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plus_one</span><span style="color:#E1E4E8;">(x);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The value of y is: {y}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plus_one</span><span style="color:#E1E4E8;">(x</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">i32</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">i32</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 如果在包含 x + 1 的行尾加上一个分号，把它从表达式变成语句，运行代码会产生一个错误 </span></span>
<span class="line"><span style="color:#6A737D;">// error “mismatched types”（类型不匹配）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// | fn plus_one(x: i32) -&gt; i32 {</span></span>
<span class="line"><span style="color:#6A737D;">// |    --------            ^^^ expected \`i32\`, found \`()\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fn plus_one(x: i32) -&gt; ()  使用单位类型 () 表示不返回值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在 five 函数中没有函数调用、宏、甚至没有 let 语句 —— 只有数字 5。这在 Rust 中是一个完全有效的函数。</span></span>
<span class="line"><span style="color:#6A737D;">// 注意，也指定了函数返回值的类型，就是 -&gt; i32</span></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">five</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">i32</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">five</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The value of x is: {x}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plus_one</span><span style="color:#24292E;">(x);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The value of y is: {y}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plus_one</span><span style="color:#24292E;">(x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">i32</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">i32</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 如果在包含 x + 1 的行尾加上一个分号，把它从表达式变成语句，运行代码会产生一个错误 </span></span>
<span class="line"><span style="color:#6A737D;">// error “mismatched types”（类型不匹配）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// | fn plus_one(x: i32) -&gt; i32 {</span></span>
<span class="line"><span style="color:#6A737D;">// |    --------            ^^^ expected \`i32\`, found \`()\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fn plus_one(x: i32) -&gt; ()  使用单位类型 () 表示不返回值</span></span></code></pre></div>`,15),e=[o];function t(c,r,y,E,i,u){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
