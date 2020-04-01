(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(t,v,a){"use strict";a.r(v);var s=a(0),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event loop")]),t._v(" "),a("p",[t._v("JS 在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。如果遇到异步的代码，会被挂起并加入到 Task（有多种 task） 队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/eventLoop.png",alt:"'eventLoop'"}})]),t._v(" "),a("p",[t._v("不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。")]),t._v(" "),a("p",[t._v("常见的微任务：")]),t._v(" "),a("ul",[a("li",[t._v("promise")])]),t._v(" "),a("p",[t._v("常见的宏任务：")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout")]),t._v(" "),a("li",[t._v("setInterval")])]),t._v(" "),a("p",[t._v("正确的一次 Event loop 顺序是这样:")]),t._v(" "),a("ul",[a("li",[t._v("选择当前要执行的任务队列，选择任务队列中最先进入的任务，如果任务队列为空即null，则执行跳转到微任务（MicroTask）的执行步骤。")]),t._v(" "),a("li",[t._v("将事件循环中的任务设置为已选择任务。")]),t._v(" "),a("li",[t._v("执行任务。")]),t._v(" "),a("li",[t._v("将事件循环中当前运行任务设置为null。")]),t._v(" "),a("li",[t._v("将已经运行完成的任务从任务队列中删除。")]),t._v(" "),a("li",[t._v("microtasks步骤：进入microtask检查点。")]),t._v(" "),a("li",[t._v("更新界面渲染。")]),t._v(" "),a("li",[t._v("返回第一步。")])]),t._v(" "),a("p",[t._v("async 函数在 await 之前的代码都是同步执行的，可以理解为 await 之前的代码属于 new Promise 时传入的代码，await 之后的所有代码都是在 Promise.then 中的回调")])])}),[],!1,null,null,null);v.default=e.exports}}]);