(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?i.a.createElement(h,o(o({ref:t},s),{},{components:a})):i.a.createElement(h,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),i=(a(0),a(211));const r={title:"Step4 Write initial counter app from scratch"},l={unversionedId:"flutter-crud2a/write-initial-counter-app-from-scratch",id:"flutter-crud2a/write-initial-counter-app-from-scratch",isDocsHomePage:!1,title:"Step4 Write initial counter app from scratch",description:"Goal of this step",source:"@site/docs/flutter-crud2a/write-initial-counter-app-from-scratch.md",permalink:"/docs/flutter-crud2a/write-initial-counter-app-from-scratch",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/write-initial-counter-app-from-scratch.md",sidebar:"flutterCrud2a",previous:{title:"Step3 Create and Run flutter App",permalink:"/docs/flutter-crud2a/create-flutter-app"},next:{title:"Step5-1 Prepare files",permalink:"/docs/flutter-crud2a/prepare-files"}},o=[{value:"Goal of this step",id:"goal-of-this-step",children:[]},{value:"Flutter from web developers",id:"flutter-from-web-developers",children:[]},{value:"Let&#39;s get started!",id:"lets-get-started",children:[]},{value:"Rename <code>lib/main.dart</code> to <code>lib/initial_main.dart</code>.",id:"rename-libmaindart-to-libinitial_maindart",children:[]},{value:"Step 1 Hello World",id:"step-1-hello-world",children:[{value:"Step1-1 dart <code>main()</code> function",id:"step1-1-dart-main-function",children:[]},{value:"Step1-2 StatelessWidget",id:"step1-2-statelesswidget",children:[]}]},{value:"Step2 Use <code>MaterialApp()</code>",id:"step2-use-materialapp",children:[]},{value:"Step3 Make StatefulWidget: <code>MyHomePage</code>",id:"step3-make-statefulwidget-myhomepage",children:[]},{value:"Step4 Pass props to <code>MyHomePage</code>",id:"step4-pass-props-to-myhomepage",children:[]},{value:"Step5 <code>setState()</code> and Layout",id:"step5-setstate-and-layout",children:[{value:"<code>_</code> underscore variable in dart",id:"_-underscore-variable-in-dart",children:[]},{value:"Row and Column",id:"row-and-column",children:[]},{value:"Align of Row and Column",id:"align-of-row-and-column",children:[]},{value:"String interpolation",id:"string-interpolation",children:[]},{value:"Theme",id:"theme-1",children:[]}]},{value:"Finish!",id:"finish",children:[]},{value:"Refs",id:"refs",children:[]}],c={rightToc:o};function s({components:e,...t}){return Object(i.a)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"goal-of-this-step"},"Goal of this step"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Write initial ",Object(i.a)("inlineCode",{parentName:"li"},"lib/main.dart")," code from scratch."),Object(i.a)("li",{parentName:"ul"},"Understand initial code by writing.")),Object(i.a)("h2",{id:"flutter-from-web-developers"},"Flutter from web developers"),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/get-started/flutter-for/web-devs"}),"https://flutter.dev/docs/get-started/flutter-for/web-devs")),Object(i.a)("p",null,"Before we start writing code, let's check this table."),Object(i.a)("p",null,"This is a table to compare Web world and Flutter world."),Object(i.a)("p",null,"The ",Object(i.a)("strong",{parentName:"p"},"purpose")," of this table is ",Object(i.a)("strong",{parentName:"p"},"to use knowledge you already have to learn new thing.")),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Web"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Flutter"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"What you need to learn"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"<div>"),", ",Object(i.a)("inlineCode",{parentName:"td"},"<table>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"Container()"),",",Object(i.a)("inlineCode",{parentName:"td"},"Table()")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"https://api.flutter.dev/flutter/widgets/widgets-library.html"}),"Flutter Widgets"),", ",Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"https://flutter-widget.live/basics/introduction"}),"Flutter Widget Livebook"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},'<div style="font-size: 24px;">')),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"Text(style: TextStyle(fontSize: 24))")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"https://flutter.dev/docs/get-started/flutter-for/web-devs"}),"Flutter for web developers"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Bootstrap"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"package:flutter/material.dart"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"https://flutter.dev/docs/development/ui/widgets/material"}),"Material Components widgets"),", ",Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"https://flutter.github.io/samples/#/"}),"Official Gallery"),", ",Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"https://flutter-widget.live/basics/introduction"}),"Flutter Widget Livebook"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"javascript"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dart"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"https://dart.dev/guides/language/language-tour"}),"dart language tour"))))),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"At first you may feel flutter code is difficult."),Object(i.a)("li",{parentName:"ul"},"But to see this table you can find the similarity of web and flutter"),Object(i.a)("li",{parentName:"ul"},"I hope this table will reduce the difficulty of learning flutter!"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("mark",null,"You need a time to get used to flutter code as it took time to remember HTML, CSS, Bootstrap and Javascript! "))),Object(i.a)("h2",{id:"lets-get-started"},"Let's get started!"),Object(i.a)("p",null,"This is initial ",Object(i.a)("inlineCode",{parentName:"p"},"lib/main.dart")," code."),Object(i.a)("p",null,"From now on, we will make this file step by step."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/main.dart"',title:'"lib/main.dart"'}),'import \'package:flutter/material.dart\';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        // This is the theme of your application.\n        //\n        // Try running your application with "flutter run". You\'ll see the\n        // application has a blue toolbar. Then, without quitting the app, try\n        // changing the primarySwatch below to Colors.green and then invoke\n        // "hot reload" (press "r" in the console where you ran "flutter run",\n        // or simply save your changes to "hot reload" in a Flutter IDE).\n        // Notice that the counter didn\'t reset back to zero; the application\n        // is not restarted.\n        primarySwatch: Colors.blue,\n      ),\n      home: MyHomePage(title: \'Flutter Demo Home Page\'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  MyHomePage({Key key, this.title}) : super(key: key);\n\n  // This widget is the home page of your application. It is stateful, meaning\n  // that it has a State object (defined below) that contains fields that affect\n  // how it looks.\n\n  // This class is the configuration for the state. It holds the values (in this\n  // case the title) provided by the parent (in this case the App widget) and\n  // used by the build method of the State. Fields in a Widget subclass are\n  // always marked "final".\n\n  final String title;\n\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      // This call to setState tells the Flutter framework that something has\n      // changed in this State, which causes it to rerun the build method below\n      // so that the display can reflect the updated values. If we changed\n      // _counter without calling setState(), then the build method would not be\n      // called again, and so nothing would appear to happen.\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // This method is rerun every time setState is called, for instance as done\n    // by the _incrementCounter method above.\n    //\n    // The Flutter framework has been optimized to make rerunning build methods\n    // fast, so that you can just rebuild anything that needs updating rather\n    // than having to individually change instances of widgets.\n    return Scaffold(\n      appBar: AppBar(\n        // Here we take the value from the MyHomePage object that was created by\n        // the App.build method, and use it to set our appbar title.\n        title: Text(widget.title),\n      ),\n      body: Center(\n        // Center is a layout widget. It takes a single child and positions it\n        // in the middle of the parent.\n        child: Column(\n          // Column is also a layout widget. It takes a list of children and\n          // arranges them vertically. By default, it sizes itself to fit its\n          // children horizontally, and tries to be as tall as its parent.\n          //\n          // Invoke "debug painting" (press "p" in the console, choose the\n          // "Toggle Debug Paint" action from the Flutter Inspector in Android\n          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)\n          // to see the wireframe for each widget.\n          //\n          // Column has various properties to control how it sizes itself and\n          // how it positions its children. Here we use mainAxisAlignment to\n          // center the children vertically; the main axis here is the vertical\n          // axis because Columns are vertical (the cross axis would be\n          // horizontal).\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: <Widget>[\n            Text(\n              \'You have pushed the button this many times:\',\n            ),\n            Text(\n              \'$_counter\',\n              style: Theme.of(context).textTheme.display1,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: \'Increment\',\n        child: Icon(Icons.add),\n      ), // This trailing comma makes auto-formatting nicer for build methods.\n    );\n  }\n}\n')),Object(i.a)("h2",{id:"rename-libmaindart-to-libinitial_maindart"},"Rename ",Object(i.a)("inlineCode",{parentName:"h2"},"lib/main.dart")," to ",Object(i.a)("inlineCode",{parentName:"h2"},"lib/initial_main.dart"),"."),Object(i.a)("p",null,"I leave initial file for reference. There are a lot of useful comments.\nAnd make empty ",Object(i.a)("inlineCode",{parentName:"p"},"lib/main.dart"),"."),Object(i.a)("h2",{id:"step-1-hello-world"},"Step 1 Hello World"),Object(i.a)("h3",{id:"step1-1-dart-main-function"},"Step1-1 dart ",Object(i.a)("inlineCode",{parentName:"h3"},"main()")," function"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"void main() => runApp(MyApp());\n")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"Every app must have a top-level main() function"),", which serves as the entrypoint to the app. ",Object(i.a)("strong",{parentName:"p"},"The main() function returns void"))),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://dart.dev/guides/language/language-tour#the-main-function"}),"https://dart.dev/guides/language/language-tour#the-main-function")),Object(i.a)("h3",{id:"step1-2-statelesswidget"},"Step1-2 StatelessWidget"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Make ",Object(i.a)("inlineCode",{parentName:"li"},"MyApp")," ",Object(i.a)("strong",{parentName:"li"},"StatelessWidget")," class by VS code auto complete"),Object(i.a)("li",{parentName:"ol"},"Add ",Object(i.a)("inlineCode",{parentName:"li"},"Text()")," (Check Container() has ",Object(i.a)("inlineCode",{parentName:"li"},"child")," by hovering)")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/development/ui/widgets-intro#hello-world"}),"https://flutter.dev/docs/development/ui/widgets-intro#hello-world")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/main.dart"',title:'"lib/main.dart"'}),"import 'package:flutter/widgets.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Text(\n        'Hello, world!',\n        textDirection: TextDirection.ltr,\n      ),\n    );\n  }\n}\n")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"If you are using a material widget component, like Scaffold, Material, you don't need to specify textDirection in your Text widget... ")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/56122888/flutter-no-directionality-widget-found"}),"https://stackoverflow.com/questions/56122888/flutter-no-directionality-widget-found")),Object(i.a)("h2",{id:"step2-use-materialapp"},"Step2 Use ",Object(i.a)("inlineCode",{parentName:"h2"},"MaterialApp()")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/main.dart"',title:'"lib/main.dart"'}),"\x3c!-- highlight-next-line --\x3e\nimport 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    \x3c!-- highlight-start --\x3e\n    return  MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text('Hello World!')\n        ),\n      ),\n    );\n    \x3c!-- highlight-end --\x3e\n  }\n}\n")),Object(i.a)("h4",{id:"materialapp"},Object(i.a)("inlineCode",{parentName:"h4"},"MaterialApp()"),":"),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://api.flutter.dev/flutter/material/MaterialApp-class.html"}),"https://api.flutter.dev/flutter/material/MaterialApp-class.html")),Object(i.a)("p",null,"As I mentioned at first table, material package is something like Bootstrap."),Object(i.a)("p",null,"You can check widgets catalog here\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/development/ui/widgets/material"}),"https://flutter.dev/docs/development/ui/widgets/material")),Object(i.a)("h4",{id:"theme"},Object(i.a)("inlineCode",{parentName:"h4"},"theme"),":"),Object(i.a)("p",null,"You can choose your app's primary color like this. "),Object(i.a)("h4",{id:"title"},Object(i.a)("inlineCode",{parentName:"h4"},"title"),":"),Object(i.a)("p",null,"I think ",Object(i.a)("inlineCode",{parentName:"p"},"title")," property is almost ",Object(i.a)("strong",{parentName:"p"},"useless")," in mobile\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/50615006/flutter-where-is-the-title-of-material-app-used"}),"https://stackoverflow.com/questions/50615006/flutter-where-is-the-title-of-material-app-used")),Object(i.a)("h2",{id:"step3-make-statefulwidget-myhomepage"},"Step3 Make StatefulWidget: ",Object(i.a)("inlineCode",{parentName:"h2"},"MyHomePage")),Object(i.a)("p",null,"In this step, let's extract this ",Object(i.a)("inlineCode",{parentName:"p"},"Scaffold")," part to another class."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"home: Scaffold(\n  appBar: AppBar(title: Text('Hello World!')),\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {\n      // Add your onPressed code here!\n    },\n    child: Icon(Icons.navigation),\n    backgroundColor: Colors.green,\n  ),\n),\n")),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Make ",Object(i.a)("strong",{parentName:"li"},"StatefulWidget")," by VS code auto completion"),Object(i.a)("li",{parentName:"ol"},"Pass ",Object(i.a)("inlineCode",{parentName:"li"},"MyHomePage()")," to ",Object(i.a)("inlineCode",{parentName:"li"},"home:"))),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/main.dart"',title:'"lib/main.dart"'}),"import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return  MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      \x3c!-- highlight-next-line --\x3e\n      home: MyHomePage()\n    );\n  }\n}\n\n\x3c!-- highlight-start --\x3e\nclass MyHomePage extends StatefulWidget {\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text('Hello World!')\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: () {\n          // Add your onPressed code here!\n        },\n        child: Icon(Icons.navigation),\n        backgroundColor: Colors.green,\n      ),\n    );\n  }\n}\n\x3c!-- highlight-end --\x3e\n")),Object(i.a)("p",null,"If you want to dive into stateful widget ",Object(i.a)("strong",{parentName:"p"},"syntax"),", read the below links."),Object(i.a)("p",null,"But I think it is ok not to understand perfectly right now. Just following code auto completion is enough."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html"}),"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html")),Object(i.a)("li",{parentName:"ul"},"*",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/50612237/why-are-stateful-widgets-defined-as-two-classes-in-flutter"}),"Why are stateful widgets defined as two classes in flutter?"))),Object(i.a)("h2",{id:"step4-pass-props-to-myhomepage"},"Step4 Pass props to ",Object(i.a)("inlineCode",{parentName:"h2"},"MyHomePage")),Object(i.a)("p",null,"In this step, we are going to learn"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"how to pass down props to ",Object(i.a)("inlineCode",{parentName:"li"},"MyHomePage"))),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'{13,19,20,31} title="lib/main.dart"',"{13,19,20,31}":!0,title:'"lib/main.dart"'}),"import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return  MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: MyHomePage(title: 'Flutter Demo Home Page')\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  MyHomePage({Key key, this.title}) : super(key: key);\n  final String title;\n\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title)\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: () {\n          // Add your onPressed code here!\n        },\n        child: Icon(Icons.navigation),\n        backgroundColor: Colors.green,\n      ),\n    );\n  }\n}\n")),Object(i.a)("h4",{id:"final"},Object(i.a)("inlineCode",{parentName:"h4"},"final")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"Once assigned a value, a final variable's value cannot be changed")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/50431055/what-is-the-difference-between-the-const-and-final-keywords-in-dart"}),"What is the difference between the \u201cconst\u201d and \u201cfinal\u201d keywords in Dart?")),Object(i.a)("p",null,"Please focus on the flow now!"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"But If you want to dive into these code, check the below links!")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/50080860/what-are-keys-in-the-stateless-widgets-class"}),"What are Keys in the Stateless widgets class?")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/flutter/flutter/issues/3868#issuecomment-218642695"}),"You can skip to declare keys but...")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/52056035/flutter-myhomepagekey-key-this-title-superkey-key-pls-any-one-explain"}),"Stakoverflow question about super"))),Object(i.a)("h2",{id:"step5-setstate-and-layout"},"Step5 ",Object(i.a)("inlineCode",{parentName:"h2"},"setState()")," and Layout"),Object(i.a)("p",null,"In this step, we are going to learn"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"How to change state by ",Object(i.a)("inlineCode",{parentName:"li"},"setState()")),Object(i.a)("li",{parentName:"ul"},"How to use ",Object(i.a)("inlineCode",{parentName:"li"},"Row")," and ",Object(i.a)("inlineCode",{parentName:"li"},"Column"))),Object(i.a)("hr",null),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Declare initial State"),Object(i.a)("li",{parentName:"ol"},"Edit ",Object(i.a)("inlineCode",{parentName:"li"},"floatingActionButton")),Object(i.a)("li",{parentName:"ol"},"Learn how to change state by using ",Object(i.a)("inlineCode",{parentName:"li"},"setState()")),Object(i.a)("li",{parentName:"ol"},"Show state in body"),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"Row")," and ",Object(i.a)("inlineCode",{parentName:"li"},"Column"))),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'title="lib/main.dart"',title:'"lib/main.dart"'}),"import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return  MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: MyHomePage(title: 'Flutter Demo Home Page')\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  MyHomePage({Key key, this.title}) : super(key: key);\n  final String title;\n\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  \x3c!-- highlight-next-line --\x3e\n  int _counter = 0;\n  \n  \x3c!-- highlight-start --\x3e\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n  \x3c!-- highlight-end --\x3e\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title)\n      ),\n      \x3c!-- highlight-start --\x3e\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: <Widget>[\n            Text('You have clicked the button this many times:'),\n            Text(\n              '$_counter',\n              style: Theme.of(context).textTheme.headline4,\n            )\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: 'Increment',\n        child: Icon(Icons.add),\n      ),\n      \x3c!-- highlight-end --\x3e\n    );\n  }\n}\n")),Object(i.a)("h3",{id:"_-underscore-variable-in-dart"},Object(i.a)("inlineCode",{parentName:"h3"},"_")," underscore variable in dart"),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"It's not just a naming convention. Underscore fields, classes and methods will only be available in the .dart file where they are defined.")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/53142171/what-does-underscore-before-variable-name-mean-for-flutter"}),"What does Underscore \u201c_\u201d before variable name mean for Flutter")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"Privacy in Dart exists at the library, rather than the class level.")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/17488611/how-to-create-private-variables-in-dart/17488825"}),"https://stackoverflow.com/questions/17488611/how-to-create-private-variables-in-dart/17488825")),Object(i.a)("h3",{id:"row-and-column"},"Row and Column"),Object(i.a)("p",null,Object(i.a)("img",Object(n.a)({parentName:"p"},{src:"https://flutter.dev/assets/ui/layout/pavlova-diagram-8b3d410640d9b3575d69c0724203c5dff6814fdd1a57546a5f65f98254077a92.png",alt:"row-and-column"})),"\nImage from: ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/development/ui/layout#lay-out-multiple-widgets-vertically-and-horizontally"}),"https://flutter.dev/docs/development/ui/layout#lay-out-multiple-widgets-vertically-and-horizontally")),Object(i.a)("h3",{id:"align-of-row-and-column"},"Align of Row and Column"),Object(i.a)("p",null,Object(i.a)("img",Object(n.a)({parentName:"p"},{src:"https://flutter.dev/assets/ui/layout/row-diagram-ad51795e19e3e1d412815b287c9caa694ad357892e3ab8b3ef1da0c4c6e011db.png",alt:"Aligning widgets row"})),"\n",Object(i.a)("img",Object(n.a)({parentName:"p"},{src:"https://flutter.dev/assets/ui/layout/column-diagram-4e2ce8e33c32a09d090280fb7b2925baaf58f6de7876a551c207ab904e2fafc6.png",alt:"Aligning widgets column"})),"\nImage from: ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/development/ui/layout#aligning-widgets"}),"https://flutter.dev/docs/development/ui/layout#aligning-widgets")),Object(i.a)("h3",{id:"string-interpolation"},"String interpolation"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$variableName")," (or ",Object(i.a)("inlineCode",{parentName:"p"},"${expression}"),")"),Object(i.a)("p",null,"For example"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"Text('$var');\n\nor\n\nText('${user.name}');\n")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://dart.dev/guides/language/language-tour#strings"}),"https://dart.dev/guides/language/language-tour#strings")),Object(i.a)("h3",{id:"theme-1"},"Theme"),Object(i.a)("p",null,"You can access theme by using"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"Theme.of(context)\n")),Object(i.a)("p",null,"//",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/cookbook/design/themes#using-a-theme"}),"https://flutter.dev/docs/cookbook/design/themes#using-a-theme")),Object(i.a)("h4",{id:"texttheme"},"textTheme"),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://api.flutter.dev/flutter/material/TextTheme-class.html"}),"https://api.flutter.dev/flutter/material/TextTheme-class.html")),Object(i.a)("h2",{id:"finish"},"Finish!"),Object(i.a)("p",null,"Okay, we successfully re-created initial counter app!"),Object(i.a)("p",null,"I hope you've learned the fundamental of flutter!"),Object(i.a)("h2",{id:"refs"},"Refs"),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutterbyexample.com/dissecting-the-counter-app"}),"https://flutterbyexample.com/dissecting-the-counter-app")))}s.isMDXComponent=!0}}]);