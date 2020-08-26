(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(211));const a={title:"Step5-2 Note about import"},i={unversionedId:"flutter-crud2a/note-about-import",id:"flutter-crud2a/note-about-import",isDocsHomePage:!1,title:"Step5-2 Note about import",description:"In this step, we are going to",source:"@site/docs/flutter-crud2a/note-about-import.md",permalink:"/docs/flutter-crud2a/note-about-import",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/note-about-import.md",sidebar:"flutterCrud2a",previous:{title:"Step5-1 Prepare files",permalink:"/docs/flutter-crud2a/prepare-files"},next:{title:"Step6-1 Add Drawer",permalink:"/docs/flutter-crud2a/add-drawer"}},c=[{value:"Note about <strong>&quot;import&quot;</strong>",id:"note-about-import",children:[]},{value:"But",id:"but",children:[]}],u={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this step, we are going to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Learn how to import files in flutter")),Object(o.b)("h2",{id:"note-about-import"},"Note about ",Object(o.b)("strong",{parentName:"h2"},'"import"')),Object(o.b)("p",null,"There are two types of ",Object(o.b)("inlineCode",{parentName:"p"},"import")," in flutter"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"package imports"),Object(o.b)("li",{parentName:"ul"},"relative imports")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-17-05-34-02.png",alt:"flutter-import-files"}))),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/50732897/whats-the-different-between-full-path-and-relative-path-in-dart"}),"https://stackoverflow.com/questions/50732897/whats-the-different-between-full-path-and-relative-path-in-dart")),Object(o.b)("h2",{id:"but"},"But"),Object(o.b)("p",null,"According to flutter maintainer, we should use ",Object(o.b)("inlineCode",{parentName:"p"},"package imports"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"I think the conclusion to this problem was that lib/main.dart should ",Object(o.b)("strong",{parentName:"p"},"always only contain package imports"),", then Dart is able to canonicalize libraries properly no matter what form the imports are in other libraries.")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/flutter/flutter-intellij/issues/2015"}),"https://github.com/flutter/flutter-intellij/issues/2015")),Object(o.b)("p",null,"And I also encountered VS code code completion issue when using ",Object(o.b)("inlineCode",{parentName:"p"},"relative imports"),"."),Object(o.b)("p",null,"That's why in this course, we're going to use ",Object(o.b)("inlineCode",{parentName:"p"},"packages import"),"."))}l.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);