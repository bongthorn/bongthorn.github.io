(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{211:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(211)),c={title:"Refactor Code"},i={unversionedId:"frontend-quick-learning/javascript-guide/refactor",id:"frontend-quick-learning/javascript-guide/refactor",isDocsHomePage:!1,title:"Refactor Code",description:"Goal",source:"@site/docs/frontend-quick-learning/javascript-guide/refactor.md",permalink:"/docs/frontend-quick-learning/javascript-guide/refactor",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/javascript-guide/refactor.md"},l=[{value:"Goal",id:"goal",children:[]},{value:"Refactor code",id:"refactor-code",children:[]},{value:"What&#39;s next ?",id:"whats-next-",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"goal"},"Goal"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"\u26a1 Refactor the previous step javascript code to make it easier to understand")),Object(o.a)("h2",{id:"refactor-code"},"Refactor code"),Object(o.a)("p",null,"This is current code."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script>\n  document.getElementById("demo").onclick = function changeContent() {\n    document.getElementById("demo").innerHTML = "Help me";\n    document.getElementById("demo").style = "color: red";\n  }\n<\/script>\n')),Object(o.a)("p",null,"We will do the same thing described in the below link. "),Object(o.a)("p",null,Object(o.a)("img",Object(r.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-13-16-42-20.png",alt:"refactor-onclick-method"})),"\n",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"}),"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics")),Object(o.a)("p",null,"So ",Object(o.a)("inlineCode",{parentName:"p"},"js-test1.html")," code becomes"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="js-test1.html"',title:'"js-test1.html"'}),'<script>\n  let demoElement = document.getElementById("demo");       --- (1)\n\n  demoElement.onclick = function changeContent () {        --- (2)\n    demoElement.innerHTML = "Help me";                     --- (3)\n    demoElement.style = "color: red";                      --- (3)\n  }\n<\/script>\n')),Object(o.a)("h2",{id:"whats-next-"},"What's next ?"),Object(o.a)("p",null,"In the next step, I'll explain ",Object(o.a)("strong",{parentName:"p"},"(1)")," of this code! "))}p.isMDXComponent=!0}}]);