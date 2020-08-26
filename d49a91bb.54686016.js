(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(211)),i={title:"Step6 Login Page",sidebar_label:"Step6 Login Page"},s={unversionedId:"crud2a-react-react-router/06-login",id:"crud2a-react-react-router/06-login",isDocsHomePage:!1,title:"Step6 Login Page",description:"Login is almost same with Sign Up page.",source:"@site/docs/crud2a-react-react-router/06-login.md",permalink:"/docs/crud2a-react-react-router/06-login",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/crud2a-react-react-router/06-login.md",sidebar_label:"Step6 Login Page",sidebar:"crud2aReactReactRouter",previous:{title:"Step5 SignUp Page",permalink:"/docs/crud2a-react-react-router/05-signup"},next:{title:"Step7 PostsNew",permalink:"/docs/crud2a-react-react-router/07-posts-new"}},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Login is almost same with ",Object(o.a)("strong",{parentName:"p"},"Sign Up")," page."),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"src/pages/LoginPage.js")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport axios from \'axios\';\n\nimport { setToken } from "../utils/auth";\n\nexport default class LoginPage extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      email: "",\n      password: "",\n      isSubmitting: false,\n      error: null\n    };\n\n  }\n\n  handleInputChange = (event) => {\n    const target = event.target;\n    const value = target.value;\n    const name = target.name;\n\n    this.setState({\n      [name]: value\n    });\n  }\n\n  handleSubmit = (event) => {\n    event.preventDefault();\n    this.setState({\n      isSubmitting: true\n    })\n    const { email, password } = this.state;\n\n    axios.post(\'http://localhost:3000/login\', {\n      email,\n      password\n    })\n      .then((res) => {\n        const { data } = res\n        // console.log(data); => {token: "tqFPtiq7Lvv4DzhZNyJaTXYw"}\n        setToken(data.token);\n\n        // redirect To Root\n        window.location.href = \'/\'\n      })\n      .catch((error) => {\n        this.setState({\n          isSubmitting: false,\n          error\n        });\n      })\n  }\n\n  render(){\n    const { error, isSubmitting } = this.state\n    return (\n      <>\n        <h1>Login</h1>\n        <div>{error && error.message}</div>\n        <form onSubmit={this.handleSubmit}>\n          <label>\n            Email:\n            <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />\n          </label>\n          <br/>\n          <label>\n            Password:\n            <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange} />\n          </label>\n          <br/>\n          <input type="submit" value="Submit" disabled={isSubmitting} />\n        </form>\n      </>\n    )\n  }\n}\n')))}l.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(g,s(s({ref:t},u),{},{components:n})):a.a.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);