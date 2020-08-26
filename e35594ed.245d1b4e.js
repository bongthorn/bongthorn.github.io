(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{191:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return i}));var n=r(2),o=(r(0),r(211));const a={title:"Step21 Delete Post"},c={unversionedId:"flutter-crud2a/delete-post",id:"flutter-crud2a/delete-post",isDocsHomePage:!1,title:"Step21 Delete Post",description:"Just call delete() metod.",source:"@site/docs/flutter-crud2a/delete-post.md",permalink:"/docs/flutter-crud2a/delete-post",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/delete-post.md",sidebar:"flutterCrud2a",previous:{title:"Step20 My Posts Page",permalink:"/docs/flutter-crud2a/my-posts-page"},next:{title:"Step22 Edit Post Page",permalink:"/docs/flutter-crud2a/edit-post-page"}},l=[],u={rightToc:l};function i({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Just call ",Object(o.b)("inlineCode",{parentName:"p"},"delete()")," metod."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://pub.dev/documentation/cloud_firestore/latest/cloud_firestore/DocumentReference-class.html"}),"https://pub.dev/documentation/cloud_firestore/latest/cloud_firestore/DocumentReference-class.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/pages/my_posts_page.dart"',title:'"lib/pages/my_posts_page.dart"'}),"case 'delete':\n    await Firestore.instance\n        .collection('users')\n        .document(user.uid)\n        .collection('posts')\n        .document(post.id)\n        .delete();\n    break;\n")))}i.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(m,l(l({ref:t},i),{},{components:r})):o.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);