import{_ as t,r as i,o as p,c,b as n,d as s,e,a as l}from"./app-CNvywuHy.js";const o={},u=l('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>为了满足用户更多的使用场景，主题已经将首页进行了模块化，用户可以在首页 md 文件的 <code>frontmatter</code> 中指定要展示的内容模块及其展示顺序，后期将开发更多的模块供大家使用，且支持用户按需自定义首页模块。</p></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>目前内置的首页模块有 <code>Banner</code>、<code>BannerBrand</code>、<code>Blog</code>、<code>MdContent</code>、<code>Comment</code>, <code>Footer</code>，其配置如下：</p><h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules"><span>modules</span></a></h3><ul><li>描述：指定首页模块</li><li>默认值：<code>[&#39;BannerBrand&#39;, &#39;Blog&#39;, &#39;Footer&#39;]</code></li><li>可选值：<code>Banner</code>、<code>BannerBrand</code>、<code>Features</code>、<code>Blog</code>、<code>MdContent</code>、<code>Comment</code>、<code>Footer</code></li><li>配置项： <ul><li>Banner：巨幅展示图，可以展示 logo、标题、简述、背景图，上下布局</li><li>BannerBrand：品牌格式的巨幅展示图，可以展示 logo、标题、简述、背景图、按钮，左右布局</li><li>Features: 首页特性列表</li><li>Blog：博客模块，两栏布局，作则展示博客列表，右侧展示用户信息及博客相关内容</li><li>MdContent：首页的 markdown 正文展示模块</li><li>Comment: 评论模块</li><li>Footer：首页底部模块</li></ul></li></ul><h3 id="banner" tabindex="-1"><a class="header-anchor" href="#banner"><span>banner</span></a></h3><ul><li>描述：用于配置 Banner 模块</li><li>frontmatter 配置： <ul><li>heroText：标题</li><li>tagline：简述</li><li>heroImage: 首页 logo</li><li>heroImageStyle: 首页 logo 样式</li><li>bgImage: 背景图片</li><li>bgImageStyle: 背景图片样式</li></ul></li><li>案例： <ul><li><img width="600" alt="banner" src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png"></li></ul></li></ul><h3 id="bannerbrand" tabindex="-1"><a class="header-anchor" href="#bannerbrand"><span>bannerBrand</span></a></h3>',8),r=n("li",null,"描述：用于配置 BannerBrand 模块",-1),d=n("li",null,"title：标题",-1),k=n("li",null,"description: 描述",-1),m=n("li",null,"tagline：标语",-1),v=n("li",null,[s("buttons: 按钮 "),n("ul",null,[n("li",null,"text: 按钮文案"),n("li",null,"link: 按钮地址"),n("li",null,"type: 按钮风格，默认带背景色，如果不需要可以设置为 'plain'")])],-1),h={href:"/docs/guide/icon",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"link: 按钮地址",-1),g=n("li",null,[s("案例： "),n("ul",null,[n("li",null,[n("img",{width:"600",alt:"bannerBrand",src:"https://user-images.githubusercontent.com/18067907/214793265-d316133f-12c3-47a3-8f96-a34e5cca5087.png"})])])],-1),y=n("h3",{id:"blog",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#blog"},[n("span",null,"blog")])],-1),f=n("li",null,"描述：用于配置 Blog 模块",-1),_={href:"/docs/guide/icon",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,"link: 按钮地址",-1),w=n("li",null,[s("themeConfig 配置： "),n("ul",null,[n("li",null,"author：作者昵称"),n("li",null,"authorAvatar：作者头像")])],-1),B=n("li",null,[s("案例： "),n("ul",null,[n("li",null,[n("img",{width:"600",alt:"blog",src:"https://user-images.githubusercontent.com/18067907/216823247-8aee08e1-2c24-45e5-8c2e-b9a919ed1c27.png"})])])],-1),C=l(`<h3 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>features</span></a></h3><ul><li>描述：配置首页特性列表</li><li>frontmatter 配置： <ul><li>title：标题</li><li>details：详情</li></ul></li><li>案例： <ul><li><img width="600" alt="footer" src="https://github.com/vuepress-reco/vuepress-theme-reco/assets/18067907/5b1ced88-606a-4088-b32d-4a9c6ed9cc66"></li></ul></li></ul><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3><ul><li>描述：用于配置 Footer 模块</li><li>frontmatter 配置： <ul><li>record: 域名备案文案</li><li>recordLink：域名备案地址</li><li>cyberSecurityRecord: 公安备案文案</li><li>cyberSecurityLink：公安备案地址</li><li>startYear：本网站开始时间</li></ul></li><li>案例： <ul><li><img width="600" alt="footer" src="https://user-images.githubusercontent.com/18067907/152644689-f7fc1e34-6f43-44f5-86a0-fd26d4157bb1.png"></li></ul></li></ul><h3 id="mdcontent" tabindex="-1"><a class="header-anchor" href="#mdcontent"><span>MdContent</span></a></h3><ul><li>描述：首页的 markdown 正文展示模块</li><li>案例：-</li></ul><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h3><ul><li>描述： 评论功能，如果站点想把评论功能放在首页，可以配置这个选项</li><li>案例：-</li></ul><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">modules</span><span class="token punctuation">:</span> <span class="token comment"># 指定首页展示模块</span></span>
<span class="line">  <span class="token punctuation">-</span> BannerBrand</span>
<span class="line">  <span class="token punctuation">-</span> Blog</span>
<span class="line">  <span class="token punctuation">-</span> MdContent</span>
<span class="line">  <span class="token punctuation">-</span> Features</span>
<span class="line">  <span class="token punctuation">-</span> Footer</span>
<span class="line"><span class="token key atrule">banner</span><span class="token punctuation">:</span> <span class="token comment"># banner 模块的配置</span></span>
<span class="line">  <span class="token key atrule">heroText</span><span class="token punctuation">:</span> 午后南杂</span>
<span class="line">  <span class="token key atrule">tagline</span><span class="token punctuation">:</span> Enjoy when you can<span class="token punctuation">,</span> and endure when you must.</span>
<span class="line">  <span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.png</span>
<span class="line">  <span class="token key atrule">heroImageStyle</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">maxWidth</span><span class="token punctuation">:</span> 200px</span>
<span class="line">    <span class="token key atrule">margin</span><span class="token punctuation">:</span> 0 auto 2rem</span>
<span class="line">  <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> /banner.jpg</span>
<span class="line">  <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">height</span><span class="token punctuation">:</span> 450px</span>
<span class="line"><span class="token key atrule">bannerBrand</span><span class="token punctuation">:</span> <span class="token comment"># bannerBrand 模块的配置</span></span>
<span class="line">  <span class="token key atrule">title</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>reco</span>
<span class="line">  <span class="token key atrule">description</span><span class="token punctuation">:</span> 一款简洁的 vuepress 博客 &amp; 文档 主题。</span>
<span class="line">  <span class="token key atrule">tagline</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。</span>
<span class="line">  <span class="token key atrule">buttons</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Guide<span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;/docs/guide/introduce&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Default Style<span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;/docs/theme/introduce&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;plain&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token key atrule">socialLinks</span><span class="token punctuation">:</span> <span class="token comment"># 社交地址</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;LogoGithub&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/recoluan&#39;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token key atrule">blog</span><span class="token punctuation">:</span> <span class="token comment"># blog 模块的配置</span></span>
<span class="line">  <span class="token key atrule">socialLinks</span><span class="token punctuation">:</span> <span class="token comment"># 社交地址</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;LogoGithub&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/recoluan&#39;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token key atrule">features</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 过去</span>
<span class="line">  <span class="token key atrule">details</span><span class="token punctuation">:</span> 开发一款看着开心、写着顺手的 vuepress 博客主题。</span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 当下</span>
<span class="line">  <span class="token key atrule">details</span><span class="token punctuation">:</span> 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。</span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 未来</span>
<span class="line">  <span class="token key atrule">details</span><span class="token punctuation">:</span> 吸引更多的朋友参与到开发中来，继续强大功能。</span>
<span class="line"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token comment"># 底部模块的配置</span></span>
<span class="line">  <span class="token key atrule">record</span><span class="token punctuation">:</span> 域名备案文案</span>
<span class="line">  <span class="token key atrule">recordLink</span><span class="token punctuation">:</span> 域名备案地址</span>
<span class="line">  <span class="token key atrule">cyberSecurityRecord</span><span class="token punctuation">:</span> 公安备案文案</span>
<span class="line">  <span class="token key atrule">cyberSecurityLink</span><span class="token punctuation">:</span> 公安备案地址</span>
<span class="line">  <span class="token key atrule">startYear</span><span class="token punctuation">:</span> <span class="token number">2018</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义首页模块" tabindex="-1"><a class="header-anchor" href="#自定义首页模块"><span>自定义首页模块</span></a></h2><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>reco 主题的 css 方案是 postcss + tailwindcss，支持 css 最新嵌套提案（类 scss），为组件书写样式时需注意。</p></div><p>只要组件在全局注册，即可作为首页的模块被首页使用。</p>`,13),L={href:"/docs/theme/register-components.html",target:"_blank",rel:"noopener noreferrer"},M=l(`<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">modules</span><span class="token punctuation">:</span> <span class="token comment"># 指定首页展示模块</span></span>
<span class="line">  <span class="token punctuation">-</span> CustomModule</span>
<span class="line">  <span class="token punctuation">-</span> Footer</span>
<span class="line"><span class="token key atrule">customModule</span><span class="token punctuation">:</span> <span class="token comment"># customModule 模块的配置</span></span>
<span class="line">  <span class="token key atrule">key</span><span class="token punctuation">:</span> value</span>
<span class="line"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token comment"># 底部模块的配置</span></span>
<span class="line">  <span class="token key atrule">record</span><span class="token punctuation">:</span> 域名备案文案</span>
<span class="line">  <span class="token key atrule">recordLink</span><span class="token punctuation">:</span> 域名备案地址</span>
<span class="line">  <span class="token key atrule">cyberSecurityRecord</span><span class="token punctuation">:</span> 公安备案文案</span>
<span class="line">  <span class="token key atrule">cyberSecurityLink</span><span class="token punctuation">:</span> 公安备案地址</span>
<span class="line">  <span class="token key atrule">startYear</span><span class="token punctuation">:</span> <span class="token number">2018</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发首页模块时，可以通过下面方法去获得 frontmatter 配置：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageFrontmatter<span class="token punctuation">,</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/utils&#39;</span></span>
<span class="line"><span class="token keyword">const</span> frontmatter <span class="token operator">=</span> <span class="token function">usePageFrontmatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function j(S,F){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("ul",null,[r,n("li",null,[s("frontmatter 配置： "),n("ul",null,[d,k,m,v,n("li",null,[s("socialLinks：社交地址 "),n("ul",null,[n("li",null,[s("icon: 图标，设置方式见 "),n("a",h,[s("这里"),e(a)])]),b])])])]),g]),y,n("ul",null,[f,n("li",null,[s("frontmatter 配置： "),n("ul",null,[n("li",null,[s("socialLinks：社交地址 "),n("ul",null,[n("li",null,[s("icon: 图标，设置方式见 "),n("a",_,[s("这里"),e(a)])]),x])])])]),w,B]),C,n("p",null,[s("首先可以参考 "),n("a",L,[s("注册组件"),e(a)]),s(" 将首页模块组件注册为全局组件，然后在首页的 frontmatter 中去配置（假如自定义的模块组件为 CustomModule）：")]),M])}const N=t(o,[["render",j],["__file","6.biangengguanli.html.vue"]]),T=JSON.parse('{"path":"/docs/manage/project/guochengguanli/6.biangengguanli.html","title":"项目集成管理","lang":"zh-CN","frontmatter":{"title":"项目集成管理","date":"2024-06-06T23:36:01.000Z"},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"modules","slug":"modules","link":"#modules","children":[]},{"level":3,"title":"banner","slug":"banner","link":"#banner","children":[]},{"level":3,"title":"bannerBrand","slug":"bannerbrand","link":"#bannerbrand","children":[]},{"level":3,"title":"blog","slug":"blog","link":"#blog","children":[]},{"level":3,"title":"features","slug":"features","link":"#features","children":[]},{"level":3,"title":"footer","slug":"footer","link":"#footer","children":[]},{"level":3,"title":"MdContent","slug":"mdcontent","link":"#mdcontent","children":[]},{"level":3,"title":"Comment","slug":"comment","link":"#comment","children":[]}]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"自定义首页模块","slug":"自定义首页模块","link":"#自定义首页模块","children":[]}],"git":{"createdTime":1722742422000,"updatedTime":1723878320000,"contributors":[{"name":"lichangyou","email":"lichangyou@ztocc.com","commits":2}]},"filePathRelative":"docs/manage/project/过程管理/6.变更管理.md"}');export{N as comp,T as data};
