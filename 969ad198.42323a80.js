(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(211)),p={title:"Step5-1 Prepare files"},o={unversionedId:"flutter-crud2a/prepare-files",id:"flutter-crud2a/prepare-files",isDocsHomePage:!1,title:"Step5-1 Prepare files",description:"In this step, we are going to",source:"@site/docs/flutter-crud2a/prepare-files.md",permalink:"/docs/flutter-crud2a/prepare-files",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/prepare-files.md",sidebar:"flutterCrud2a",previous:{title:"Step4 Write initial counter app from scratch",permalink:"/docs/flutter-crud2a/write-initial-counter-app-from-scratch"},next:{title:"Step5-2 Note about import",permalink:"/docs/flutter-crud2a/note-about-import"}},s=[{value:"Prepare skelton folders and files",id:"prepare-skelton-folders-and-files",children:[]},{value:"Edit <code>lib/main.dart</code>",id:"edit-libmaindart",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"In this step, we are going to"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Prepare pages for future steps.")),Object(i.a)("h2",{id:"prepare-skelton-folders-and-files"},"Prepare skelton folders and files"),Object(i.a)("p",null,"We're going to make ",Object(i.a)("inlineCode",{parentName:"p"},"pages")," folder (some other developers may name ",Object(i.a)("inlineCode",{parentName:"p"},"screens")," but I prefer ",Object(i.a)("inlineCode",{parentName:"p"},"pages"),") and prepare below files for future lectures."),Object(i.a)("p",null,"These are just super simple code ",Object(i.a)("strong",{parentName:"p"},"only for showing page name"),"."),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"pages/home_page.dart")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"pages/login_page.dart")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"pages/register_page.dart")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"pages/posts_new_page.dart")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"pages/posts_edit_page.dart")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"pages/posts_show_page.dart")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"pages/my_posts_page.dart"))),Object(i.a)("hr",null),Object(i.a)("p",null,"1.",Object(i.a)("inlineCode",{parentName:"p"},"pages/home_page.dart")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/home_page.dart"',title:'"pages/home_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass HomePage extends StatefulWidget {\n\n  @override\n  _HomePageState createState() => _HomePageState();\n}\n\nclass _HomePageState extends State<HomePage> {\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Home Page\"),\n      ),\n      body: Center(\n        child: Text('This is home page')\n      ),\n    );\n  }\n}\n")),Object(i.a)("p",null,"2.",Object(i.a)("inlineCode",{parentName:"p"},"pages/login_page.dart")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/login_page.dart"',title:'"pages/login_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass LoginPage extends StatefulWidget {\n\n  @override\n  _LoginPageState createState() => _LoginPageState();\n}\n\nclass _LoginPageState extends State<LoginPage> {\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Login Page\"),\n      ),\n      body: Center(\n        child: Text('This is login page')\n      ),\n    );\n  }\n}\n")),Object(i.a)("p",null,"3.",Object(i.a)("inlineCode",{parentName:"p"},"pages/register_page.dart")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/register_page.dart"',title:'"pages/register_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass RegisterPage extends StatefulWidget {\n\n  @override\n  _RegisterPageState createState() => _RegisterPageState();\n}\n\nclass _RegisterPageState extends State<RegisterPage> {\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Register Page\"),\n      ),\n      body: Center(\n        child: Text('This is register page')\n      ),\n    );\n  }\n}\n")),Object(i.a)("p",null,"4.",Object(i.a)("inlineCode",{parentName:"p"},"pages/posts_new_page.dart")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/posts_new_page.dart"',title:'"pages/posts_new_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass PostsNewPage extends StatefulWidget {\n\n  @override\n  _PostsNewPageState createState() => _PostsNewPageState();\n}\n\nclass _PostsNewPageState extends State<PostsNewPage> {\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"PostsNew Page\"),\n      ),\n      body: Center(\n        child: Text('This is posts new page')\n      ),\n    );\n  }\n}\n")),Object(i.a)("p",null,"5.",Object(i.a)("inlineCode",{parentName:"p"},"pages/posts_edit_page.dart")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/posts_edit_page.dart"',title:'"pages/posts_edit_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass PostsEditPage extends StatefulWidget {\n\n  @override\n  _PostsEditPageState createState() => _PostsEditPageState();\n}\n\nclass _PostsEditPageState extends State<PostsEditPage> {\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"PostsEdit Page\"),\n      ),\n      body: Center(\n        child: Text('This is posts edit page')\n      ),\n    );\n  }\n}\n")),Object(i.a)("p",null,"6.",Object(i.a)("inlineCode",{parentName:"p"},"pages/posts_show_page.dart")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/posts_show_page.dart"',title:'"pages/posts_show_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass PostsShowPage extends StatefulWidget {\n\n  @override\n  _PostsShowPageState createState() => _PostsShowPageState();\n}\n\nclass _PostsShowPageState extends State<PostsShowPage> {\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"PostsShow Page\"),\n      ),\n      body: Center(\n        child: Text('This is posts show page')\n      ),\n    );\n  }\n}\n")),Object(i.a)("p",null,"7.",Object(i.a)("inlineCode",{parentName:"p"},"pages/my_posts_page.dart")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/my_posts_page.dart"',title:'"pages/my_posts_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass MyPostsPage extends StatefulWidget {\n\n  @override\n  _MyPostsPageState createState() => _MyPostsPageState();\n}\n\nclass _MyPostsPageState extends State<MyPostsPage> {\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"MyPosts Page\"),\n      ),\n      body: Center(\n        child: Text('This is myposts page')\n      ),\n    );\n  }\n}\n")),Object(i.a)("h2",{id:"edit-libmaindart"},"Edit ",Object(i.a)("inlineCode",{parentName:"h2"},"lib/main.dart")),Object(i.a)("p",null,"Delete initial code and edit ",Object(i.a)("inlineCode",{parentName:"p"},"MaterialApp"),"'s ",Object(i.a)("inlineCode",{parentName:"p"},"home")," property to render ",Object(i.a)("inlineCode",{parentName:"p"},"HomePage()")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/main.dart"',title:'"lib/main.dart"'}),"import 'package:flutter/material.dart';\nimport 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: HomePage(),\n    );\n  }\n}\n")))}d.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=d(a),u=n,m=g["".concat(p,".").concat(u)]||g[u]||c[u]||i;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);