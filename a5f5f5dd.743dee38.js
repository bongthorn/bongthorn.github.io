(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),i=(a(0),a(211)),o={title:"Build a form with validation"},l={unversionedId:"flutter-crud2a/edit-register-page/build-a-form-with-validation",id:"flutter-crud2a/edit-register-page/build-a-form-with-validation",isDocsHomePage:!1,title:"Build a form with validation",description:"In this step, we're going to",source:"@site/docs/flutter-crud2a/edit-register-page/build-a-form-with-validation.md",permalink:"/docs/flutter-crud2a/edit-register-page/build-a-form-with-validation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flutter-crud2a/edit-register-page/build-a-form-with-validation.md",sidebar:"flutterCrud2a",previous:{title:"Section Overview",permalink:"/docs/flutter-crud2a/edit-register-page/overview"},next:{title:"Style TextFormField",permalink:"/docs/flutter-crud2a/edit-register-page/styling-text-form-field"}},d=[{value:"1. Add Form widget with a GlobalKey",id:"1-add-form-widget-with-a-globalkey",children:[]},{value:"2. Add a TextFormField with validation logic",id:"2-add-a-textformfield-with-validation-logic",children:[]},{value:"3. Create a button to validate and submit the form",id:"3-create-a-button-to-validate-and-submit-the-form",children:[]},{value:"4. Test behavior",id:"4-test-behavior",children:[]},{value:"5. Add link to the Login Page",id:"5-add-link-to-the-login-page",children:[]}],s={rightToc:d};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"In this step, we're going to"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Build a form with validation")),Object(i.a)("h3",{id:"1-add-form-widget-with-a-globalkey"},"1. Add Form widget with a GlobalKey"),Object(i.a)("p",null,"As described in official docs, we will create ",Object(i.a)("inlineCode",{parentName:"p"},"Form")," and add ",Object(i.a)("inlineCode",{parentName:"p"},"GlobalKey")," to the form."),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/cookbook/forms/validation"}),"https://flutter.dev/docs/cookbook/forms/validation")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'{8,16-26} title="pages/register_page.dart"',"{8,16-26}":!0,title:'"pages/register_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass RegisterPage extends StatefulWidget {\n  @override\n  _RegisterPageState createState() => _RegisterPageState();\n}\nclass _RegisterPageState extends State<RegisterPage> {\n  final _registerFormKey = GlobalKey<FormState>();\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Register Page\"),\n      ),\n      body: Form(\n        key: _registerFormKey,\n        child: Padding(\n          padding: const EdgeInsets.all(16.0),\n          child: Column(\n            children: <Widget>[\n              // Add TextFormFields and RaisedButton here.\n            ]\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"GlobalKey"),": This uniquely identifies the Form, and allows validation of the form in a later step."),Object(i.a)("h3",{id:"2-add-a-textformfield-with-validation-logic"},"2. Add a TextFormField with validation logic"),Object(i.a)("p",null,"As described in official docs, we're going to add ",Object(i.a)("inlineCode",{parentName:"p"},"TextFormField")," with validation logic\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/cookbook/forms/validation#2-add-a-textformfield-with-validation-logic"}),"https://flutter.dev/docs/cookbook/forms/validation#2-add-a-textformfield-with-validation-logic")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'{22-54} title="pages/register_page.dart"',"{22-54}":!0,title:'"pages/register_page.dart"'}),"import 'package:flutter/material.dart';\n\nclass RegisterPage extends StatefulWidget {\n  @override\n  _RegisterPageState createState() => _RegisterPageState();\n}\nclass _RegisterPageState extends State<RegisterPage> {\n  final _registerFormKey = GlobalKey<FormState>();\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Register Page\"),\n      ),\n      body: Form(\n        key: _registerFormKey,\n        child: Padding(\n          padding: const EdgeInsets.all(16.0),\n          child: Column(\n            children: <Widget>[\n              TextFormField(\n                validator: (value) {\n                  if (value.isEmpty) {\n                    return \"Please enter name.\";\n                  }\n                  return null;\n                },\n              ),\n              TextFormField(\n                validator: (value) {\n                  if (value.isEmpty) {\n                    return 'Please enter email';\n                  }\n                  return null;\n                },\n              ),\n              TextFormField(\n                validator: (value) {\n                  if (value.isEmpty) {\n                    return 'Please enter password';\n                  }\n                  return null;\n                },\n              ),\n              TextFormField(\n                validator: (value) {\n                  // This is not correct validation. Later we will improve this validation.\n                  if (value.isEmpty) {\n                    return 'Confirm Password is not matching';\n                  }\n                  return null;\n                },\n              ),\n            ]\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),Object(i.a)("h3",{id:"3-create-a-button-to-validate-and-submit-the-form"},"3. Create a button to validate and submit the form"),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://flutter.dev/docs/cookbook/forms/validation#3-create-a-button-to-validate-and-submit-the-form"}),"https://flutter.dev/docs/cookbook/forms/validation#3-create-a-button-to-validate-and-submit-the-form")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'{11-24} title="pages/register_page.dart"',"{11-24}":!0,title:'"pages/register_page.dart"'}),"...\nTextFormField(\n  validator: (value) {\n    // This is not correct validation. Later we will improve this validation.\n    if (value.isEmpty) {\n      return 'Confirm Password is not matching';\n    }\n    return null;\n  },\n),\nContainer(\n  // https://stackoverflow.com/questions/50186555/how-to-set-margin-for-a-button-in-flutter\n  margin: const EdgeInsets.only(top: 16.0, bottom: 16.0),\n  child: RaisedButton(\n    child: Text(\"Register\"),\n    color: Theme.of(context).primaryColor,\n    textColor: Colors.white,\n    onPressed: () {\n      if (_registerFormKey.currentState.validate()) {\n        print('Validation Ok! Submit!');\n      }\n    },\n  ),\n),\n")),Object(i.a)("h3",{id:"4-test-behavior"},"4. Test behavior"),Object(i.a)("p",null,"Test validation behavior here."),Object(i.a)("h3",{id:"5-add-link-to-the-login-page"},"5. Add link to the Login Page"),Object(i.a)("p",null,"Finally, let's add link to the login page."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-dart",metastring:'{1,16-25} title="pages/register_page.dart"',"{1,16-25}":!0,title:'"pages/register_page.dart"'}),'import \'package:flutter_firebase_firestore_crud2a/pages/login_page.dart\';\n...\nContainer(\n// https://stackoverflow.com/questions/50186555/how-to-set-margin-for-a-button-in-flutter\nmargin: const EdgeInsets.only(top: 16.0, bottom: 16.0),\nchild: RaisedButton(\n  child: Text("Register"),\n  color: Theme.of(context).primaryColor,\n  textColor: Colors.white,\n  onPressed: () {\n    if (_registerFormKey.currentState.validate()) {\n      print(\'Validation Ok! Submit!\');\n    }\n  },\n),\nText("Already have an account?"),\nFlatButton(\n  child: Text("Login here!"),\n  onPressed: () {\n    Navigator.push(\n      context,\n      MaterialPageRoute(builder: (context) => LoginPage()),\n    );\n  },\n)\n')))}c.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,m=p["".concat(o,".").concat(g)]||p[g]||u[g]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);