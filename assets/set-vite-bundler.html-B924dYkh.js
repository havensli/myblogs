import{_ as l,r as i,o as p,c as o,b as n,d as s,e as a,a as t}from"./app-CNvywuHy.js";const c={},r=t('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>我们默认配置了 postcss 的 plugins ，这是保证项目启动的基本配置。</p></div>',1),u={href:"https://v2.vuepress.vuejs.org/reference/bundler/vite.html",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置"},[n("span",null,"配置")])],-1),v=n("h3",{id:"vitebundler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vitebundler"},[n("span",null,"viteBundler")])],-1),k=n("li",null,"描述：自定义打包配置",-1),m=n("li",null,"viteOptions：接受 Vite 的所有选项。",-1),h={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    viteBundler<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token keyword">do</span> somthing</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token keyword">do</span> somthing</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(_,f){const e=i("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[s("如果你不满意我们现有的打包或者想要自定义打包配置，你可以使用该功能，该配置为 vuepress@2.x 提供的基于 Vite 的打包配置，"),n("a",u,[s("详情参考"),a(e)]),s("，")]),d,v,n("ul",null,[k,n("li",null,[s("配置项： "),n("ul",null,[m,n("li",null,[s("vuePluginOptions： 接受 "),n("a",h,[s("@vitejs/plugin-vue"),a(e)]),s(" 的所有选项")])])])]),g])}const x=l(c,[["render",b],["__file","set-vite-bundler.html.vue"]]),y=JSON.parse('{"path":"/docs/theme/set-vite-bundler.html","title":"用户自定义配置打包","lang":"zh-CN","frontmatter":{"title":"用户自定义配置打包","date":"2022-08-21T17:58:24.000Z"},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"viteBundler","slug":"vitebundler","link":"#vitebundler","children":[]}]}],"git":{"createdTime":1722742422000,"updatedTime":1722742422000,"contributors":[{"name":"lichangyou","email":"lichangyou@ztocc.com","commits":1}]},"filePathRelative":"docs/theme/set-vite-bundler.md"}');export{x as comp,y as data};
