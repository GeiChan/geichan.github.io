import{_ as t,o as a,c as n,a as e,d,b as s}from"./app.5c7ccfba.js";const o={},l=d('<h2 id="_1-\u5FEB\u7167\u4ECB\u7ECD\u548C\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u5FEB\u7167\u4ECB\u7ECD\u548C\u4F5C\u7528" aria-hidden="true">#</a> 1. \u5FEB\u7167\u4ECB\u7ECD\u548C\u4F5C\u7528</h2><p>HDFS snapshot \u662F HDFS \u6574\u4E2A\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u6216\u8005\u67D0\u4E2A\u76EE\u5F55\u5728\u67D0\u4E2A\u65F6\u523B\u7684\u955C\u50CF\u3002\u8BE5\u955C\u50CF\u5E76\u4E0D\u4F1A\u968F\u7740\u6E90\u76EE\u5F55\u7684\u6539\u53D8\u800C\u8FDB\u884C\u52A8\u6001\u7684\u66F4\u65B0\u3002\u53EF\u4EE5\u5C06\u5FEB\u7167\u7406\u89E3\u4E3A\u62CD\u7167\u7247\u65F6\u7684\u90A3\u4E00\u77AC\u95F4\u7684\u6295\u5F71\uFF0C\u8FC7\u4E86\u90A3\u4E2A\u65F6\u95F4\u4E4B\u540E\uFF0C\u53C8\u4F1A\u6709\u65B0\u7684\u4E00\u4E2A\u6295\u5F71\u3002</p><p>HDFS \u5FEB\u7167\u7684\u6838\u5FC3\u529F\u80FD\u5305\u62EC\uFF1A\u6570\u636E\u6062\u590D\u3001\u6570\u636E\u5907\u4EFD\u3001\u6570\u636E\u6D4B\u8BD5\u3002</p><h3 id="\u6570\u636E\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6062\u590D" aria-hidden="true">#</a> \u6570\u636E\u6062\u590D</h3><p>\u53EF\u4EE5\u901A\u8FC7\u6EDA\u52A8\u7684\u65B9\u5F0F\u6765\u5BF9\u91CD\u8981\u7684\u76EE\u5F55\u8FDB\u884C\u521B\u5EFA snapshot \u7684\u64CD\u4F5C\uFF0C\u8FD9\u6837\u5728\u7CFB\u7EDF\u4E2D\u5C31\u5B58\u5728\u9488\u5BF9\u67D0\u4E2A\u76EE\u5F55\u7684\u591A\u4E2A\u5FEB\u7167\u7248\u672C\u3002\u5F53\u7528\u6237\u8BEF\u5220\u9664\u6389\u67D0\u4E2A\u6587\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6700\u65B0\u7684 snapshot \u6765\u8FDB\u884C\u76F8\u5173\u7684\u6062\u590D\u64CD\u4F5C\u3002</p><h3 id="\u6570\u636E\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5907\u4EFD" aria-hidden="true">#</a> \u6570\u636E\u5907\u4EFD</h3><p>\u53EF\u4EE5\u4F7F\u7528 snapshot \u6765\u8FDB\u884C\u6574\u4E2A\u96C6\u7FA4\uFF0C\u6216\u8005\u67D0\u4E9B\u76EE\u5F55\u3001\u6587\u4EF6\u7684\u5907\u4EFD\u3002\u7BA1\u7406\u5458\u4EE5\u67D0\u4E2A\u65F6\u523B\u7684 snapshot \u4F5C\u4E3A\u5907\u4EFD\u7684\u8D77\u59CB\u7ED3\u70B9\uFF0C\u7136\u540E\u901A\u8FC7\u6BD4\u8F83\u4E0D\u540C\u5907\u4EFD\u4E4B\u95F4\u5DEE\u5F02\u6027\uFF0C\u6765\u8FDB\u884C\u589E\u91CF\u5907\u4EFD\u3002</p><h3 id="\u6570\u636E\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6D4B\u8BD5" aria-hidden="true">#</a> \u6570\u636E\u6D4B\u8BD5</h3><p>\u5728\u67D0\u4E9B\u91CD\u8981\u6570\u636E\u4E0A\u8FDB\u884C\u6D4B\u8BD5\u6216\u8005\u5B9E\u9A8C\uFF0C\u53EF\u80FD\u4F1A\u76F4\u63A5\u5C06\u539F\u59CB\u7684\u6570\u636E\u7834\u574F\u6389\u3002\u53EF\u4EE5\u4E34\u65F6\u7684\u4E3A\u7528\u6237\u9488\u5BF9\u8981\u64CD\u4F5C\u7684\u6570\u636E\u6765\u521B\u5EFA\u4E00\u4E2A snapshot\uFF0C\u7136\u540E\u8BA9\u7528\u6237\u5728\u5BF9\u5E94\u7684 snapshot \u4E0A\u8FDB\u884C\u76F8\u5173\u7684\u5B9E\u9A8C\u548C\u6D4B\u8BD5\uFF0C\u4ECE\u800C\u907F\u514D\u5BF9\u539F\u59CB\u6570\u636E\u7684\u7834\u574F\u3002</p><h2 id="_2-\u5FEB\u7167\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-\u5FEB\u7167\u76EE\u5F55" aria-hidden="true">#</a> 2. \u5FEB\u7167\u76EE\u5F55</h2><p>\u5FEB\u7167\u6709\u4E00\u4E2A\u6839\u672C\u7684\u539F\u5219\u9700\u8981\u8BB0\u4F4F\uFF1A\u5FEB\u7167\u4E0D\u662F\u7B80\u5355\u7684\u6570\u636E\u62F7\u8D1D\uFF0C\u5FEB\u7167\u53EA\u505A\u5DEE\u5F02\u7684\u8BB0\u5F55\u3002\u8FD9\u4E00\u539F\u5219\u5728\u5176\u4ED6\u5F88\u591A\u7CFB\u7EDF\u7684\u5FEB\u7167\u6982\u5FF5\u4E2D\u90FD\u662F\u9002\u7528\u7684\uFF0C\u6BD4\u5982\u78C1\u76D8\u5FEB\u7167\uFF0C\u4E5F\u662F\u4E0D\u4FDD\u5B58\u771F\u5B9E\u6570\u636E\u7684\u3002\u56E0\u4E3A\u4E0D\u4FDD\u5B58\u5B9E\u9645\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u5FEB\u7167\u7684\u751F\u6210\u5F80\u5F80\u975E\u5E38\u8FC5\u901F\u3002</p><p>\u5728 HDFS \u4E2D\uFF0C\u5982\u679C\u5728\u5176\u4E2D\u4E00\u4E2A\u76EE\u5F55\u6BD4\u5982 <code>/A</code> \u4E0B\u521B\u5EFA\u4E00\u4E2A\u5FEB\u7167\uFF0C\u5219\u5FEB\u7167\u6587\u4EF6\u4E2D\u5C06\u4F1A\u5B58\u5728\u4E0E <code>/A</code> \u76EE\u5F55\u4E0B\u5B8C\u5168\u4E00\u81F4\u7684\u5B50\u76EE\u5F55\u6587\u4EF6\u7ED3\u6784\u4EE5\u53CA\u76F8\u5E94\u7684\u5C5E\u6027\u4FE1\u606F\uFF0C\u901A\u8FC7\u547D\u4EE4\u4E5F\u80FD\u770B\u5230\u5FEB\u7167\u91CC\u9762\u5177\u4F53\u7684\u6587\u4EF6\u5185\u5BB9\u3002\u4F46\u662F\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u5FEB\u7167\u5DF2\u7ECF\u5BF9\u6B64\u6570\u636E\u8FDB\u884C\u5B8C\u5168\u7684\u62F7\u8D1D \u3002\u8FD9\u91CC\u9075\u5FAA\u4E00\u4E2A\u539F\u5219\uFF1A\u5BF9\u4E8E\u5927\u591A\u4E0D\u53D8\u7684\u6570\u636E\uFF0C\u4F60\u6240\u770B\u5230\u7684\u6570\u636E\u5176\u5B9E\u662F\u5F53\u524D\u7269\u7406\u8DEF\u5F84\u6240\u6307\u7684\u5185\u5BB9\uFF0C\u800C\u53D1\u751F\u53D8\u66F4\u7684 inode \u6570\u636E\u624D\u4F1A\u88AB\u5FEB\u7167\u989D\u5916\u62F7\u8D1D\uFF0C\u4E5F\u5C31\u662F\u6240\u8BF4\u7684\u5DEE\u5F02\u62F7\u8D1D\u3002</p><p>inode \u8BD1\u6210\u4E2D\u6587\u5C31\u662F\u7D22\u5F15\u8282\u70B9\uFF0C\u5B83\u7528\u6765\u5B58\u653E\u6587\u4EF6\u53CA\u76EE\u5F55\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u5305\u542B\u65F6\u95F4\u3001\u540D\u79F0\u3001\u62E5\u6709\u8005\u3001\u6240\u5728\u7EC4\u7B49\u4FE1\u606F\u3002</p><p>HDFS \u5FEB\u7167\u4E0D\u4F1A\u590D\u5236 DataNode \u4E2D\u7684\u5757\uFF08\u6CA1\u6709\u6570\u636E\u590D\u5236\uFF09\uFF0C\u53EA\u8BB0\u5F55\u4E86\u5757\u5217\u8868\u548C\u6587\u4EF6\u5927\u5C0F\u3002</p><p>HDFS \u5FEB\u7167\u4E0D\u4F1A\u5BF9\u5E38\u89C4 HDFS \u64CD\u4F5C\u4EA7\u751F\u4E0D\u5229\u5F71\u54CD\uFF0C\u4FEE\u6539\u8BB0\u5F55\u6309\u9006\u65F6\u9488\u987A\u5E8F\u8FDB\u884C\uFF08\u5F53\u524D\u6570\u636E\u6392\u5728\u6700\u524D\u9762\uFF09\uFF0C\u56E0\u6B64\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5F53\u524D\u6570\u636E\u3002\u5FEB\u7167\u6570\u636E\u901A\u8FC7\u4ECE\u5F53\u524D\u6570\u636E\u4E2D\u51CF\u53BB\u4FEE\u6539\u6765\u8BA1\u7B97\u5FEB\u7167\u6570\u636E\u3002</p><p>\u53EA\u8981\u76EE\u5F55\u88AB\u8BBE\u7F6E\u4E3A snapshottable\uFF0C\u5C31\u53EF\u4EE5\u5728\u4EFB\u4F55\u76EE\u5F55\u4E0A\u62CD\u6444\u5FEB\u7167\uFF0C\u4E00\u4E2A\u542F\u7528\u5FEB\u7167\u7684\u76EE\u5F55\u80FD\u591F\u540C\u65F6\u5BB9\u7EB3 65536 \u4E2A\u5FEB\u7167\uFF0C\u5BF9\u4E8E\u80FD\u591F\u542F\u7528\u5FEB\u7167\u7684\u76EE\u5F55\u6570\u91CF\u4E0D\u505A\u9650\u5236\uFF0C\u7BA1\u7406\u5458\u6216\u8BB8\u4F1A\u5C06\u6BCF\u4E2A\u76EE\u5F55\u8BBE\u7F6E\u4E3A\u542F\u7528\u5FEB\u7167\u3002</p><p>\u5982\u679C\u5728\u542F\u7528\u5FEB\u7167\u7684\u76EE\u5F55\u4E2D\u5B58\u5728\u5FEB\u7167\uFF0C\u8BE5\u76EE\u5F55\u5728\u6240\u6709\u7684\u5FEB\u7167\u5220\u9664\u4E4B\u524D\u65E2\u4E0D\u53EF\u4EE5\u88AB\u5220\u9664\u4E5F\u4E0D\u53EF\u4EE5\u91CD\u547D\u540D\u3002\u5D4C\u5957\u542F\u7528\u5FEB\u7167\u7684\u76EE\u5F55\u76EE\u524D\u662F\u4E0D\u652F\u6301\u7684\u3002\u6362\u53E5\u8BDD\u8BF4\u5982\u679C\u4E00\u4E2A\u76EE\u5F55\u7684\u7956\u5148\u6216\u8005\u540E\u4EE3\u662F\u542F\u7528\u5FEB\u7167\u7684\u76EE\u5F55\uFF0C\u90A3\u4E48\u8BE5\u76EE\u5F55\u662F\u4E0D\u80FD\u8BBE\u7F6E\u4E3A snapshottable\u3002</p><h2 id="_3-snapshot-\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-snapshot-\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> 3. Snapshot \u76F8\u5173\u547D\u4EE4</h2><h5 id="\u542F\u7528\u5FEB\u7167\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u5FEB\u7167\u529F\u80FD" aria-hidden="true">#</a> \u542F\u7528\u5FEB\u7167\u529F\u80FD</h5><p><code>hdfs dfsadmin -allowSnapshot &lt;path&gt;</code></p><h5 id="\u505C\u7528\u5FEB\u7167\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u505C\u7528\u5FEB\u7167\u529F\u80FD" aria-hidden="true">#</a> \u505C\u7528\u5FEB\u7167\u529F\u80FD</h5><p><code>hdfs dfsadmin -disallowSnapshot &lt;path&gt;</code></p><h5 id="\u5217\u51FA\u5FEB\u7167\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA\u5FEB\u7167\u76EE\u5F55" aria-hidden="true">#</a> \u5217\u51FA\u5FEB\u7167\u76EE\u5F55</h5><p><code>hdfs lsSnapshottableDir</code></p>',24),i={class:"custom-container tip"},r={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},h=e("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),c=e("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),p=[h,c],u=e("p",{class:"custom-container-title"},"Tips",-1),_=e("p",null,"\u666E\u901A\u7528\u6237\u53EA\u4F1A\u5217\u51FA\u53EF\u7528\u7684\u5FEB\u7167\u76EE\u5F55\uFF0C\u8D85\u7EA7\u7BA1\u7406\u5458\u4F1A\u5217\u51FA\u6240\u6709\u5FEB\u7167\u76EE\u5F55",-1),f=d('<h5 id="\u521B\u5EFA\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5FEB\u7167" aria-hidden="true">#</a> \u521B\u5EFA\u5FEB\u7167</h5><p><code>hdfs dfs -createSnapshot &lt;snapshotDir&gt; [&lt;snapshotName&gt;]</code></p><h5 id="\u5220\u9664\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5FEB\u7167" aria-hidden="true">#</a> \u5220\u9664\u5FEB\u7167</h5><p><code>hdfs dfs -deleteSnapshot &lt;snapshotDir&gt; &lt;snapshotName&gt;</code></p><h5 id="\u91CD\u547D\u540D\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D\u5FEB\u7167" aria-hidden="true">#</a> \u91CD\u547D\u540D\u5FEB\u7167</h5><p><code>hdfs dfs -renameSnapshot &lt;snapshotDir&gt; &lt;oldName&gt; &lt;newName&gt;</code></p><h5 id="\u5BF9\u6BD4\u4E24\u4E2A\u5FEB\u7167\u7684\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4\u4E24\u4E2A\u5FEB\u7167\u7684\u5DEE\u5F02" aria-hidden="true">#</a> \u5BF9\u6BD4\u4E24\u4E2A\u5FEB\u7167\u7684\u5DEE\u5F02</h5><p><code>hdfs snapshotDiff &lt;snapshotDir&gt; &lt;snapshotName1&gt; &lt;snapshotName2&gt;</code></p>',8),m={class:"custom-container tip"},v={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},b=e("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),g=e("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),x=[b,g],k=e("p",{class:"custom-container-title"},"Tips",-1),S=e("p",null,[e("code",null,"+"),s(" \u8868\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u88AB\u521B\u5EFA")],-1),w=e("p",null,[e("code",null,"-"),s(" \u8868\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u88AB\u5220\u9664")],-1),D=e("p",null,[e("code",null,"M"),s(" \u8868\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u88AB\u4FEE\u6539")],-1),M=e("p",null,[e("code",null,"R"),s(" \u8868\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u88AB\u91CD\u547D\u540D")],-1),N=e("h5",{id:"\u5220\u9664\u5FEB\u7167\u76EE\u5F55",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5220\u9664\u5FEB\u7167\u76EE\u5F55","aria-hidden":"true"},"#"),s(" \u5220\u9664\u5FEB\u7167\u76EE\u5F55")],-1),C=e("p",null,[e("code",null,"hdfs dfs -rm -r -f <snapshotDir>")],-1),T={class:"custom-container danger"},E={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},y=e("path",{d:"M297.64 123.31C133.55 123.31 0 256.83 0 420.94c0 164.11 133.55 297.64 297.64 297.64 164.09 0 297.64-133.52 297.64-297.64 0-164.12-133.55-297.63-297.64-297.63Zm107.8 333.25H189.83c-19.541 0-35.62-16.079-35.62-35.62 0-19.541 16.079-35.62 35.62-35.62h215.61c19.541 0 35.62 16.079 35.62 35.62 0 19.541-16.079 35.62-35.62 35.62Z",style:{fill:"#f55","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.179)"},null,-1),H=[y],F=e("p",{class:"custom-container-title"},"Tips",-1),O=e("p",null,"\u62E5\u6709\u5FEB\u7167\u6587\u4EF6\u7684\u76EE\u5F55\u4E0D\u5141\u8BB8\u88AB\u5220\u9664!",-1),A=d(`<h2 id="_4-\u8BDD\u5916\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_4-\u8BDD\u5916\u5185\u5BB9" aria-hidden="true">#</a> 4. \u8BDD\u5916\u5185\u5BB9</h2><h3 id="\u5173\u4E8E-hdfs-dfs-count-q-\u7EDF\u8BA1\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-hdfs-dfs-count-q-\u7EDF\u8BA1\u547D\u4EE4" aria-hidden="true">#</a> \u5173\u4E8E <code>hdfs dfs -count -q</code> \u7EDF\u8BA1\u547D\u4EE4</h3><p>\u5728 HDFS \u4E2D\uFF0C\u4F7F\u7528 <code>hdfs dfs -count -q</code> \u547D\u4EE4\u7EDF\u8BA1\u6587\u4EF6\u6570\u548C\u5927\u5C0F\u65F6\uFF0C\u4F1A\u5305\u62EC\u5FEB\u7167\uFF08snapshots\uFF09\u4E2D\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5927\u5C0F</p><p>\u5177\u4F53\u6765\u8BF4\uFF0C<code>hdfs dfs -count -q</code> \u547D\u4EE4\u7528\u4E8E\u9012\u5F52\u5730\u7EDF\u8BA1\u6307\u5B9A\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u6570\u3001\u76EE\u5F55\u6570\u548C\u7A7A\u95F4\u914D\u989D\u4F7F\u7528\u60C5\u51B5\u3002\u5B83\u7684\u8F93\u51FA\u7ED3\u679C\u5305\u62EC\uFF1A</p><ul><li>\u76EE\u5F55\u6570\uFF08DIR_COUNT\uFF09</li><li>\u6587\u4EF6\u6570\uFF08FILE_COUNT\uFF09</li><li>\u78C1\u76D8\u7A7A\u95F4\u5927\u5C0F\uFF08SPACE_CONSUMED\uFF09</li><li>\u914D\u989D\uFF08QUOTA\uFF09</li><li>\u7A7A\u95F4\u914D\u989D\uFF08SPACE_QUOTA\uFF09</li></ul><p>\u7531\u4E8E HDFS \u7684\u5FEB\u7167\u673A\u5236\u5141\u8BB8\u7528\u6237\u4FDD\u5B58\u76EE\u5F55\u53CA\u5176\u5185\u5BB9\u5728\u7279\u5B9A\u65F6\u95F4\u70B9\u7684\u72B6\u6001\uFF0C\u5FEB\u7167\u4E2D\u7684\u6587\u4EF6\u88AB\u89C6\u4E3A\u539F\u59CB\u6587\u4EF6\u7684\u53EA\u8BFB\u526F\u672C\u3002\u56E0\u6B64\uFF0C\u5F53\u4F60\u5728\u4E00\u4E2A\u5305\u542B\u5FEB\u7167\u7684\u76EE\u5F55\u4E0A\u8FD0\u884C <code>hdfs dfs -count -q</code> \u547D\u4EE4\u65F6\uFF0C\u5FEB\u7167\u4E2D\u7684\u6587\u4EF6\u548C\u5176\u5360\u7528\u7684\u7A7A\u95F4\u4F1A\u8BA1\u5165\u7EDF\u8BA1\u7ED3\u679C\u4E2D\u3002</p><p><strong>\u5177\u4F53\u8F93\u51FA\u8BF4\u660E</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">## \u6267\u884C\u7684\u547D\u4EE4</span>
hdfs dfs <span class="token operator">-</span>count <span class="token operator">-</span>q <span class="token operator">/</span><span class="token keyword">user</span><span class="token operator">/</span><span class="token keyword">data</span>

<span class="token comment">## \u8F93\u51FA\u7684\u7ED3\u679C</span>
QUOTA  REM_QUOTA  DIR_COUNT  FILE_COUNT  CONTENT_SIZE  SPACE_QUOTA  REM_SPACE_QUOTA  SPACE_CONSUMED  NAME
none   inf        <span class="token number">10</span>         <span class="token number">100</span>         <span class="token number">5000000</span>       none         inf              <span class="token number">5000000</span>         <span class="token operator">/</span><span class="token keyword">user</span><span class="token operator">/</span><span class="token keyword">data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>DIR_COUNT</code> \u662F\u76EE\u5F55\u6570\u91CF\uFF0C\u5305\u62EC\u539F\u59CB\u76EE\u5F55\u548C\u5FEB\u7167\u4E2D\u5305\u542B\u7684\u76EE\u5F55\u3002</li><li><code>FILE_COUNT</code> \u662F\u6587\u4EF6\u6570\u91CF\uFF0C\u5305\u62EC\u539F\u59CB\u6587\u4EF6\u548C\u5FEB\u7167\u4E2D\u5305\u542B\u7684\u6587\u4EF6\u3002</li><li><code>SPACE_CONSUMED</code> \u662F\u76EE\u5F55\u53CA\u5176\u5FEB\u7167\u4E2D\u7684\u6587\u4EF6\u6240\u6D88\u8017\u7684\u603B\u7A7A\u95F4\u3002</li></ul>`,9),U={class:"custom-container tip"},Z={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},q=e("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),z=e("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),B=[q,z],I=e("p",{class:"custom-container-title"},"Tips",-1),R=e("p",null,"\u76EE\u524D\uFF0CHDFS \u672C\u8EAB\u6CA1\u6709\u63D0\u4F9B\u76F4\u63A5\u6392\u51FA\u5FEB\u7167\u7684\u7EDF\u8BA1\u547D\u4EE4\uFF0C\u5982\u679C\u9700\u8981\u6392\u51FA\u5FEB\u7167\u7684\u5E72\u6270\uFF1A",-1),P=e("p",null,"1\u3001\u907F\u514D\u5728\u7236\u76EE\u5F55\u4E0A\u521B\u5EFA\u5FEB\u7167",-1),Q=e("p",null,[s("2\u3001\u901A\u8FC7 "),e("code",null,"hdfs dfs -ls -R -h"),s("\u200B \u547D\u4EE4\u5217\u51FA\u6240\u6709\u6587\u4EF6\u5927\u5C0F\u540E\u624B\u52A8\u8BA1\u7B97\uFF0C\u6216\u8005\u4F7F\u7528\u811A\u672C\u8BA1\u7B97")],-1),V=d(`<h3 id="\u5173\u4E8E-hdfs-dfs-du-h-\u7EDF\u8BA1-snapshot-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-hdfs-dfs-du-h-\u7EDF\u8BA1-snapshot-\u76EE\u5F55" aria-hidden="true">#</a> \u5173\u4E8E <code>hdfs dfs -du -h</code> \u7EDF\u8BA1 <code>.snapshot</code> \u76EE\u5F55</h3><p>HDFS \u7684\u5FEB\u7167\u53EA\u8BB0\u5F55\u6587\u4EF6\u7684\u5143\u6570\u636E\uFF0C\u5305\u62EC\u5757\u5217\u8868\u548C\u6587\u4EF6\u5927\u5C0F\uFF0C\u800C\u4E0D\u662F\u5B9E\u9645\u7684\u6570\u636E\u5757\u3002\u56E0\u6B64\uFF0C\u5F53\u4F60\u4F7F\u7528 <code>hdfs dfs -du -h &lt;snapshot\u8DEF\u5F84&gt;</code> \u547D\u4EE4\u67E5\u770B\u5FEB\u7167\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5927\u5C0F\u65F6\uFF0C\u5C55\u793A\u7684\u6587\u4EF6\u5927\u5C0F\u6307\u7684\u662F\u5FEB\u7167\u4E2D\u8BB0\u5F55\u7684\u539F\u59CB\u6587\u4EF6\u7684\u5927\u5C0F\u3002</p><h4 id="\u8BE6\u7EC6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u7EC6\u8BF4\u660E" aria-hidden="true">#</a> \u8BE6\u7EC6\u8BF4\u660E</h4><ol><li><p><strong>\u5FEB\u7167\u7684\u673A\u5236</strong>\uFF1A</p><ul><li>HDFS \u5FEB\u7167\u662F\u76EE\u5F55\u7EA7\u7684\u3002\u521B\u5EFA\u5FEB\u7167\u65F6\uFF0CHDFS \u4E0D\u4F1A\u590D\u5236\u6570\u636E\u5757\uFF0C\u800C\u662F\u4FDD\u5B58\u76EE\u5F55\u7ED3\u6784\u548C\u6587\u4EF6\u5143\u6570\u636E\uFF08\u5305\u62EC\u6587\u4EF6\u7684\u5757\u5217\u8868\u3001\u5927\u5C0F\u7B49\uFF09\u3002</li><li>\u5FEB\u7167\u7684\u521B\u5EFA\u662F\u975E\u5E38\u9AD8\u6548\u7684\uFF0C\u56E0\u4E3A\u5B83\u53EA\u662F\u8BB0\u5F55\u5F53\u524D\u7684\u5143\u6570\u636E\u72B6\u6001\uFF0C\u6570\u636E\u5757\u672C\u8EAB\u6CA1\u6709\u53D8\u5316\u3002</li></ul></li><li><p><strong><code>hdfs dfs -du -h</code> \u547D\u4EE4</strong>\uFF1A</p><ul><li><code>hdfs dfs -du -h &lt;path&gt;</code> \u663E\u793A\u6307\u5B9A\u8DEF\u5F84\u4E0B\u6BCF\u4E2A\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u5B9E\u9645\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5\u3002</li><li>\u5F53\u8DEF\u5F84\u662F\u4E00\u4E2A\u5FEB\u7167\u76EE\u5F55\uFF08\u5982 <code>&lt;snapshot_path&gt;</code>\uFF09\uFF0C\u5B83\u4F1A\u663E\u793A\u5FEB\u7167\u76EE\u5F55\u4E0B\u6BCF\u4E2A\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u5927\u5C0F\u3002</li></ul></li><li><p><strong>\u5FEB\u7167\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u5927\u5C0F\u5C55\u793A</strong>\uFF1A</p><ul><li>\u5728\u5FEB\u7167\u76EE\u5F55\u4E0B\u770B\u5230\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u5176\u5B9E\u662F\u539F\u59CB\u6587\u4EF6\u5728\u5FEB\u7167\u521B\u5EFA\u65F6\u7684\u5927\u5C0F\u3002</li><li>\u56E0\u4E3A\u5FEB\u7167\u53EA\u662F\u8BB0\u5F55\u5143\u6570\u636E\uFF0C\u5F53\u4F60\u67E5\u770B\u5FEB\u7167\u76EE\u5F55\u65F6\uFF0C\u663E\u793A\u7684\u5927\u5C0F\u662F\u5FEB\u7167\u521B\u5EFA\u65F6\u6587\u4EF6\u7684\u903B\u8F91\u5927\u5C0F\uFF0C\u800C\u4E0D\u662F\u5B9E\u9645\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</li></ul></li></ol><h4 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u5047\u8BBE\u4F60\u5728 <code>/user/hive/warehouse</code> \u76EE\u5F55\u4E0A\u521B\u5EFA\u4E86\u4E00\u4E2A\u5FEB\u7167 <code>snapshot1</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hdfs dfs <span class="token parameter variable">-createSnapshot</span> /user/hive/warehouse snapshot1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u67E5\u770B\u5FEB\u7167\u76EE\u5F55\u7684\u5927\u5C0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hdfs dfs <span class="token parameter variable">-du</span> <span class="token parameter variable">-h</span> /user/hive/warehouse/.snapshot/snapshot1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u53EF\u80FD\u7C7B\u4F3C\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">4.0</span> K  /user/hive/warehouse/.snapshot/snapshot1/mtdata.db
<span class="token number">16.0</span> M  /user/hive/warehouse/.snapshot/snapshot1/mtdata.db/mytable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684 <code>16.0 M</code> \u8868\u793A\u7684\u662F\u5FEB\u7167\u4E2D\u8BB0\u5F55\u7684 <code>/user/hive/warehouse/mtdata.db/mytable</code> \u5728\u5FEB\u7167\u521B\u5EFA\u65F6\u7684\u5927\u5C0F\uFF0C\u800C\u4E0D\u662F\u5FEB\u7167\u672C\u8EAB\u5360\u7528\u7684\u989D\u5916\u7A7A\u95F4\u3002</p><h4 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h4><p><code>hdfs dfs -du -h &lt;snapshot\u8DEF\u5F84&gt;</code> \u547D\u4EE4\u5C55\u793A\u7684\u662F\u5FEB\u7167\u4E2D\u5404\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u5927\u5C0F\uFF0C\u8FD9\u4E9B\u5927\u5C0F\u662F\u57FA\u4E8E\u5FEB\u7167\u521B\u5EFA\u65F6\u6587\u4EF6\u7684\u5143\u6570\u636E\u8BB0\u5F55\u7684\u5927\u5C0F\u3002\u8FD9\u8868\u793A\u539F\u59CB\u6587\u4EF6\u7684\u903B\u8F91\u5927\u5C0F\uFF0C\u800C\u4E0D\u662F\u5FEB\u7167\u672C\u8EAB\u5B9E\u9645\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u3002\u5FEB\u7167\u7684\u5B9E\u9645\u5B58\u50A8\u5F00\u9500\u901A\u5E38\u8F83\u5C0F\uFF0C\u53EA\u5305\u62EC\u5143\u6570\u636E\u7684\u989D\u5916\u5F00\u9500\uFF0C\u800C\u4E0D\u662F\u6570\u636E\u5757\u7684\u590D\u5236\u3002</p>`,14);function j(L,K){return a(),n("div",null,[l,e("div",i,[(a(),n("svg",r,p)),u,_]),f,e("div",m,[(a(),n("svg",v,x)),k,S,w,D,M]),N,C,e("div",T,[(a(),n("svg",E,H)),F,O]),A,e("div",U,[(a(),n("svg",Z,B)),I,R,P,Q]),V])}var J=t(o,[["render",j],["__file","index.html.vue"]]);export{J as default};
