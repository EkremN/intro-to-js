webpackJsonp([0xe5714367a3e9],{462:function(t,n){t.exports={data:{markdownRemark:{html:'<p>Okay, so we\'ve gotten this far; it\'s time for you to start thinking about your first project: an imaginary news site. Before that, I want to dwell a bit on some things we\'ve sort of hand-waved over and want to make sure they\'re explained to you:</p>\n<h2 id="connecting-css-and-html"><a href="#connecting-css-and-html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Connecting CSS and HTML</h2>\n<p>You have two choices here, a <code class="language-text">link</code> tag and a <code class="language-text">style</code> tag. I\'ll gloss over <code class="language-text">style</code> because I don\'t want you to use it, but I want you to know it\'s there.</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;title&gt;My amazing HTML Document&lt;/title&gt;\n  &lt;style&gt;\n    .my-brand {\n      color: red;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1 class=&quot;my-brand&quot;&gt;Check this out&lt;/h1&gt;\n  &lt;!-- Your amazing HTML here --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n      </div>\n<p>See the <code class="language-text">style</code> tag in the head? This allows you to write CSS directly in an HTML document. Anything inside in the <code class="language-text">style</code> tag will be read as CSS and applied to the whole document. This can be useful to rapidly test something out, but in reality you should really never need to use <code class="language-text">style</code> tags.</p>\n<p>Rather, what we want is to have an HTML document and a separate CSS document that is loaded by the HTML document. This is useful because we get to keep all the <strong>content</strong> (HTML) and the <strong>styling</strong> (CSS) separate. This is called separation of concerns, and it\'s useful in many ways with programming. The idea is that is that you use each file to focus on doing one thing and doing it well. Where possible, it\'s best to separate things so you have many small files instead of a few big ones. Here, we want to separate our CSS and our HTML into different pages.</p>\n<p>What that looks like:</p>\n<p>Our index.html file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;title&gt;My amazing HTML Document&lt;/title&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;./style.css&quot; /&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1 class=&quot;my-brand&quot;&gt;Check this out&lt;/h1&gt;\n  &lt;!-- Your amazing HTML here --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n      </div>\n<p>Our style.css file (located in the same folder as the index.html file)</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.my-brand</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The key here is the <code class="language-text">&lt;link rel=&quot;stylesheet&quot; href=&quot;./style.css&quot; /&gt;</code>. Let\'s break it down. A link tag is nearly always found in the <code class="language-text">head</code> and links another file to that HTML document. Nearly always (99.9% of the time), it\'s to a <code class="language-text">stylesheet</code>, hence the <code class="language-text">rel=&quot;stylesheet&quot;</code>. The <code class="language-text">href</code> is where that other file is located. It refers to the file name. In this case, we have a file called <code class="language-text">style.css</code> and it is located in the same folder as the <code class="language-text">index.html</code> file, which is what the <code class="language-text">./</code> part of the <code class="language-text">./style.css</code> means. You could also write it as <code class="language-text">&quot;style.css&quot;</code> if it\'s in the same directory, it also means it\'s located in the same folder, but I wanted you to see the <code class="language-text">./</code> because you\'ll see it everywhere. We\'ll cover how it works later when we start working more with the terminal.</p>\n<h2 id="when-to-actually-use-the-cascade"><a href="#when-to-actually-use-the-cascade" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When to Actually Use the Cascade</h2>\n<p>Before I told you to use the cascade as little as possible, but I did want to share with you when it can be useful to use. Imagine we have the following three buttons:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.ex-btn</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #aaa<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 4px 15px<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span> <span class="token comment">/* changes the mouse when you hover the button */</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.ex-btn-warn</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> crimson<span class="token punctuation">;</span>\n    <span class="token property">border-color</span><span class="token punctuation">:</span> darkred<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.ex-btn-success</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> limegreen<span class="token punctuation">;</span>\n    <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ex-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ex-btn ex-btn-warn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Warn Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ex-btn ex-btn-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>These buttons are relatively similar and differ only in colors but the spacing and text styling are all the same. It\'d be nice if we could write the common styles in one rule and then overrule just the colors. We can, using the cascade!</p>\n<p>Since those classes come lower on the page, they "win" on the properties that they conflict with, and thus we only overwrite the things we want. Why is this better? Imagine later you want to change the text to be smaller and the border to be thinner. Now instead of having to change the style for each button, you change it once in their common class, <code class="language-text">.ex-btn</code> and that affects all of them! This principle is generally called <strong>DRY</strong> which stands for "don\'t repeat yourself", meaning if you can have one place for common code or rules, it\'s better to do that than have it in 50 different places. While having three copies of the same rules doesn\'t seem like a big deal, many websites will have 10+ sorts of buttons and it quickly becomes impossible to manage.</p>\n<h2 id="devtools"><a href="#devtools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DevTools</h2>\n<p>Your browser has fantastic dev tools built into it. The easiest way to start playing with them is right-click on something on the web and click "Inspect Element". This will take you to the Elements Explorer. It lets you look at the HTML that\'s on the page and the CSS that\'s affecting those elements. Super super useful. Poke around and get used to playing with the dev tools. You\'ll live here as front end developer. Most of the other tools are for JavaScript but we\'ll get there in a bit.</p>',frontmatter:{path:"/css-patterns",title:"Effective Patterns for Writing CSS",order:9}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Introduction to JavaScript?"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Systems"}}},{node:{frontmatter:{order:3,path:"/variable",title:"What is Variable"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---css-patterns-f5450f821002ae2ac087.js.map