(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),i=r(6),a=(r(0),r(211)),o={title:"Style TextFormField"},l={unversionedId:"flutter-crud2a/edit-register-page/styling-text-form-field",id:"flutter-crud2a/edit-register-page/styling-text-form-field",isDocsHomePage:!1,title:"Style TextFormField",description:"In this step, we're going to",source:"@site/docs/flutter-crud2a/edit-register-page/styling-text-form-field.md",permalink:"/docs/flutter-crud2a/edit-register-page/styling-text-form-field",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/edit-register-page/styling-text-form-field.md",sidebar:"flutterCrud2a",previous:{title:"Build a form with validation",permalink:"/docs/flutter-crud2a/edit-register-page/build-a-form-with-validation"},next:{title:"Fix RenderFlex Error",permalink:"/docs/flutter-crud2a/edit-register-page/fix-render-flex-error"}},c=[{value:"Style <code>TextFormField</code>",id:"style-textformfield",children:[]},{value:"Reference of widgets",id:"reference-of-widgets",children:[]}],u={rightToc:c};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this step, we're going to"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Style ",Object(a.b)("inlineCode",{parentName:"li"},"TextFormField"))),Object(a.b)("h2",{id:"style-textformfield"},"Style ",Object(a.b)("inlineCode",{parentName:"h2"},"TextFormField")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/cookbook/forms/text-input#textformfield"}),"https://flutter.dev/docs/cookbook/forms/text-input#textformfield")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/pages/register_page.dart"',title:'"lib/pages/register_page.dart"'}),"TextFormField(\n  \x3c!-- highlight-next-line --\x3e\n  decoration: InputDecoration(labelText: 'Name', hintText: \"John Jackson\"),\n  validator: (value) {\n    if (value.isEmpty) {\n      return \"Please enter name.\";\n    }\n    return null;\n  },\n),\nTextFormField(\n  \x3c!-- highlight-start --\x3e\n  decoration: InputDecoration(labelText: 'Email', hintText: \"johnjackson@example.com\"),\n  keyboardType: TextInputType.emailAddress,\n  \x3c!-- highlight-end --\x3e\n  validator: (value) {\n    if (value.isEmpty) {\n      return 'Please enter email';\n    }\n    return null;\n  },\n),\nTextFormField(\n  \x3c!-- highlight-start --\x3e\n  decoration: InputDecoration(labelText: 'Password'),\n  obscureText: true,\n  \x3c!-- highlight-end --\x3e\n  validator: (value) {\n    if (value.isEmpty) {\n      return 'Please enter password';\n    }\n    return null;\n  },\n),\nTextFormField(\n  \x3c!-- highlight-start --\x3e\n  decoration: InputDecoration(labelText: 'Confirm Password'),\n  obscureText: true,\n  \x3c!-- highlight-end --\x3e\n  validator: (value) {\n    // This is not correct validation. Later we will improve this validation.\n    if (value.isEmpty) {\n      return 'Confirm Password is not matching';\n    }\n    return null;\n  },\n),\n")),Object(a.b)("h2",{id:"reference-of-widgets"},"Reference of widgets"),Object(a.b)("p",null,"You can check more property of ",Object(a.b)("inlineCode",{parentName:"p"},"TextFormField")," and ",Object(a.b)("inlineCode",{parentName:"p"},"InputDecoration")," in these links."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.flutter.dev/flutter/material/TextFormField-class.html"}),"TextFormField")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.flutter.dev/flutter/material/InputDecoration-class.html"}),"InputDecoration"))))}d.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(r),f=n,m=s["".concat(o,".").concat(f)]||s[f]||p[f]||a;return r?i.a.createElement(m,l(l({ref:t},u),{},{components:r})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);