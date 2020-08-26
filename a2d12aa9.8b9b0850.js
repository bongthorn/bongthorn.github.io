(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(211));const o={title:"Step3 Copy and paste react-router auth example code",sidebar_label:"Step3 Copy and paste react-router auth example code"},c={unversionedId:"crud2a-react-react-router/03-copy-and-paste-react-router-auth-example-code",id:"crud2a-react-react-router/03-copy-and-paste-react-router-auth-example-code",isDocsHomePage:!1,title:"Step3 Copy and paste react-router auth example code",description:"Step3 Copy and paste react-router auth example code",source:"@site/docs/crud2a-react-react-router/03-copy-and-paste-react-router-auth-example-code.md",permalink:"/docs/crud2a-react-react-router/03-copy-and-paste-react-router-auth-example-code",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/crud2a-react-react-router/03-copy-and-paste-react-router-auth-example-code.md",sidebar_label:"Step3 Copy and paste react-router auth example code",sidebar:"crud2aReactReactRouter",previous:{title:"Step2 Install necessary packages",permalink:"/docs/crud2a-react-react-router/02-using-package"},next:{title:"Step4 folder structure",permalink:"/docs/crud2a-react-react-router/04-folder-structure"}},u=[{value:"Step3 Copy and paste react-router auth example code",id:"step3-copy-and-paste-react-router-auth-example-code",children:[]}],i={rightToc:u};function p({components:e,...t}){return Object(a.a)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.a)("h2",{id:"step3-copy-and-paste-react-router-auth-example-code"},"Step3 Copy and paste react-router auth example code"),Object(a.a)("p",null,Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"https://reacttraining.com/react-router/web/example/auth-workflow"}),"https://reacttraining.com/react-router/web/example/auth-workflow")),Object(a.a)("p",null,"I added comment with ",Object(a.a)("inlineCode",{parentName:"p"},"/* ... */")),Object(a.a)("p",null,Object(a.a)("inlineCode",{parentName:"p"},"src/App.js")),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport {\n  BrowserRouter as Router,\n  Switch,\n  Route,\n  Link,\n  Redirect,\n  useHistory,\n  useLocation\n} from "react-router-dom";\n\nexport default function App() {\n  return (\n    <Router>\n      <div>\n        <AuthButton />\n\n        <ul>\n          <li>\n            <Link to="/public">Public Page</Link>\n          </li>\n          <li>\n            <Link to="/protected">Protected Page</Link>\n          </li>\n        </ul>\n\n        <Switch>\n          <Route path="/public">\n            <PublicPage />\n          </Route>\n          <Route path="/login">\n            <LoginPage />\n          </Route>\n          <PrivateRoute path="/protected">\n            <ProtectedPage />\n          </PrivateRoute>\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n\n/* auth utils */\n// https://stackoverflow.com/questions/40870777/where-to-put-utility-functions-in-a-react-redux-application\nconst fakeAuth = {\n  isAuthenticated: false,\n  authenticate(cb) {\n    fakeAuth.isAuthenticated = true;\n    setTimeout(cb, 100); // fake async\n  },\n  signout(cb) {\n    fakeAuth.isAuthenticated = false;\n    setTimeout(cb, 100);\n  }\n};\n\n/* Components */\nfunction AuthButton() {\n  let history = useHistory();\n\n  return fakeAuth.isAuthenticated ? (\n    <p>\n      Welcome!{" "}\n      <button\n        onClick={() => {\n          fakeAuth.signout(() => history.push("/"));\n        }}\n      >\n        Sign out\n      </button>\n    </p>\n  ) : (\n    <p>You are not logged in.</p>\n  );\n}\n\n/* Router Wrapper (utils) */\n// A wrapper for <Route> that redirects to the login\n// screen if you\'re not yet authenticated.\nfunction PrivateRoute({ children, ...rest }) {\n  return (\n    <Route\n      {...rest}\n      render={({ location }) =>\n        fakeAuth.isAuthenticated ? (\n          children\n        ) : (\n          <Redirect\n            to={{\n              pathname: "/login",\n              state: { from: location }\n            }}\n          />\n        )\n      }\n    />\n  );\n}\n\n/* Pages */\nfunction PublicPage() {\n  return <h3>Public</h3>;\n}\n\nfunction ProtectedPage() {\n  return <h3>Protected</h3>;\n}\n\nfunction LoginPage() {\n  let history = useHistory();\n  let location = useLocation();\n\n  let { from } = location.state || { from: { pathname: "/" } };\n  let login = () => {\n    fakeAuth.authenticate(() => {\n      history.replace(from);\n    });\n  };\n\n  return (\n    <div>\n      <p>You must log in to view the page at {from.pathname}</p>\n      <button onClick={login}>Log in</button>\n    </div>\n  );\n}\n')))}p.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?a.a.createElement(m,u(u({ref:t},p),{},{components:n})):a.a.createElement(m,u({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);