(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{154:function(v,_,t){"use strict";t.r(_);var a=t(0),l=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器渲染过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[v._v("#")]),v._v(" 浏览器渲染过程")]),v._v(" "),t("p",[v._v("浏览器的渲染机制一般分为以下几个步骤")]),v._v(" "),t("ol",[t("li",[v._v("处理 HTML 并构建 DOM 树。")]),v._v(" "),t("li",[v._v("处理 CSS 构建 CSSOM 树。")]),v._v(" "),t("li",[v._v("将 DOM 与 CSSOM 合并成一个渲染树。")]),v._v(" "),t("li",[v._v("根据渲染树来布局，计算每个节点的位置。")]),v._v(" "),t("li",[v._v("调用 GPU 绘制，合成图层，显示在屏幕上。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/render.png",alt:"'render'"}})]),v._v(" "),t("p",[v._v("在构建 CSSOM 树时，会阻塞渲染，直至 CSSOM 树构建完成。并且构建 CSSOM 树是一个十分消耗性能的过程，所以应该尽量保证层级扁平，减少过度层叠，越是具体的 CSS 选择器，执行速度越慢。")]),v._v(" "),t("p",[v._v("当 HTML 解析到 script 标签时，会暂停构建 DOM，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件。并且 CSS 也会影响 JS 的执行，只有当解析完样式表才会执行 JS，所以也可以认为这种情况下，CSS 也会暂停构建 DOM。")]),v._v(" "),t("h2",{attrs:{id:"load-和-domcontentloaded-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-和-domcontentloaded-区别"}},[v._v("#")]),v._v(" Load 和 DOMContentLoaded 区别")]),v._v(" "),t("p",[v._v("Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。")]),v._v(" "),t("p",[v._v("DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。")]),v._v(" "),t("h2",{attrs:{id:"重绘（repaint）和回流（reflow）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重绘（repaint）和回流（reflow）"}},[v._v("#")]),v._v(" 重绘（Repaint）和回流（Reflow）")]),v._v(" "),t("p",[v._v("重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。")]),v._v(" "),t("ul",[t("li",[v._v("重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘")]),v._v(" "),t("li",[v._v("回流是布局或者几何属性需要改变就称为回流。")]),v._v(" "),t("li",[v._v("回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。")])]),v._v(" "),t("p",[v._v("会导致回流的操作：")]),v._v(" "),t("ul",[t("li",[v._v("页面首次渲染")]),v._v(" "),t("li",[v._v("浏览器窗口大小发生改变")]),v._v(" "),t("li",[v._v("元素尺寸或位置发生改变")]),v._v(" "),t("li",[v._v("元素内容变化（文字数量或图片大小等等）")]),v._v(" "),t("li",[v._v("元素字体大小变化")]),v._v(" "),t("li",[v._v("添加或者删除可见的 DOM 元素")]),v._v(" "),t("li",[v._v("激活 CSS 伪类（例如：:hover）")]),v._v(" "),t("li",[v._v("查询某些属性或调用某些方法")])]),v._v(" "),t("h2",{attrs:{id:"减少重绘和回流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少重绘和回流"}},[v._v("#")]),v._v(" 减少重绘和回流")]),v._v(" "),t("h3",{attrs:{id:"css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[v._v("#")]),v._v(" CSS")]),v._v(" "),t("ul",[t("li",[v._v("避免使用 table 布局。")]),v._v(" "),t("li",[v._v("尽可能在 DOM 树的最末端改变 class。")]),v._v(" "),t("li",[v._v("避免设置多层内联样式。")]),v._v(" "),t("li",[v._v("将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。")]),v._v(" "),t("li",[v._v("避免使用 CSS 表达式（例如：calc()）。")])]),v._v(" "),t("h3",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[v._v("#")]),v._v(" JavaScript")]),v._v(" "),t("ul",[t("li",[v._v("避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。")]),v._v(" "),t("li",[v._v("避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。")]),v._v(" "),t("li",[v._v("也可以先为元素设置 display: none，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。")]),v._v(" "),t("li",[v._v("避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。")]),v._v(" "),t("li",[v._v("对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。")])])])}),[],!1,null,null,null);_.default=l.exports}}]);