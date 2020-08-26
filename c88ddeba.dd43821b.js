(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return c}));var a=r(2),n=(r(0),r(211));const i={title:"Step12 MultiProvider"},o={unversionedId:"flutter-crud2a/multi-provider",id:"flutter-crud2a/multi-provider",isDocsHomePage:!1,title:"Step12 MultiProvider",description:"Goal of this step",source:"@site/docs/flutter-crud2a/multi-provider.md",permalink:"/docs/flutter-crud2a/multi-provider",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/multi-provider.md",sidebar:"flutterCrud2a",previous:{title:"Step11 Provider Basics",permalink:"/docs/flutter-crud2a/provider-basics"},next:{title:"Step13 ChangeNotifierProvider",permalink:"/docs/flutter-crud2a/change-notifier-provider"}},d=[{value:"Goal of this step",id:"goal-of-this-step",children:[]},{value:"Consume <strong>isAuthenticated</strong> param by using <code>Provider.of</code>",id:"consume-isauthenticated-param-by-using-providerof",children:[{value:"Edit HomePage",id:"edit-homepage",children:[]},{value:"Edit HomeDrawer",id:"edit-homedrawer",children:[]}]},{value:"Test it",id:"test-it",children:[]},{value:"Provided value doesn&#39;t update...\ud83d\ude1f",id:"provided-value-doesnt-update",children:[]}],l={rightToc:d};function c({components:e,...t}){return Object(n.a)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.a)("h2",{id:"goal-of-this-step"},"Goal of this step"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"Learn MultiProvider")),Object(n.a)("p",null,"In this step, in addition to provide ",Object(n.a)("strong",{parentName:"p"},"testProviderText"),", let's provide ",Object(n.a)("strong",{parentName:"p"},"isAuthenticated")," state."),Object(n.a)("p",null,"To provide multiple value, we need to use: ",Object(n.a)("strong",{parentName:"p"},"MultiProvider"),"\n",Object(n.a)("a",Object(a.a)({parentName:"p"},{href:"https://pub.dev/packages/provider#multiprovider"}),"https://pub.dev/packages/provider#multiprovider")),Object(n.a)("pre",null,Object(n.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'{2-6} title="lib/main.dart"',"{2-6}":!0,title:'"lib/main.dart"'}),"Widget build(BuildContext context) {\n    return  MultiProvider(\n        providers: [\n            Provider<String>(create: (context) => testProviderText),\n            Provider<bool>(create: (context) => isAuthenticated)\n        ],\n        child: MaterialApp(\n            title: 'Flutter Demo',\n            theme: ThemeData(\n                primarySwatch: Colors.blue,\n            ),\n            initialRoute: '/',\n            routes: {\n                // When navigating to the \"/\" route, build the FirstScreen widget.\n                '/': (context) => HomePage(isAuthenticated: isAuthenticated),\n                '/sign_up': (context) => RegisterPage(),\n            },\n        ),\n    );\n}\n")),Object(n.a)("h2",{id:"consume-isauthenticated-param-by-using-providerof"},"Consume ",Object(n.a)("strong",{parentName:"h2"},"isAuthenticated")," param by using ",Object(n.a)("inlineCode",{parentName:"h2"},"Provider.of")),Object(n.a)("h3",{id:"edit-homepage"},"Edit HomePage"),Object(n.a)("pre",null,Object(n.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'{3,16,22,24} title="lib/pages/home_page.dart"',"{3,16,22,24}":!0,title:'"lib/pages/home_page.dart"'}),"import 'package:flutter/material.dart';\nimport 'package:flutter_firebase_firestore_crud2a/widgets/home_drawer.dart';\nimport 'package:provider/provider.dart';\n\nclass HomePage extends StatefulWidget {\n  HomePage({Key key, this.isAuthenticated}) : super(key: key);\n  final bool isAuthenticated;\n\n  @override\n  _HomePageState createState() => _HomePageState();\n}\n\nclass _HomePageState extends State<HomePage> {\n  @override\n  Widget build(BuildContext context) {\n    final bool isAuthenticated = Provider.of<bool>(context);\n\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Home Page\"),\n      ),\n      drawer: HomeDrawer(),\n      body: Center(\n        child: isAuthenticated ? Text('Home Page after login') : Text('Home Page before login')\n      ),\n    );\n  }\n}\n")),Object(n.a)("p",null,"And delete these code"),Object(n.a)("pre",null,Object(n.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"HomePage({Key key, this.isAuthenticated}) : super(key: key);\nfinal bool isAuthenticated;\n")),Object(n.a)("p",null,"Delete passed props in ",Object(n.a)("inlineCode",{parentName:"p"},"main.dart"),"."),Object(n.a)("pre",null,Object(n.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'{3} title="main.dart"',"{3}":!0,title:'"main.dart"'}),"routes: {\n    // When navigating to the \"/\" route, build the FirstScreen widget.\n    '/': (context) => HomePage(),\n    '/sign_up': (context) => RegisterPage(),\n},\n")),Object(n.a)("h3",{id:"edit-homedrawer"},"Edit HomeDrawer"),Object(n.a)("pre",null,Object(n.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'{6} title="lib/widgets/home_drawer.dart"',"{6}":!0,title:'"lib/widgets/home_drawer.dart"'}),"...\n\nclass HomeDrawer extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n        final bool isAuthenticated = Provider.of<bool>(context);\n        ...\n")),Object(n.a)("p",null,"Delete passed props in ",Object(n.a)("inlineCode",{parentName:"p"},"lib/pages/home_page.dart"),"."),Object(n.a)("pre",null,Object(n.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/pages/home_page.dart"',title:'"lib/pages/home_page.dart"'}),"...\ndrawer: HomeDrawer(),\n")),Object(n.a)("h2",{id:"test-it"},"Test it"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},'Check it works correctly by "sign-in", "sign-out".')),Object(n.a)("h2",{id:"provided-value-doesnt-update"},"Provided value doesn't update...\ud83d\ude1f"),Object(n.a)("p",null,"This is because ",Object(n.a)("inlineCode",{parentName:"p"},"Provider")," widget's value doesn't update.\n",Object(n.a)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/flutter-provider-state-dart-dev-tool.png",alt:"dart-devtools"}))),Object(n.a)("p",null,"In the next step, let's solve this problem."))}c.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return r?n.a.createElement(b,d(d({ref:t},c),{},{components:r})):n.a.createElement(b,d({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);