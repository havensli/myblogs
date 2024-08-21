import{_ as s,o as n,c as a,a as e}from"./app-eHcaScFC.js";const p={},t=e(`<p>在 <code>vuepress-theme-reco@2.x</code> 中，<code>左侧边栏（sideBar）</code> 被更改为 <code>系列（series）</code>，由两部分原因：</p><ol><li>在 <code>vuepress-theme-reco@1.x</code> 中，侧边栏被拆分为了 <code>左侧边栏（sidebar）</code> 和 <code>右侧边栏（subSidebar）</code>，多个文档可以通过左侧边栏来聚合在一起，表达它们之间的联系，右侧边栏展示的则是当前页面的目录结构，因为考虑到 <code>vuepress</code> 默认主题将他们都放在左侧侧边栏会将其表现的没有重点，但是通过 <code>sidebar</code> 和 <code>subSidebar</code> 来表示 <code>左侧边栏</code> 和 <code>右侧边栏</code>，语意化又不太好；</li><li>考虑到需要放在一起的文档一定是一个 “系列” 文档，比如教程、文集等，故采用了 <code>series</code>。</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p><strong>普通</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// .vuepress/config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>分组</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// .vuepress/config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;基础&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 默认展开，true 为折叠</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;高级&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;series&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;comments&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>异常</strong></p><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>如果左侧出现文章的名称显示成了文档的路径，可以把 children 变为完整模式。</p></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 省略模式</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 完整模式</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;/vuepress-theme-reco/introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/vuepress-theme-reco/usage&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function i(c,o){return n(),a("div",null,l)}const u=s(p,[["render",i],["__file","series.html.vue"]]),d=JSON.parse('{"path":"/docs/theme/series.html","title":"系列","lang":"zh-CN","frontmatter":{"title":"系列","date":"2021-11-06T23:36:01.000Z"},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1722742422000,"updatedTime":1722742422000,"contributors":[{"name":"lichangyou","email":"lichangyou@ztocc.com","commits":1}]},"filePathRelative":"docs/theme/series.md"}');export{u as comp,d as data};
