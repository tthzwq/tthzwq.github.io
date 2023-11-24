import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.36bc40e2.js";const C=JSON.parse('{"title":"控制流","description":"","frontmatter":{},"headers":[],"relativePath":"rust/004_control-flow.md","filePath":"rust/004_control-flow.md","lastUpdated":1700831160000}'),p={name:"rust/004_control-flow.md"},o=l(`<h1 id="控制流" tabindex="-1">控制流 <a class="header-anchor" href="#控制流" aria-label="Permalink to &quot;控制流&quot;">​</a></h1><h2 id="if-表达式" tabindex="-1">if 表达式 <a class="header-anchor" href="#if-表达式" aria-label="Permalink to &quot;if 表达式&quot;">​</a></h2><ul><li>代码中的条件 <strong>必须</strong> 是 bool 值</li><li>使用过多的 else if 表达式会使代码显得杂乱无章 最好重构代码 (match)</li></ul><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;number is divisible by 4&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;number is divisible by 3&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;number is divisible by 2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;number is not divisible by 4, 3, or 2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 let 语句中使用 if</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> condition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> condition { </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// if 分支和 else 分支的结果都是 i32 整型</span></span>
<span class="line"><span style="color:#6A737D;">// 如果它们的类型不匹配，则会出现一个错误</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> condition { </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> { </span><span style="color:#9ECBFF;">&quot;six&quot;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// error[E0308]: \`if\` and \`else\` have incompatible types</span></span>
<span class="line"><span style="color:#6A737D;">// 变量必须只有一个类型。Rust 需要在编译时就确切的知道 number 变量的类型</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;number is divisible by 4&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;number is divisible by 3&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;number is divisible by 2&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;number is not divisible by 4, 3, or 2&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 let 语句中使用 if</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> condition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> condition { </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// if 分支和 else 分支的结果都是 i32 整型</span></span>
<span class="line"><span style="color:#6A737D;">// 如果它们的类型不匹配，则会出现一个错误</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> condition { </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> { </span><span style="color:#032F62;">&quot;six&quot;</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// error[E0308]: \`if\` and \`else\` have incompatible types</span></span>
<span class="line"><span style="color:#6A737D;">// 变量必须只有一个类型。Rust 需要在编译时就确切的知道 number 变量的类型</span></span></code></pre></div><h2 id="使用循环重复执行" tabindex="-1">使用循环重复执行 <a class="header-anchor" href="#使用循环重复执行" aria-label="Permalink to &quot;使用循环重复执行&quot;">​</a></h2><p>Rust 有三种循环：loop、while 和 for</p><h3 id="loop" tabindex="-1">loop <a class="header-anchor" href="#loop" aria-label="Permalink to &quot;loop&quot;">​</a></h3><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">loop</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;again!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 循环中的 continue 关键字告诉程序跳过这个循环迭代，并转到下一个迭代</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从循环返回值</span></span>
<span class="line"><span style="color:#6A737D;">// 如果将返回值加入你用来停止循环的 break 表达式，它会被停止的循环返回</span></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> counter </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">loop</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        counter </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> counter </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;"> counter </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The result is {result}&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;"> // The result is 20</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 循环标签：在多个循环之间消除歧义</span></span>
<span class="line"><span style="color:#6A737D;">// 如果存在嵌套循环，break 和 continue 应用于此时最内层的循环。</span></span>
<span class="line"><span style="color:#6A737D;">// 可以在一个循环上指定一个 循环标签（loop label），然后将标签与 break 或 continue 一起使用，使这些关键字应用于已标记的循环而不是最内层的循环</span></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &#39;</span><span style="color:#B392F0;">counting_up</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">loop</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;count = {count}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> remaining </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">loop</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;remaining = {remaining}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> remaining </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;"> &#39;</span><span style="color:#B392F0;">counting_up</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            remaining </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;End count = {count}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">loop</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;again!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 循环中的 continue 关键字告诉程序跳过这个循环迭代，并转到下一个迭代</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从循环返回值</span></span>
<span class="line"><span style="color:#6A737D;">// 如果将返回值加入你用来停止循环的 break 表达式，它会被停止的循环返回</span></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> counter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">loop</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        counter </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> counter </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;"> counter </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The result is {result}&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;"> // The result is 20</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 循环标签：在多个循环之间消除歧义</span></span>
<span class="line"><span style="color:#6A737D;">// 如果存在嵌套循环，break 和 continue 应用于此时最内层的循环。</span></span>
<span class="line"><span style="color:#6A737D;">// 可以在一个循环上指定一个 循环标签（loop label），然后将标签与 break 或 continue 一起使用，使这些关键字应用于已标记的循环而不是最内层的循环</span></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    &#39;</span><span style="color:#6F42C1;">counting_up</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">loop</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;count = {count}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> remaining </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">loop</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;remaining = {remaining}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> remaining </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;"> &#39;</span><span style="color:#6F42C1;">counting_up</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            remaining </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        count </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;End count = {count}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="while-条件循环" tabindex="-1">while 条件循环 <a class="header-anchor" href="#while-条件循环" aria-label="Permalink to &quot;while 条件循环&quot;">​</a></h3><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">    // 当条件为真时，使用 while 循环运行代码</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{number}!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        number </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;LIFTOFF!!!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">    // 当条件为真时，使用 while 循环运行代码</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;{number}!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        number </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;LIFTOFF!!!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="使用-for-遍历集合" tabindex="-1">使用 for 遍历集合 <a class="header-anchor" href="#使用-for-遍历集合" aria-label="Permalink to &quot;使用 for 遍历集合&quot;">​</a></h3><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 使用 for 循环遍历集合中的元素</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> element </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> a {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;the value is: {element}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Range，它是标准库提供的类型，用来生成从一个数字开始到另一个数字之前结束(不包括结束)的所有数字的序列</span></span>
<span class="line"><span style="color:#6A737D;">// 1..=4 (包括结束4)</span></span>
<span class="line"><span style="color:#6A737D;">// rev，用来反转 range</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">..</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">rev</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{number}!&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;"> // 3!   2!   1!</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 使用 for 循环遍历集合中的元素</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> element </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> a {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;the value is: {element}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Range，它是标准库提供的类型，用来生成从一个数字开始到另一个数字之前结束(不包括结束)的所有数字的序列</span></span>
<span class="line"><span style="color:#6A737D;">// 1..=4 (包括结束4)</span></span>
<span class="line"><span style="color:#6A737D;">// rev，用来反转 range</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">..</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">rev</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;{number}!&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;"> // 3!   2!   1!</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="match" tabindex="-1">match <a class="header-anchor" href="#match" aria-label="Permalink to &quot;match&quot;">​</a></h2><p>match 表达式由 match 关键字、用于匹配的值和一个或多个分支构成，这些分支包含一个模式和在值匹配分支的模式时运行的表达式：</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">match</span><span style="color:#E1E4E8;"> x {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;found zero&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 我们可以匹配多个值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;found 1 or 2!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 我们可以匹配迭代器</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">..=</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;found a number 3 to 9 inclusively&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 我们可以将匹配数值绑定到变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    matched_num </span><span style="color:#F97583;">@</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">..=</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;found {} number between 10 to 100!&quot;</span><span style="color:#E1E4E8;">, matched_num);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 这是默认匹配，如果没有处理所有情况，则必须存在该匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">    _ </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;found something else!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">match</span><span style="color:#24292E;"> x {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;found zero&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 我们可以匹配多个值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;found 1 or 2!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 我们可以匹配迭代器</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">..=</span><span style="color:#005CC5;">9</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;found a number 3 to 9 inclusively&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 我们可以将匹配数值绑定到变量</span></span>
<span class="line"><span style="color:#24292E;">    matched_num </span><span style="color:#D73A49;">@</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">..=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;found {} number between 10 to 100!&quot;</span><span style="color:#24292E;">, matched_num);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 这是默认匹配，如果没有处理所有情况，则必须存在该匹配</span></span>
<span class="line"><span style="color:#24292E;">    _ </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;found something else!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,15),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{C as __pageData,A as default};
