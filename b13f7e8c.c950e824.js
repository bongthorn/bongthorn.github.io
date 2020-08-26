(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(211)),i={title:"Step6 Add Drawer and Routing"},d={unversionedId:"flutter-crud2a/add-drawer-and-routing",id:"flutter-crud2a/add-drawer-and-routing",isDocsHomePage:!1,title:"Step6 Add Drawer and Routing",description:"Goal of this step",source:"@site/docs/flutter-crud2a/add-drawer-and-routing.md",permalink:"/docs/flutter-crud2a/add-drawer-and-routing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/add-drawer-and-routing.md"},c=[{value:"Goal of this step",id:"goal-of-this-step",children:[]},{value:"Add Drawer widget",id:"add-drawer-widget",children:[]},{value:"Add Routing",id:"add-routing",children:[{value:"Add Navaigation code to Drawer&#39;s ListTile",id:"add-navaigation-code-to-drawers-listtile",children:[]},{value:"Define Named routes in main.dart",id:"define-named-routes-in-maindart",children:[]},{value:"Pros and Cons of using <code>push</code> vs <code>pushNamed</code>",id:"pros-and-cons-of-using-push-vs-pushnamed",children:[]}]},{value:"Final code",id:"final-code",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"goal-of-this-step"},"Goal of this step"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Add Drawer widget"),Object(o.a)("li",{parentName:"ul"},"Add Routing")),Object(o.a)("h2",{id:"add-drawer-widget"},"Add Drawer widget"),Object(o.a)("p",null,"We can choose ",Object(o.a)("strong",{parentName:"p"},"widgets")," from\n",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://flutter.dev/docs/development/ui/widgets/material"}),"https://flutter.dev/docs/development/ui/widgets/material")),Object(o.a)("p",null,"This is something ",Object(o.a)("strong",{parentName:"p"},"like Bootstrap components"),"."),Object(o.a)("p",null,"We will add ",Object(o.a)("strong",{parentName:"p"},"Drawer")," widget\n",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://api.flutter.dev/flutter/material/Drawer-class.html"}),"https://api.flutter.dev/flutter/material/Drawer-class.html")),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/home_page.dart"',title:'"pages/home_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass HomePage extends StatefulWidget {\n  HomePage({Key key}) : super(key: key);\n\n  @override\n  _HomePageState createState() => _HomePageState();\n}\n\nclass _HomePageState extends State<HomePage> {\n\n  @override\n  Widget build(BuildContext context) {\n        return Scaffold(\n            appBar: AppBar(\n                title: Text(\"Home Page\"),\n            ),\n            drawer: Drawer(\n                child: ListView(\n                    padding: EdgeInsets.zero,\n                    children: <Widget>[\n                        DrawerHeader(\n                            decoration: BoxDecoration(\n                                color: Colors.blue,\n                            ),\n                            child: Text(\n                                'Drawer Header',\n                                style: TextStyle(\n                                    color: Colors.white,\n                                    fontSize: 24,\n                                ),\n                            ),\n                        ),\n                        ListTile(\n                            leading: Icon(Icons.exit_to_app),\n                            title: Text('Login'),\n                        ),\n                        ListTile(\n                            leading: Icon(Icons.account_circle),\n                            title: Text('Register'),\n                        ),\n                    ],\n                ),\n            ),\n            body: Center(\n                child: Text('This is home page')\n            ),\n        );\n  }\n}\n")),Object(o.a)("h2",{id:"add-routing"},"Add Routing"),Object(o.a)("p",null,"There are two way for navigate pages"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Navigate directly by using ",Object(o.a)("inlineCode",{parentName:"li"},"MaterialPageRoute"),"\n(",Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://flutter.dev/docs/cookbook/navigation/navigation-basics"}),"https://flutter.dev/docs/cookbook/navigation/navigation-basics"),")"),Object(o.a)("li",{parentName:"ol"},"Define named routes and Navigate to these routes\n(",Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://flutter.dev/docs/cookbook/navigation/named-routes"}),"https://flutter.dev/docs/cookbook/navigation/named-routes"),")")),Object(o.a)("p",null,"Let's try both."),Object(o.a)("h3",{id:"add-navaigation-code-to-drawers-listtile"},"Add Navaigation code to Drawer's ListTile"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'{4-12,17-19} title="pages/home_page.dart"',"{4-12,17-19}":!0,title:'"pages/home_page.dart"'}),"ListTile(\n    leading: Icon(Icons.exit_to_app),\n    title: Text('Login'),\n    onTap: () {\n        // https://stackoverflow.com/a/59154381\n        Navigator.pop(context);\n        Navigator.push(\n            context,\n            MaterialPageRoute(builder: (context) => LoginPage()),\n        );\n    }\n),\nListTile(\n    leading: Icon(Icons.account_circle),\n    title: Text('Register'),\n    onTap: () {\n        Navigator.pop(context);\n        Navigator.pushNamed(context, '/sign_up');\n    }\n),\n")),Object(o.a)("h3",{id:"define-named-routes-in-maindart"},"Define Named routes in main.dart"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'{6-11} title="lib/main.dart"',"{6-11}":!0,title:'"lib/main.dart"'}),"return MaterialApp(\n    title: 'Flutter Demo',\n    theme: ThemeData(\n        primarySwatch: Colors.blue,\n    ),\n    initialRoute: '/',\n    routes: {\n        // When navigating to the \"/\" route, build the FirstScreen widget.\n        '/': (context) => HomePage(),\n        '/sign_up': (context) => RegisterPage(),\n    },\n);\n")),Object(o.a)("h3",{id:"pros-and-cons-of-using-push-vs-pushnamed"},"Pros and Cons of using ",Object(o.a)("inlineCode",{parentName:"h3"},"push")," vs ",Object(o.a)("inlineCode",{parentName:"h3"},"pushNamed")),Object(o.a)("p",null,Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/flutter/flutter/issues/3867"}),"https://github.com/flutter/flutter/issues/3867")),Object(o.a)("h2",{id:"final-code"},"Final code"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/main.dart"',title:'"lib/main.dart"'}),"import 'package:flutter/material.dart';\nimport 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';\nimport 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      initialRoute: '/',\n      routes: {\n        // When navigating to the \"/\" route, build the FirstScreen widget.\n        '/': (context) => HomePage(),\n        '/sign_up': (context) => RegisterPage(),\n      },\n    );\n  }\n}\n")),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-dart",metastring:'title="pages/home_page.dart"',title:'"pages/home_page.dart"'}),"import 'package:flutter/material.dart';\nimport 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';\n\nclass HomePage extends StatefulWidget {\n  HomePage({Key key}) : super(key: key);\n\n  @override\n  _HomePageState createState() => _HomePageState();\n}\n\nclass _HomePageState extends State<HomePage> {\n\n  @override\n  Widget build(BuildContext context) {\n        return Scaffold(\n            appBar: AppBar(\n                title: Text(\"Home Page\"),\n            ),\n            drawer: Drawer(\n                child: ListView(\n                    padding: EdgeInsets.zero,\n                    children: <Widget>[\n                        DrawerHeader(\n                            decoration: BoxDecoration(\n                                color: Colors.blue,\n                            ),\n                            child: Text(\n                                'Drawer Header',\n                                style: TextStyle(\n                                    color: Colors.white,\n                                    fontSize: 24,\n                                ),\n                            ),\n                        ),\n                        ListTile(\n                            leading: Icon(Icons.exit_to_app),\n                            title: Text('Login'),\n                            onTap: () {\n                                // https://flutter.dev/docs/cookbook/navigation/navigation-basics#2-navigate-to-the-second-route-using-navigatorpush\n                                // https://stackoverflow.com/questions/43807184/how-to-close-scaffolds-drawer-after-an-item-tap\n                                Navigator.pop(context);\n                                Navigator.push(\n                                    context,\n                                    MaterialPageRoute(builder: (context) => LoginPage()),\n                                );\n                            }\n                        ),\n                        ListTile(\n                            leading: Icon(Icons.account_circle),\n                            title: Text('Register'),\n                            onTap: () {\n                                Navigator.pop(context);\n                                Navigator.pushNamed(context, '/sign_up');\n                            }\n                        ),\n                    ],\n                ),\n            ),\n            body: Center(\n                child: Text('This is home page')\n            ),\n        );\n  }\n}\n")))}s.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(i,".").concat(g)]||u[g]||p[g]||o;return n?r.a.createElement(m,d(d({ref:t},l),{},{components:n})):r.a.createElement(m,d({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);