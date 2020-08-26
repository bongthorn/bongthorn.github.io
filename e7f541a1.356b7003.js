(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{196:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return p}));var r=n(2),o=(n(0),n(211));const s={title:"Step10 My Posts Page and Delete Post"},a={unversionedId:"crud2a-react-react-router/10-my-posts-and-delete-post",id:"crud2a-react-react-router/10-my-posts-and-delete-post",isDocsHomePage:!1,title:"Step10 My Posts Page and Delete Post",description:"src/pages/MyPostsPage.js",source:"@site/docs/crud2a-react-react-router/10-my-posts-and-delete-post.md",permalink:"/docs/crud2a-react-react-router/10-my-posts-and-delete-post",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/crud2a-react-react-router/10-my-posts-and-delete-post.md",sidebar:"crud2aReactReactRouter",previous:{title:"Step9 PostsShow",permalink:"/docs/crud2a-react-react-router/09-posts-show"},next:{title:"Step11 PostsEdit",permalink:"/docs/crud2a-react-react-router/11-posts-edit"}},c=[],i={rightToc:c};function p({components:t,...e}){return Object(o.a)("wrapper",Object(r.a)({},i,e,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"src/pages/MyPostsPage.js")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from \"react\";\nimport { Link } from \"react-router-dom\";\nimport axios from 'axios';\n\nimport { getAccessToken } from '../utils/auth';\n\nclass MyPostsPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      error: null,\n      isLoaded: false,\n      posts: [],\n    };\n  }\n\n  // https://reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call\n  componentDidMount() {\n    axios.get(\"http://localhost:3000/me/posts\", {\n      headers: {\n        'Authorization': `Bearer ${getAccessToken()}`\n      },\n    })\n      .then((res) => {\n        const posts = res.data;\n        this.setState({\n          isLoaded: true,\n          posts\n        });\n      })\n      .catch((error) => {\n        this.setState({\n          isLoaded: true,\n          error\n        });\n      })\n  }\n\n  onClickDelete = (deletePost) => {\n    axios.delete(`http://localhost:3000/posts/${deletePost.id}`, {\n      headers: {\n        'Authorization': `Bearer ${getAccessToken()}`\n      },\n    })\n      .then(() => {\n        // https://stackoverflow.com/questions/36326612/delete-item-from-state-array-in-react\n        const newPosts = this.state.posts.filter((post) => post.id !== deletePost.id);\n        this.setState({\n          posts: newPosts\n        })\n      })\n  }\n\n  render() {\n    const { error, isLoaded, posts } = this.state;\n    if (error) {\n      return <div>Error: {error.message}</div>;\n    } else if (!isLoaded) {\n      return <div>Loading...</div>;\n    } else {\n      return (\n        <>\n          <h1>My Posts</h1>\n          <table>\n            <thead>\n              <tr>\n                <th>Title</th>\n                <th>Content</th>\n              </tr>\n            </thead>\n            <tbody>\n            {posts.map(post => (\n              <tr key={post.id}>\n                <td>{post.title}</td>\n                <td>{post.content}</td>\n                <td><Link to={`/posts/${post.id}`}>Show</Link></td>\n                <td><Link to={`/posts/${post.id}/edit`}>Edit</Link></td>\n                {/* https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers */}\n                <td><button onClick={() => this.onClickDelete(post)}>Delete</button></td>\n              </tr>\n            ))}\n            </tbody>\n          </table>\n        </>\n      );\n    }\n  }\n}\n\nexport default MyPostsPage;\n")))}p.isMDXComponent=!0},211:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(0),o=n.n(r);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=o.a.createContext({}),d=function(t){var e=o.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},u=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,a=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||l[m]||s;return n?o.a.createElement(f,c(c({ref:e},p),{},{components:n})):o.a.createElement(f,c({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,a=new Array(s);a[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);