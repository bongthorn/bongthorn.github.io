(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),i=(t(0),t(211)),o={title:"Play with Padding"},d={unversionedId:"frontend-quick-learning/css-guide/play-with-padding",id:"frontend-quick-learning/css-guide/play-with-padding",isDocsHomePage:!1,title:"Play with Padding",description:"Goal",source:"@site/docs/frontend-quick-learning/css-guide/play-with-padding.md",permalink:"/docs/frontend-quick-learning/css-guide/play-with-padding",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/css-guide/play-with-padding.md",sidebar:"frontendQuickLearning",previous:{title:"Margin and Padding",permalink:"/docs/frontend-quick-learning/css-guide/margin-and-padding"},next:{title:"Play with Margin",permalink:"/docs/frontend-quick-learning/css-guide/play-with-margin"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Padding - Individual Sides",id:"padding---individual-sides",children:[]},{value:"Padding - Shorthand Property",id:"padding---shorthand-property",children:[]},{value:"Refs",id:"refs",children:[]}],p={rightToc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"goal"},"Goal"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"\u26a1 Learn ",Object(i.a)("inlineCode",{parentName:"li"},"padding")," syntax")),Object(i.a)("h2",{id:"padding---individual-sides"},"Padding - Individual Sides"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"  padding-top: 50px;\n  padding-right: 30px;\n  padding-bottom: 50px;\n  padding-left: 80px;\n")),Object(i.a)("p",null,"Visit: ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://margin-padding-demo.now.sh/"}),"https://margin-padding-demo.now.sh/")),Object(i.a)("p",null,"And edit element style by using chrome dev tools."),Object(i.a)("p",null,Object(i.a)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200428_035736.gif",alt:"play-with-padding"}))),Object(i.a)("h2",{id:"padding---shorthand-property"},"Padding - Shorthand Property"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* Apply to all four sides */\npadding: 10px;\n\n/* vertical | horizontal */\npadding: 5px 10px;\n\n/* top | horizontal | bottom */\npadding: 1px 2px 2px;\n\n/* top | right | bottom | left */\npadding: 5px 1px 0 2px;\n")),Object(i.a)("h2",{id:"refs"},"Refs"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"}),"https://developer.mozilla.org/en-US/docs/Web/CSS/padding")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://www.w3schools.com/css/css_padding.asp"}),"https://www.w3schools.com/css/css_padding.asp"))))}l.isMDXComponent=!0},211:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,f=u["".concat(o,".").concat(g)]||u[g]||s[g]||i;return t?r.a.createElement(f,d(d({ref:n},p),{},{components:t})):r.a.createElement(f,d({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);