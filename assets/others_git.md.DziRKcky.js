import{_ as i,c as s,o as a,a3 as t}from"./chunks/framework.BYhES31N.js";const e="/assets/git.DTloOTrQ.png",l="/assets/git_directory.DulGUTSm.png",h="/assets/git_flow.ZIBffVAB.png",n="/assets/gitflow.C_oXtiva.jpg",u=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[],"relativePath":"others/git.md","filePath":"others/git.md","lastUpdated":1716365411000}'),p={name:"others/git.md"},k=t('<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h1><h2 id="git-工作区域" tabindex="-1">Git 工作区域 <a class="header-anchor" href="#git-工作区域" aria-label="Permalink to &quot;Git 工作区域&quot;">​</a></h2><p><img src="'+e+'" alt="git"></p><ul><li>Workspace：工作区。可见的项目文件</li><li>Index / Stage：暂存区。项目目录下<code>.git/index</code>文件, 暂存区会记录 <code>git add</code> 添加文件的相关信息(文件名、大小、timestamp...)，不保存文件实体, 通过 id 指向每个文件实体。可以使用 git status 查看暂存区的状态。暂存区标记了当前工作区中，哪些内容是被 git 管理的。</li><li>Repository：仓库区（或本地仓库）。就是安全存放数据的位置，这里面有你提交到所有版本的数据。</li><li>Remote：远程仓库，托管代码的服务器。</li></ul><p>本地区域的一些概念</p><p><img src="'+l+'" alt="git directory"></p><ul><li>Directory：使用 Git 管理的一个目录，也就是一个仓库，包含我们的工作空间和 Git 的管理空间。</li><li>WorkSpace：需要通过 Git 进行版本控制的目录和文件，这些目录和文件组成了工作空间。</li><li>.git：存放 Git 管理信息的目录，初始化仓库(<code>git init</code> 命令)的时候自动创建。</li><li>Index/Stage：暂存区，或者叫待提交更新区，在提交进入 repo 之前，我们可以把所有的更新放在暂存区。</li><li>Local Repo：本地仓库，一个存放在本地的版本库；HEAD 会指示当前的开发分支（branch）。</li><li>Stash：隐藏，是一个工作状态保存栈，用于保存/恢复 WorkSpace 中的临时状态。</li></ul><p><img src="'+h+'" alt="git flow"></p><h2 id="gitflow" tabindex="-1">GitFlow <a class="header-anchor" href="#gitflow" aria-label="Permalink to &quot;GitFlow&quot;">​</a></h2><p><img src="'+n+`" alt="git flow"></p><h2 id="git-常用命令" tabindex="-1">Git 常用命令 <a class="header-anchor" href="#git-常用命令" aria-label="Permalink to &quot;Git 常用命令&quot;">​</a></h2><h3 id="git-add-git-stage-添加文件内容到暂存区" tabindex="-1"><code>git add</code> / <code>git stage</code> - 添加文件内容到暂存区 <a class="header-anchor" href="#git-add-git-stage-添加文件内容到暂存区" aria-label="Permalink to &quot;\`git add\` / \`git stage\` - 添加文件内容到暂存区&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--verbose </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -v]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--dry-run </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -n]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--force </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -f]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--interactive </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -i]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--patch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -p]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   [--edit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--[no-]all </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --[no-]ignore-removal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--update </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]] [--sparse]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   [--intent-to-add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -N</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   [--chmod</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+|-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)x] [--pathspec-from-file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--pathspec-file-nul]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   [--] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pathspec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">…​]</span></span></code></pre></div><ul><li><p><code>&lt;pathspec&gt;…</code> 要从中添加内容的文件。Fileglobs（例如 <code>*.c</code>）可以用来添加所有匹配的文件。此外，还可以提供一个前导目录名（例如 <code>dir</code> 来添加 <code>dir/file1</code> 和 <code>dir/file2</code>）</p></li><li><p><code>-f | --force</code> 允许添加已被忽略的文件</p></li></ul><h3 id="git-commit-记录对存储库的更改" tabindex="-1"><code>git commit</code> - 记录对存储库的更改 <a class="header-anchor" href="#git-commit-记录对存储库的更改" aria-label="Permalink to &quot;\`git commit\` - 记录对存储库的更改&quot;">​</a></h3><p>创建一个新的提交，包含 Index 的当前内容和描述变化的给定日志信息。新的提交是 HEAD 的直接子节点，通常是当前分支的顶端，分支会被更新以指向它（除非 working tree 上没有分支，在这种情况下 HEAD 会被 &quot;detached&quot;）。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --interactive</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --patch]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-s] [-v] [-u</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--amend]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [--dry-run] [(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">squash) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --fixup [(amend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">reword):]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [-F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">msg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--reset-author] [--allow-empty]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [--allow-empty-message] [--no-verify] [-e] [--author</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">author</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [--date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--cleanup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--[no-]status]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [-i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--pathspec-from-file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--pathspec-file-nul]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">trailer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=|:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])…​] [-S[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">keyid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [--] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pathspec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">…​]</span></span></code></pre></div><ul><li><p><code>-a | --all</code> 告诉命令自动暂存已修改和删除的文件，但未告知 Git 的新文件不受影响。</p></li><li><p><code>--interactive</code> or <code>--patch</code> &quot;交互式模式&quot; 逐一决定哪些文件或块应该成为 commit 的一部分，而不是暂存区中的内容。</p></li><li><p><code>-c &lt;commit&gt;</code> | <code>--reedit-message=&lt;commit&gt;</code> 取一个现有的 commit 对象，并在创建 commit 时重新使用日志信息和作者信息（包括时间戳）。</p></li><li><p><code>-F &lt;file&gt;</code> | <code>--file=&lt;file&gt;</code> 从给定文件中获取内容作为 commit 信息。</p></li><li><p><code>--amend</code> 通过创建一个新的 commit 来替换当前分支的顶端。</p></li></ul><p>记录的树像往常一样准备（包括<code>-i</code>和<code>-o</code>选项和显式 pathspec 的效果），当命令行没有通过<code>-m</code>、<code>-F</code>、<code>-c</code>等选项指定其他信息时，原始 commit 的信息会被用作起点，而不是空信息。 新的 commit 与当前的 commit 具有相同的父辈和作者（<code>--reset-author</code>选项可以反驳）。</p><p>这等价于:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> do</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> something</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> else</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> come</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> right</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ORIG_HEAD</span></span></code></pre></div><p>但可以用来修改合并 commit。</p><p>如果你修改了一个已经发布的 commit，你应该明白重写历史的意义。</p><ul><li><code>--fixup=[(amend|reword):]&lt;commit&gt;</code></li></ul><p>创建一个新的提交，在使用 git rebase --autosquash 时，&quot;修复&quot;<code>&lt;commit&gt;</code>。普通的<code>--fixup=&lt;commit&gt;</code>会创建一个 &quot;fixup!&quot;的提交，改变<code>&lt;commit&gt;</code>的内容，但不改变其日志信息。<code>--fixup=amend:&lt;commit&gt;</code>类似，但会创建一个 &quot;修正！&quot;的提交，同时用 &quot;修正！&quot;的提交的日志信息替换<code>&lt;commit&gt;</code>的日志信息。 <code>--fixup=reword:&lt;commit&gt;</code>创建一个 &quot;修正！&quot;提交，用自己的日志信息替换<code>&lt;commit&gt;</code>的日志信息，但不对<code>&lt;commit&gt;</code>的内容做任何修改。</p><p>由普通的<code>--fixup=&lt;commit&gt;</code>创建的提交，其主题由 &quot;fixup!&quot;和<code>&lt;commit&gt;</code>的主题行组成，并被<code>git rebase --autosquash</code>特别识别。<code>-m</code>选项可以用来补充创建提交的日志信息，但一旦 &quot;fixup!&quot;提交被<code>git rebase --autosquash</code>压入<code>&lt;commit&gt;</code>，额外的注释就会被扔掉。</p><p>由<code>--fixup=amend:&lt;commit&gt;</code>创建的提交与此类似，但其主题前缀为 &quot;amend!&quot;。<code>&lt;commit&gt;</code>的日志信息会被复制到 &quot;amend!&quot;提交的日志信息中，并在编辑器中打开，以便对其进行修改。当<code>git rebase --autosquash</code>将 &quot;amend!&quot;提交压入<code>&lt;commit&gt;</code>时，<code>&lt;commit&gt;</code>的日志信息会被 &quot;amend!&quot;提交的精炼日志信息所取代。如果 &quot;修正！&quot;提交的日志信息为空，则是一个错误，除非指定<code>--allow-empty-message</code>。</p><p><code>--fixup=reword:&lt;commit&gt;</code>是<code>--fixup=amend:&lt;commit&gt;--only</code>的简写。它创建一个只有日志信息的 &quot;修正！&quot;提交（忽略 Index 中的任何修改）。当被<code>git rebase --autosquash</code>压制时，它会替换<code>&lt;commit&gt;</code>的日志信息而不做任何其他改动。</p><p>当被 <code>git rebase --autosquash</code> 应用时，&quot;fixup!&quot;和 &quot;amend!&quot;提交都不会改变 <code>&lt;commit&gt;</code> 的作者身份。</p><h4 id="commit-message-格式规范" tabindex="-1">commit message 格式规范 <a class="header-anchor" href="#commit-message-格式规范" aria-label="Permalink to &quot;commit message 格式规范&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><code>type</code>(必须) 用于说明 <code>git commit</code> 的类别，只允许使用下面的标识。</p><ul><li><code>feat</code>：新功能（feature）。</li><li><code>fix/to</code>：修复 bug，可以是 QA 发现的 BUG，也可以是研发自己发现的 BUG。 <ul><li><code>fix</code>：产生 diff 并自动修复此问题。适合于一次提交直接修复问题</li><li><code>to</code>：只产生 diff 不自动修复此问题。适合于多次提交。最终修复问题提交时使用 fix</li></ul></li><li><code>docs</code>：文档（documentation）。</li><li><code>style</code>：格式（不影响代码运行的变动）。</li><li><code>refactor</code>：重构（即不是新增功能，也不是修改 bug 的代码变动）。</li><li><code>perf</code>：优化相关，比如提升性能、体验。</li><li><code>test</code>：增加测试。</li><li><code>chore</code>：构建过程或辅助工具的变动。</li><li><code>revert</code>：回滚到上一个版本。</li><li><code>merge</code>：代码合并。</li><li><code>sync</code>：同步主线或分支的 Bug。</li></ul><p><code>scope</code>(可选) <code>scope</code>用于说明 <code>commit</code> 影响的范围。</p><p><code>subject</code>(必须) <code>subject</code>是<code>commit</code>目的的简短描述，不超过50个字符。</p><h3 id="git-stash-将更改隐藏在一个-dirty-working-目录中" tabindex="-1"><code>git stash</code> - 将更改隐藏在一个 dirty working 目录中 <a class="header-anchor" href="#git-stash-将更改隐藏在一个-dirty-working-目录中" aria-label="Permalink to &quot;\`git stash\` - 将更改隐藏在一个 dirty working 目录中&quot;">​</a></h3><p>OPTIONS 选项:</p><ul><li><p><code>--all</code> / <code>-a</code> 所有<strong>被忽略</strong>和<strong>未跟踪</strong>的文件也会被隐藏起来，然后用 <code>git clean</code> 清理</p></li><li><p><code>-u</code> / <code>--include-untracked</code> / <code>--no-include-untracked</code> 所有<strong>未跟踪</strong>的文件也会被隐藏起来</p></li><li><p><code>--index</code> 不仅尝试恢复 working tree 的更改，还尝试恢复 Index 的更改</p></li><li><p><code>-k</code> / <code>--keep-index</code> / <code>--no-keep-index</code> 已添加到 Index 的所有更改都将保持不变。</p></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将本地修改保存到新的 stash entry 中，并将它们回滚到 HEAD</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;temp&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出当前拥有的 stash entry</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git stash push 的逆操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop</span></span></code></pre></div><h3 id="git-checkout-切换分支或恢复-working-tree-文件" tabindex="-1"><code>git checkout</code> - 切换分支或恢复 working tree 文件 <a class="header-anchor" href="#git-checkout-切换分支或恢复-working-tree-文件" aria-label="Permalink to &quot;\`git checkout\` - 切换分支或恢复 working tree 文件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 恢复工作区文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建并切换分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git switch -c &lt;branch&gt;</span></span></code></pre></div><h3 id="git-merge-合并分支" tabindex="-1"><code>git merge</code> 合并分支 <a class="header-anchor" href="#git-merge-合并分支" aria-label="Permalink to &quot;\`git merge\` 合并分支&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将source_branch合并到当前分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">source_branc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="git-rebase-变基" tabindex="-1"><code>git rebase</code> 变基 <a class="header-anchor" href="#git-rebase-变基" aria-label="Permalink to &quot;\`git rebase\` 变基&quot;">​</a></h3><p><code>git merge</code> 和 <code>git rebase</code> 的主要区别在于，<code>git merge</code> 创建一个新的 commit 以合并更改，并保留两个分支的 commit 历史，而 <code>git rebase</code> 修改 commit 历史，使其看起来像是在基础分支上进行的更改。</p><p>假设存在以下历史记录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#          C---D---E feat</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    A---B---F---G dev</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>将变成:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                  C&#39;--D&#39;--E&#39; feat</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                 /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    A---B---F---G dev</span></span></code></pre></div><p>如果发生冲突， git rebase 将在第一次有问题的提交处停止，并在树中留下冲突标记</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解决冲突后 告诉 Git 冲突已解决</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filenam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 继续执行变基过程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --continue</span></span></code></pre></div><p>或者，可以使用以下命令撤消 <code>git rebase</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --abort</span></span></code></pre></div><h3 id="git-revert-还原一些现有的-commit" tabindex="-1"><code>git revert</code> - 还原一些现有的 commit <a class="header-anchor" href="#git-revert-还原一些现有的-commit" aria-label="Permalink to &quot;\`git revert\` - 还原一些现有的 commit&quot;">​</a></h3><p><code>git revert</code>命令用于撤消对特定 commit 或一组 commit 所做的更改，创建了一个新的 commit 来有效地撤消这些更改。这意味着现有的分支将更新为一个新的 commit，该 commit 撤消了以前 commit 中所做的更改，使代码库回到以前的状态。</p><p>与<code>git reset</code>命令不同，<code>git revert</code>命令创建一个新的 commit，保留了项目的完整历史记录。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">1&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">3&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span></code></pre></div><h3 id="git-restore-恢复-working-tree-文件" tabindex="-1"><code>git restore</code> - 恢复 working tree 文件 <a class="header-anchor" href="#git-restore-恢复-working-tree-文件" aria-label="Permalink to &quot;\`git restore\` - 恢复 working tree 文件&quot;">​</a></h3><h4 id="git-restore-options-pathspec" tabindex="-1"><code>git restore [&lt;options&gt;] &lt;pathspec&gt;</code> <a class="header-anchor" href="#git-restore-options-pathspec" aria-label="Permalink to &quot;\`git restore [&lt;options&gt;] &lt;pathspec&gt;\`&quot;">​</a></h4><p>OPTIONS 选项:</p><ul><li><code>--worktree</code> / <code>-W</code> (default) 还原 working tree</li><li><code>--staged</code> / <code>-S</code> 指定 <code>--staged</code> 将仅还原 Index。指定两者将同时还原两者</li><li><code>--source=&lt;tree&gt;</code> / <code>-s &lt;tree&gt;</code> 使用给定树中的内容恢复 working tree 文件。通常通过命名与之关联的 commit、分支或标签来指定源树。</li></ul><h3 id="git-reset-将当前-head-重置为指定状态-此操作会更改-commit-历史记录" tabindex="-1"><code>git reset</code> - 将当前 HEAD 重置为指定状态, 此操作会更改 commit 历史记录 <a class="header-anchor" href="#git-reset-将当前-head-重置为指定状态-此操作会更改-commit-历史记录" aria-label="Permalink to &quot;\`git reset\` - 将当前 HEAD 重置为指定状态, 此操作会更改 commit 历史记录&quot;">​</a></h3><h4 id="git-reset-pathspec-与-git-add-pathspec-相反" tabindex="-1"><code>git reset &lt;pathspec&gt;</code> 与 <code>git add &lt;pathspec&gt;</code> 相反 <a class="header-anchor" href="#git-reset-pathspec-与-git-add-pathspec-相反" aria-label="Permalink to &quot;\`git reset &lt;pathspec&gt;\` 与 \`git add &lt;pathspec&gt;\` 相反&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 取消暂存所有文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><h4 id="git-reset-mode-commit" tabindex="-1"><code>git reset [&lt;mode&gt;] [&lt;commit&gt;]</code> <a class="header-anchor" href="#git-reset-mode-commit" aria-label="Permalink to &quot;\`git reset [&lt;mode&gt;] [&lt;commit&gt;]\`&quot;">​</a></h4><p><code>&lt;mode&gt;</code>必须是以下之一：</p><ul><li><code>--mixed</code> (default) 重置 Index，但不重置 working tree</li><li><code>--soft</code> 不修改 Index 和 working tree</li><li><code>--hard</code> 重置 Index 和 working tree</li><li><code>--keep</code> 重置 Index 并更新 working tree 中<code>&lt;commit&gt;</code>和<code>HEAD</code>之间不同的文件，如果<code>&lt;commit&gt;</code>和<code>HEAD</code>之间不同的文件有本地更改，重置将中止。</li><li><code>--merge</code> 重置 Index 并更新 working tree 中<code>&lt;commit&gt;</code>和<code>HEAD</code>之间不同的文件，但保留 Index 和 working tree 之间不同的文件（即具有未添加的更改）。如果<code>&lt;commit&gt;</code>和 Index 之间不同的文件已未暂存更改，则重置将中止。</li><li><code>--[no-]recurse-submodules</code></li></ul>`,68),d=[k];function o(c,r,g,E,F,y){return a(),s("div",null,d)}const b=i(p,[["render",o]]);export{u as __pageData,b as default};
