(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),i=(r(0),r(211)),o={title:"Style TextFormField"},l={unversionedId:"flutter-crud2a/edit-register-page/styling-text-form-field",id:"flutter-crud2a/edit-register-page/styling-text-form-field",isDocsHomePage:!1,title:"Style TextFormField",description:"In this step, we're going to",source:"@site/docs/flutter-crud2a/edit-register-page/styling-text-form-field.md",permalink:"/docs/flutter-crud2a/edit-register-page/styling-text-form-field",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/edit-register-page/styling-text-form-field.md",sidebar:"flutterCrud2a",previous:{title:"Build a form with validation",permalink:"/docs/flutter-crud2a/edit-register-page/build-a-form-with-validation"},next:{title:"Fix RenderFlex Error",permalink:"/docs/flutter-crud2a/edit-register-page/fix-render-flex-error"}},c=[{value:"Style <code>TextFormField</code>",id:"style-textformfield",children:[]},{value:"Reference of widgets",id:"reference-of-widgets",children:[]}],u={rightToc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"In this step, we're going to"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Style ",Object(i.a)("inlineCode",{parentName:"li"},"TextFormField"))),Object(i.a)("h2",{id:"style-textformfield"},"Style ",Object(i.a)("inlineCode",{parentName:"h2"},"TextFormField")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/cookbook/forms/text-input#textformfield"}),"https://flutter.dev/docs/cookbook/forms/text-input#textformfield")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/pages/register_page.dart"',title:'"lib/pages/register_page.dart"'}),"TextFormField(\n  \x3c!-- highlight-next-line --\x3e\n  decoration: InputDecoration(labelText: 'Name', hintText: \"John Jackson\"),\n  validator: (value) {\n    if (value.isEmpty) {\n      return \"Please enter name.\";\n    }\n    return null;\n  },\n),\nTextFormField(\n  \x3c!-- highlight-start --\x3e\n  decoration: InputDecoration(labelText: 'Email', hintText: \"johnjackson@example.com\"),\n  keyboardType: TextInputType.emailAddress,\n  \x3c!-- highlight-end --\x3e\n  validator: (value) {\n    if (value.isEmpty) {\n      return 'Please enter email';\n    }\n    return null;\n  },\n),\nTextFormField(\n  \x3c!-- highlight-start --\x3e\n  decoration: InputDecoration(labelText: 'Password'),\n  obscureText: true,\n  \x3c!-- highlight-end --\x3e\n  validator: (value) {\n    if (value.isEmpty) {\n      return 'Please enter password';\n    }\n    return null;\n  },\n),\nTextFormField(\n  \x3c!-- highlight-start --\x3e\n  decoration: InputDecoration(labelText: 'Confirm Password'),\n  obscureText: true,\n  \x3c!-- highlight-end --\x3e\n  validator: (value) {\n    // This is not correct validation. Later we will improve this validation.\n    if (value.isEmpty) {\n      return 'Confirm Password is not matching';\n    }\n    return null;\n  },\n),\n")),Object(i.a)("h2",{id:"reference-of-widgets"},"Reference of widgets"),Object(i.a)("p",null,"You can check more property of ",Object(i.a)("inlineCode",{parentName:"p"},"TextFormField")," and ",Object(i.a)("inlineCode",{parentName:"p"},"InputDecoration")," in these links."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://api.flutter.dev/flutter/material/TextFormField-class.html"}),"TextFormField")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://api.flutter.dev/flutter/material/InputDecoration-class.html"}),"InputDecoration"))))}d.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,m=p["".concat(o,".").concat(f)]||p[f]||s[f]||i;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);