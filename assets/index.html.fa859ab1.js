import{_ as c,r as i,o as e,c as o,a as n,e as t,b as s,d as p}from"./app.5c7ccfba.js";var l="/assets/unpush-down-filter.256496e1.png",u="/assets/push-down-filter.999da9e2.png",r="/assets/unpush-down-limit.a875c3fe.png",d="/assets/push-down-limit.764057b5.png",k="/assets/unpush-down-projection.77c9e3a9.png",m="/assets/push-down-projection.1101cdfc.png";const h={},v=n("p",null,"\u5728\u7814\u7A76 Flink SQL \u4F18\u5316\u65F6\uFF0C\u6D89\u53CA\u5230\u4E00\u4E2A\u672F\u8BED\u2014\u2014\u300A\u8C13\u8BCD\u4E0B\u63A8\u300B\u3002\u867D\u7136\u77E5\u9053\u8C13\u8BCD\u4E0B\u63A8\u5927\u6982\u662F\u4E2A\u4EC0\u4E48\u6982\u5FF5\uFF0C\u4F46\u662F\u8111\u888B\u91CC\u8E66\u51FA\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u660E\u660E\u662F\u7531\u4E0A\u6E38\u5148\u8FDB\u884C\u8FC7\u6EE4\u540E\uFF0C\u5728\u63A8\u7ED9\u4E0B\u6E38\uFF0C\u4E3A\u4EC0\u4E48\u88AB\u79F0\u4E3A\u4E0B\u63A8\uFF1F\u62B1\u7740\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E5F\u5C31\u987A\u4FBF\u5B8C\u6574\u4E86\u89E3\u4E86\u4E00\u4E0B\u4EC0\u4E48\u662F\u8C13\u8BCD\u4E0B\u63A8\u3002",-1),b={class:"custom-container tip"},w={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},f=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),_=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),y=[f,_],S=n("p",{class:"custom-container-title"},"Tips",-1),D=n("p",null,"\u6B64\u5904\u63D0\u5230\u201C\u4E0A\u6E38\u201D\u3001\u201C\u4E0B\u6E38\u201D\u662F\u9488\u5BF9 SQL \u6267\u884C\u8BA1\u5212\u800C\u8A00",-1),P=p('<h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u8C13\u8BCD\u4E0B\u63A8\uFF08Predicate Push Down\uFF09\uFF0C\u53C8\u79F0\u4E3A Filter Push down\uFF0C\u662F\u4E00\u79CD\u67E5\u8BE2\u4F18\u5316\u6280\u672F\uFF0C\u7528\u4E8E\u5728\u6267\u884C\u67E5\u8BE2\u65F6\u5C06\u8C13\u8BCD\uFF08\u5373\u67E5\u8BE2\u6761\u4EF6\uFF09\u4E0B\u63A8\u5230\u6570\u636E\u6E90\uFF08\u5982\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF09\u4E2D\uFF0C\u5728\u6570\u636E\u88AB\u8BFB\u53D6\u524D\u5C3D\u53EF\u80FD\u7684\u8FC7\u6EE4\u6389\u65E0\u5173\u7684\u6570\u636E\uFF0C\u4ECE\u800C\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\u3002</p><p>\u8C13\u8BCD\uFF1A\u5728 SQL \u4E2D\uFF0C\u8C13\u8BCD\uFF08Predicate\uFF09\u5373\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u5C31\u662F\u8FD4\u56DE boolean \u503C\u7684\u51FD\u6570\uFF0C\u6216\u662F\u9690\u5F0F\u8F6C\u6362\u4E3A boolean \u7684\u51FD\u6570\u3002</p><p>\u4E0B\u63A8\uFF1A\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u662F\u4E0B\u63A8\uFF0C\u5355\u7EAF\u662F\u56E0\u4E3A\u6570\u636E\u5B58\u50A8\u5C42\u662F\u4F5C\u4E3A\u5E95\u5C42\u4E86\uFF0C\u901A\u8FC7 SQL \u67E5\u8BE2\u6570\u636E\u65F6\uFF0C\u4ECE\u6570\u636E\u6587\u4EF6\u4E2D\u8BFB\u53D6\u6570\u636E\u5230\u5185\u5B58\u52A0\u5DE5\u5230\u6700\u540E\u5C55\u73B0\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u662F\u81EA\u4E0B\u800C\u4E0A\u7684\u8FC7\u7A0B\u3002</p><h2 id="flink-sql-\u4E2D\u7684\u8C13\u8BCD\u4E0B\u63A8" tabindex="-1"><a class="header-anchor" href="#flink-sql-\u4E2D\u7684\u8C13\u8BCD\u4E0B\u63A8" aria-hidden="true">#</a> Flink SQL \u4E2D\u7684\u8C13\u8BCD\u4E0B\u63A8</h2><p>Flink SQL \u4E2D\u5B9E\u73B0\u5B8C\u6574\u8C13\u8BCD\u4E0B\u63A8\u7684\u4EC5 <code>FileSystemTableSource</code>\u3002</p><p>\u90A3\u4E48 Flink \u5230\u5E95\u63D0\u4F9B\u4E86\u54EA\u4E9B\u63A5\u53E3\u7528\u4E8E\u62D3\u5C55\u8C13\u8BCD\u4E0B\u63A8\u5462\uFF1F</p><ol><li><a href="#supportsfilterpushdown">SupportsFilterPushDown</a></li><li><a href="#supportslimitpushdown">SupportsLimitPushDown</a></li><li><a href="#supportsprojectionpushdown">SupportsProjectionPushDown</a></li></ol><h3 id="supportsfilterpushdown" tabindex="-1"><a class="header-anchor" href="#supportsfilterpushdown" aria-hidden="true">#</a> SupportsFilterPushDown</h3><p style="color:#fa5d19;">\u5E94\u7528\u573A\u666F\uFF1A\u5C06 where \u4E2D\u7684\u8FC7\u6EE4\u6761\u4EF6\u4E0B\u63A8\u5230 Source \u4E2D\u8FDB\u884C\u5904\u7406\uFF0C\u8FD9\u6837\u4E0D\u9700\u8981\u7684\u6570\u636E\u5C31\u53EF\u4EE5\u4E0D\u5F80\u4E0B\u6E38\u53D1\u9001\u4E86\uFF0C\u6027\u80FD\u4F1A\u6709\u63D0\u5347</p>',10),g=n("p",null,[n("img",{src:l,alt:""})],-1),x=p('<p><img src="'+u+`" alt=""></p><p>\u91CD\u5199 <code>JdbcDynamicTableSource</code>\uFF0C\u5B9E\u73B0\u65B9\u5F0F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcDynamicTableSource</span>
        <span class="token keyword">implements</span> <span class="token class-name">ScanTableSource</span><span class="token punctuation">,</span>
        <span class="token class-name">LookupTableSource</span><span class="token punctuation">,</span>
        <span class="token class-name">SupportsFilterPushDown</span><span class="token punctuation">,</span> <span class="token comment">// \u6B64\u5904\u65B0\u589E\u5B9E\u73B0 SupportsFilterPushDown \u63A5\u53E3</span>
        <span class="token class-name">SupportsProjectionPushDown</span><span class="token punctuation">,</span>
        <span class="token class-name">SupportsLimitPushDown</span> <span class="token punctuation">{</span>
          
          
          <span class="token comment">// \u7701\u7565\u5176\u4ED6\u539F\u5148\u4EE3\u7801</span>
          
          <span class="token doc-comment comment">/**
           * 1. \u8BE5\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u5C06filters(\u8FC7\u6EE4\u6761\u4EF6)\u5E94\u7528\u5230\u5F53\u524D\u7684DynamicTableSource\u4E0A
           * 2. \u8BE5\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2AResult\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u542B\u4E24\u4E2AList<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResolvedExpression</span><span class="token punctuation">&gt;</span></span>\u7C7B\u578B\u7684\u5C5E\u6027\uFF0C
           *    \u5206\u522B\u662FacceptedFilters(\u63A5\u53D7\u7684\u8FC7\u6EE4\u6761\u4EF6)\u548CremainingFilters(\u5269\u4F59\u7684\u8FC7\u6EE4\u6761\u4EF6)
           * 3. acceptedFilters\u662F\u6307\u90A3\u4E9B\u88ABDynamicTableSource\u4F7F\u7528\u7684filters\uFF0C
           *    \u4F46\u662F\u8FD9\u4E9Bfilters\u53EF\u80FD\u53EA\u662F\u5C3D\u53EF\u80FD\u5728\u539F\u57FA\u7840\u4E0A\u88AB\u5E94\u7528\uFF0C
           *    \u56E0\u6B64\uFF0C\u8FD9\u4E9Bfilters\u7684\u4FE1\u606F\u53EF\u4EE5\u5E2E\u52A9planner\u6765\u8C03\u6574\u5F53\u524Dplan\u7684\u6210\u672C\u4F30\u7B97
           * 4. remainingFilters\u662F\u6307\u90A3\u4E9B\u4E0D\u80FD\u88ABDynamicTableSource\u5B8C\u5168\u6D88\u8D39\u7684filters\uFF0C
           *    \u8FD9\u4E9Bfilters\u51B3\u5B9A\u4E86\u662F\u5426\u9700\u8981\u5728runtime\u9636\u6BB5\u7EE7\u7EED\u5E94\u7528filter\u64CD\u4F5C
           * 5. acceptedFilters\u548CremainingFilters\u4E0D\u80FD\u662Fdisjunctive lists\uFF0C
           *    \u4E00\u4E2Afilter\u53EF\u4EE5\u540C\u65F6\u51FA\u73B0\u5728\u8FD9\u4E24\u4E2Alist\u4E2D\uFF0C\u4F46\u662F\u6240\u6709\u7684filters\u5FC5\u987B\u81F3\u5C11\u51FA\u73B0\u5728\u5176\u4E2D\u4E00\u4E2Alist\u4E2D
           */</span>
          <span class="token annotation punctuation">@Override</span>
          <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">applyFilters</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ResolvedExpression</span><span class="token punctuation">&gt;</span></span> filters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>filters <span class="token operator">=</span> filters<span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filters<span class="token punctuation">,</span> <span class="token class-name">Lists</span><span class="token punctuation">.</span><span class="token function">newArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          
          <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">JdbcDynamicTableSource</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token class-name">JdbcDynamicTableSource</span> that <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">JdbcDynamicTableSource</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> that<span class="token punctuation">.</span>options<span class="token punctuation">)</span>
                <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readOptions<span class="token punctuation">,</span> that<span class="token punctuation">.</span>readOptions<span class="token punctuation">)</span>
                <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lookupOptions<span class="token punctuation">,</span> that<span class="token punctuation">.</span>lookupOptions<span class="token punctuation">)</span>
                <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>physicalRowDataType<span class="token punctuation">,</span> that<span class="token punctuation">.</span>physicalRowDataType<span class="token punctuation">)</span>
                <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialectName<span class="token punctuation">,</span> that<span class="token punctuation">.</span>dialectName<span class="token punctuation">)</span>
                <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span> that<span class="token punctuation">.</span>limit<span class="token punctuation">)</span>
                <span class="token comment">// Jdbc Connector \u91CD\u5199\u4E86 equals \u65B9\u6CD5\uFF0C\u9700\u8981\u52A0\u4E0A\u65B0\u589E\u7684 filters \u5C5E\u6027</span>
                <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filters<span class="token punctuation">,</span> that<span class="token punctuation">.</span>filters<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          
          <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>
              <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>readOptions<span class="token punctuation">,</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>lookupOptions<span class="token punctuation">,</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>physicalRowDataType<span class="token punctuation">,</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>dialectName<span class="token punctuation">,</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>limit<span class="token punctuation">,</span>
                <span class="token comment">// Jdbc Connector \u91CD\u5199\u4E86 hashCode \u65B9\u6CD5\uFF0C\u9700\u8981\u52A0\u4E0A\u65B0\u589E\u7684 filters \u5C5E\u6027</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>filters
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),j={class:"custom-container tip"},F={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},T=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),L=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),C=[T,L],O=n("p",{class:"custom-container-title"},"\u5176\u4ED6\u91CD\u5199\u65B9\u6848",-1),q=n("p",null,[s("\u4E0A\u8FF0\u5B9E\u73B0 "),n("code",null,"SupportsFilterPushDown"),s(" \u63A5\u53E3\uFF0C\u4EC5\u5C06\u8FC7\u6EE4\u6761\u4EF6\u5E94\u7528\u4E8E DynamicTableSource\uFF0C\u5BF9\u4E8E Jdbc Connector \u800C\u8A00\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u8FC7\u6EE4\u6761\u4EF6\u540C\u65F6\u5E94\u7528\u4E8E\u8FD0\u884C\u65F6 \uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u5728 "),n("code",null,"getScanRuntimeProvider"),s(" \u65B9\u6CD5\u4E2D\uFF0C\u62FF\u5230\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u5C06\u5176\u62FC\u63A5\u5230"),n("code",null,"query"),s("\u8BED\u53E5\u4E2D\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5728\u6570\u636E\u5E93\u8BFB\u53D6\u65F6\u5C31\u8FC7\u6EE4\u5230\u4E0D\u9700\u8981\u7684\u6570\u636E")],-1),J=n("h3",{id:"supportslimitpushdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#supportslimitpushdown","aria-hidden":"true"},"#"),s(" SupportsLimitPushDown")],-1),M=n("p",{style:{color:"#fa5d19"}},"\u5E94\u7528\u573A\u666F\uFF1A\u5C06 limit \u5B50\u53E5\u4E0B\u63A8\u5230 Source \u4E2D\uFF0C\u5728\u6279\u573A\u666F\u4E2D\u53EF\u4EE5\u9650\u5236\u6570\u636E\u7684\u6D41\u52A8\u91CF",-1),Z=n("p",null,[n("img",{src:r,alt:""})],-1),B=n("p",null,[n("img",{src:d,alt:""})],-1),E={class:"custom-container tip"},R={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},N=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),V=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),z=[N,V],Q=p('<p class="custom-container-title">\u5B9E\u73B0\u65B9\u5F0F</p><p>Limit \u4E0B\u63A8\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4E3B\u8981\u5C31\u662F\u5728<code>DynamicTableSource</code> \u7C7B\u4E2D\u5B9A\u4E49 <code>limit</code> \u5C5E\u6027\uFF0C\u7136\u540E\u5B9E\u73B0 <code>SupportsLimitPushDown</code> \u63A5\u53E3\uFF0C\u5C06\u4F20\u5165\u7684 Limit \u503C\u8D4B\u7ED9\u5B9A\u4E49\u7684 <code>limit</code> \u5C5E\u6027\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u4F7F\u7528 <code>limit</code> \u5C5E\u6027\u9650\u5236\u6570\u636E\u6761\u6570\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <code>JdbcDynamicTableSource</code>\u3001<code>HiveTableSource</code>\u3001<code>FileSystemTableSource</code></p>',2),H=n("h3",{id:"supportsprojectionpushdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#supportsprojectionpushdown","aria-hidden":"true"},"#"),s(" SupportsProjectionPushDown")],-1),A=n("p",{style:{color:"#fa5d19"}},"\u5E94\u7528\u573A\u666F\uFF1A\u5C06\u4E0B\u6E38\u7528\u5230\u7684\u5B57\u6BB5\u4E0B\u63A8\u5230 Source \u4E2D\uFF0C\u7136\u540E Source \u4E2D\u53EF\u4EE5\u505A\u5230\u53EA\u53D6\u8FD9\u4E9B\u5B57\u6BB5\uFF0C\u4E0D\u4F7F\u7528\u7684\u5B57\u6BB5\u5C31\u4E0D\u5F80\u4E0B\u6E38\u53D1",-1),G=n("p",null,[n("img",{src:k,alt:""})],-1),I=p('<p><img src="'+m+'" alt=""></p><h2 id="\u5176\u4ED6\u4F18\u5316\u62D3\u5C55-source-\u80FD\u529B\u7684\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u4F18\u5316\u62D3\u5C55-source-\u80FD\u529B\u7684\u63A5\u53E3" aria-hidden="true">#</a> \u5176\u4ED6\u4F18\u5316\u62D3\u5C55 Source \u80FD\u529B\u7684\u63A5\u53E3</h2><h3 id="supportspartitionpushdown" tabindex="-1"><a class="header-anchor" href="#supportspartitionpushdown" aria-hidden="true">#</a> SupportsPartitionPushDown</h3><p style="color:#fa5d19;">\u5E94\u7528\u573A\u666F\uFF1A\u5E38\u7528\u4E8E\u6279\u5904\u7406\u573A\u666F\uFF0C\u5E26\u6709 Partition \u5C5E\u6027\u7684 Source\uFF0C\u5C06\u6240\u6709\u7684 Partition \u6570\u636E\u83B7\u53D6\u5230\u4E4B\u540E\uFF0C\u7136\u540E\u5728 Source \u5C42\u9762\u51B3\u5B9A\u54EA\u4E2A Source \u7B97\u5B50\u8BFB\u53D6\u54EA\u4E9B Partition \u7684\u6570\u636E\uFF0C\u800C\u4E0D\u5FC5\u5728 Source \u540E\u8FC7\u6EE4\u3002\u6BD4\u5982 Hive \u8868\u7684 Partition\uFF0C\u5C06\u6240\u6709 Partition \u83B7\u53D6\u5230\u4E4B\u540E\uFF0C\u7136\u540E\u51B3\u5B9A\u67D0\u4E2A Source \u7B97\u5B50\u5E94\u8BE5\u8BFB\u53D6\u54EA\u4E9B Partition</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>',5);function K(U,W){const a=i("v-icon");return e(),o("div",null,[v,n("div",b,[(e(),o("svg",w,y)),S,D]),P,t(a,{name:"pr-times-circle",fill:"#E84B3C"}),s(" \u4EE5 JDBC Connector \u4E3A\u4F8B\uFF0C\u4EE5\u4E0B\u662F\u9ED8\u8BA4\u672A\u5B9E\u73B0`SupportsFilterPushDown`\u65F6\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u53EF\u4EE5\u5F88\u660E\u663E\u7684\u770B\u5230\uFF0C\u6709\u4E00\u4E2A\u4E13\u95E8\u7684\u7B97\u5B50\u94FE\u8282\u70B9\u7528\u4E8E\u5904\u7406\u8FC7\u6EE4\u6761\u4EF6 "),g,t(a,{name:"pr-check-circle",fill:"#31C46E"}),s(" \u4EE5\u4E0B\u662F\u91CD\u5199\u4E86 `JdbcDynamicTableSource` \uFF0C\u5B9E\u73B0\u4E86 `SupportsFilterPushDown` \u63A5\u53E3\u540E\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u53EF\u4EE5\u770B\u5230 Flink \u5C06 where \u7684\u8FC7\u6EE4\u6761\u4EF6\u4E0B\u63A8\u5230\u4E86 Source \u7AEF\uFF0C\u5728\u67E5\u8BE2\u65F6\u5C31\u8FC7\u6EE4\u6389\u4E0D\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E "),x,n("div",j,[(e(),o("svg",F,C)),O,q]),J,M,t(a,{name:"pr-times-circle",fill:"#E84B3C"}),s(" \u8FD8\u662F\u4EE5 JDBC Connector \u4E3A\u4F8B\uFF0C\u4EE5\u4E0B\u662F\u9ED8\u8BA4\u672A\u5B9E\u73B0`SupportsLimitPushDown`\u65F6\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u53EA\u6709\u4E00\u4E2A\u4E13\u95E8\u7684\u7B97\u5B50\u94FE\u8282\u70B9\u7528\u4E8E\u5904\u7406 Limit \u9650\u5236\uFF0C\u6B64\u65F6\uFF0C\u4ECE`TableSourceScan`\u8282\u70B9\u5230`Limit`\u8282\u70B9\uFF0C\u6570\u636E\u7684\u6D41\u52A8\u91CF\u4F1A\u5F88\u5927\uFF0C\u800C\u4E14 Scan \u7684\u6548\u7387\u5C31\u4F1A\u5F71\u54CD\u5230\u6574\u4F53\u7684\u6267\u884C\u6548\u7387 "),Z,t(a,{name:"pr-check-circle",fill:"#31C46E"}),s(" \u4EE5\u4E0B\u5B9E\u73B0\u4E86 `SupportsLimitPushDown` \u63A5\u53E3\u540E\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u53EF\u4EE5\u770B\u5230 Flink \u5C06 Limit \u6761\u4EF6\u4E0B\u63A8\u5230\u4E86 Source \u7AEF\uFF0C\u5728\u67E5\u8BE2\u65F6\u5C31\u9650\u5236\u4E86\u6570\u636E\u6761\u6570\uFF0C\u4ECE\u800C\u6574\u4E2A\u7B97\u5B50\u94FE\u4E2D\u7684\u6D41\u52A8\u7684\u6570\u636E\u91CF\u51CF\u5C11\uFF0C\u53EF\u4EE5\u5728\u4E00\u4E9B\u6279\u5904\u7406\u573A\u666F\u5927\u5927\u63D0\u9AD8\u6548\u7387\uFF0C\u4EE5\u53CA\u51CF\u5C11 source \u7AEF\u7684\u67E5\u8BE2\u538B\u529B "),B,n("div",E,[(e(),o("svg",R,z)),Q]),H,A,t(a,{name:"pr-times-circle",fill:"#E84B3C"}),s(" \u4ECE\u4E0B\u56FE\u53EF\u4EE5\u770B\u51FA\uFF0C\u5728\u672A\u5B9E\u73B0`SupportsProjectionPushDown`\u65F6\uFF0C\u4E0B\u6E38\u53EA\u9700\u8981\u6240\u6709\u5B57\u6BB5\u4E2D\u7684\u4E00\u90E8\u5206\uFF0Csource \u7AEF\u4F9D\u65E7\u4F1A\u83B7\u53D6\u5230\u6240\u6709\u5B57\u6BB5\u5185\u5BB9\uFF0C\u5E76\u4E14\u9700\u8981\u4E00\u4E2A\u5355\u72EC\u7684 select \u7B97\u5B50\u94FE\u6765\u7B5B\u9009\u4E0B\u6E38\u9700\u8981\u7684\u5217 "),G,t(a,{name:"pr-check-circle",fill:"#31C46E"}),s(" \u4EE5\u4E0B\u65F6\u5B9E\u73B0\u4E86 `SupportsProjectionPushDown` \u63A5\u53E3\u540E\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u53EF\u4EE5\u770B\u5230 Flink \u67E5\u8BE2\u5217\u4E0B\u63A8\u5230\u4E86 Source \u7AEF\uFF0C\u5728\u67E5\u8BE2\u65F6\u5C31\u9650\u5236\u4E86\u67E5\u8BE2\u5217\uFF0C\u5E76\u51CF\u5C11\u4E86\u7B97\u5B50\u94FE\u957F\u5EA6 "),I])}var Y=c(h,[["render",K],["__file","index.html.vue"]]);export{Y as default};
