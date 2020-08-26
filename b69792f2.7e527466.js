(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{160:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return l}));var a=n(2),r=(n(0),n(211));const o={title:"Grid System Layout"},s={unversionedId:"frontend-quick-learning/bootstrap-css-guide/grid-layout",id:"frontend-quick-learning/bootstrap-css-guide/grid-layout",isDocsHomePage:!1,title:"Grid System Layout",description:"Goal",source:"@site/docs/frontend-quick-learning/bootstrap-css-guide/grid-layout.md",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/grid-layout",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/bootstrap-css-guide/grid-layout.md",sidebar:"frontendQuickLearning",previous:{title:"Components",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/components"},next:{title:"col - Check requirements",permalink:"/docs/frontend-quick-learning/bootstrap-css-guide/col-requirements"}},i=[{value:"Goal",id:"goal",children:[]},{value:"What is Grid system ?",id:"what-is-grid-system-",children:[]},{value:"Try Grid system",id:"try-grid-system",children:[{value:"Copy and Paste code",id:"copy-and-paste-code",children:[]},{value:"Check the output",id:"check-the-output",children:[]},{value:"Add Card component",id:"add-card-component",children:[]},{value:"The final code",id:"the-final-code",children:[]},{value:"Check the output",id:"check-the-output-1",children:[]}]},{value:"Summery",id:"summery",children:[]}],c={rightToc:i};function l({components:t,...e}){return Object(r.b)("wrapper",Object(a.a)({},c,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"goal"},"Goal"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u26a1 Try Bootstrap ",Object(r.b)("strong",{parentName:"li"},"grid system")," to make 3 columns layout")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-20-18-25-19.png",alt:null}))),Object(r.b)("h2",{id:"what-is-grid-system-"},"What is Grid system ?"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Bootstrap\u2019s grid system uses a series of ",Object(r.b)("mark",null,Object(r.b)("strong",{parentName:"p"},"containers"),", ",Object(r.b)("strong",{parentName:"p"},"rows"),", and ",Object(r.b)("strong",{parentName:"p"},"columns")," to layout and align content"),".")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/layout/grid/"}),"https://getbootstrap.com/docs/4.5/layout/grid/")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="Grid System of Bootstrap"',title:'"Grid',System:!0,of:!0,'Bootstrap"':!0}),'<div class="container">\n  <div class="row">\n    <div class="col-**"></div>\n    ...\n  </div>\n</div>\n')),Object(r.b)("h2",{id:"try-grid-system"},"Try Grid system"),Object(r.b)("p",null,"Let's try Bootstrap grid system \ud83d\udc4d"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/layout/grid/"}),"https://getbootstrap.com/docs/4.5/layout/grid/")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/copy-grid-layout.gif",alt:"copy-grid-layout"}))),Object(r.b)("h3",{id:"copy-and-paste-code"},"Copy and Paste code"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"bootstrap-test1.html")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="bootstrap-test1.html"',title:'"bootstrap-test1.html"'}),'<!doctype html>\n<html lang="en">\n  <head>\n    \x3c!-- Required meta tags --\x3e\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n\n    \x3c!-- Bootstrap CSS --\x3e\n    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n\n    <title>Hello, world!</title>\n  </head>\n  <body>\n    <nav class="navbar navbar-expand-lg navbar-light bg-light">\n      <a class="navbar-brand" href="#">Navbar</a>\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n      </button>\n    \n      <div class="collapse navbar-collapse" id="navbarSupportedContent">\n        <ul class="navbar-nav mr-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="#">Link</a>\n          </li>\n          <li class="nav-item dropdown">\n            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n              Dropdown\n            </a>\n            <div class="dropdown-menu" aria-labelledby="navbarDropdown">\n              <a class="dropdown-item" href="#">Action</a>\n              <a class="dropdown-item" href="#">Another action</a>\n              <div class="dropdown-divider"></div>\n              <a class="dropdown-item" href="#">Something else here</a>\n            </div>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\n          </li>\n        </ul>\n        <form class="form-inline my-2 my-lg-0">\n          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\n          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\n        </form>\n      </div>\n    </nav>\n\n    <div class="jumbotron">\n      <h1 class="display-4">Hello, world!</h1>\n      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n      <hr class="my-4">\n      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n    </div>\n\n    \x3c!-- highlight-start --\x3e\n    <div class="container">\n      <div class="row">\n        <div class="col-sm">\n          One of three columns\n        </div>\n        <div class="col-sm">\n          One of three columns\n        </div>\n        <div class="col-sm">\n          One of three columns\n        </div>\n      </div>\n    </div>\n    \x3c!-- highlight-end --\x3e\n\n    \x3c!-- Optional JavaScript --\x3e\n    \x3c!-- jQuery first, then Popper.js, then Bootstrap JS --\x3e\n    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"><\/script>\n    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>\n  </body>\n</html>\n')),Object(r.b)("h3",{id:"check-the-output"},"Check the output"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/output-after-copy-grid.png",alt:"output-after-copy-grid"}))),Object(r.b)("h3",{id:"add-card-component"},"Add Card component"),Object(r.b)("p",null,"To make it more like real example, let's add ",Object(r.b)("strong",{parentName:"p"},"card")," component."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/card/"}),"https://getbootstrap.com/docs/4.5/components/card/")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/copy-card.gif",alt:"copy-card.gif"}))),Object(r.b)("p",null,"Copy and paste card html."),Object(r.b)("p",null,"And change ",Object(r.b)("inlineCode",{parentName:"p"},"width: 100%;")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- highlight-next-line --\x3e\n<div class="card" style="width: 100%;">\n  <img src="..." class="card-img-top" alt="...">\n  <div class="card-body">\n    <h5 class="card-title">Card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n    <a href="#" class="btn btn-primary">Go somewhere</a>\n  </div>\n</div>\n')),Object(r.b)("p",null,"Then, replace img src with ..."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG\n")),Object(r.b)("h3",{id:"the-final-code"},"The final code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!-- Required meta tags --\x3e\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, shrink-to-fit=no"\n    />\n\n    \x3c!-- Bootstrap CSS --\x3e\n    <link\n      rel="stylesheet"\n      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n      crossorigin="anonymous"\n    />\n\n    <title>Hello, world!</title>\n  </head>\n  <body>\n    <nav class="navbar navbar-expand-lg navbar-light bg-light">\n      <a class="navbar-brand" href="#">Navbar</a>\n      <button\n        class="navbar-toggler"\n        type="button"\n        data-toggle="collapse"\n        data-target="#navbarSupportedContent"\n        aria-controls="navbarSupportedContent"\n        aria-expanded="false"\n        aria-label="Toggle navigation"\n      >\n        <span class="navbar-toggler-icon"></span>\n      </button>\n\n      <div class="collapse navbar-collapse" id="navbarSupportedContent">\n        <ul class="navbar-nav mr-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="#"\n              >Home <span class="sr-only">(current)</span></a\n            >\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="#">Link</a>\n          </li>\n          <li class="nav-item dropdown">\n            <a\n              class="nav-link dropdown-toggle"\n              href="#"\n              id="navbarDropdown"\n              role="button"\n              data-toggle="dropdown"\n              aria-haspopup="true"\n              aria-expanded="false"\n            >\n              Dropdown\n            </a>\n            <div class="dropdown-menu" aria-labelledby="navbarDropdown">\n              <a class="dropdown-item" href="#">Action</a>\n              <a class="dropdown-item" href="#">Another action</a>\n              <div class="dropdown-divider"></div>\n              <a class="dropdown-item" href="#">Something else here</a>\n            </div>\n          </li>\n          <li class="nav-item">\n            <a\n              class="nav-link disabled"\n              href="#"\n              tabindex="-1"\n              aria-disabled="true"\n              >Disabled</a\n            >\n          </li>\n        </ul>\n        <form class="form-inline my-2 my-lg-0">\n          <input\n            class="form-control mr-sm-2"\n            type="search"\n            placeholder="Search"\n            aria-label="Search"\n          />\n          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">\n            Search\n          </button>\n        </form>\n      </div>\n    </nav>\n\n    <div class="jumbotron">\n      <h1 class="display-4">Hello, world!</h1>\n      <p class="lead">\n        This is a simple hero unit, a simple jumbotron-style component for\n        calling extra attention to featured content or information.\n      </p>\n      <hr class="my-4" />\n      <p>\n        It uses utility classes for typography and spacing to space content out\n        within the larger container.\n      </p>\n      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n    </div>\n\n    \x3c!-- highlight-start --\x3e\n    <div class="container">\n      <div class="row">\n        <div class="col-sm">\n          <div class="card" style="width: 100%;">\n            <img\n              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"\n              class="card-img-top"\n              alt="..."\n            />\n            <div class="card-body">\n              <h5 class="card-title">Card title</h5>\n              <p class="card-text">\n                Some quick example text to build on the card title and make up\n                the bulk of the card\'s content.\n              </p>\n              <a href="#" class="btn btn-primary">Go somewhere</a>\n            </div>\n          </div>\n        </div>\n        <div class="col-sm">\n          <div class="card" style="width: 100%;">\n            <img\n              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"\n              class="card-img-top"\n              alt="..."\n            />\n            <div class="card-body">\n              <h5 class="card-title">Card title</h5>\n              <p class="card-text">\n                Some quick example text to build on the card title and make up\n                the bulk of the card\'s content.\n              </p>\n              <a href="#" class="btn btn-primary">Go somewhere</a>\n            </div>\n          </div>\n        </div>\n        <div class="col-sm">\n          <div class="card" style="width: 100%;">\n            <img\n              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"\n              class="card-img-top"\n              alt="..."\n            />\n            <div class="card-body">\n              <h5 class="card-title">Card title</h5>\n              <p class="card-text">\n                Some quick example text to build on the card title and make up\n                the bulk of the card\'s content.\n              </p>\n              <a href="#" class="btn btn-primary">Go somewhere</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \x3c!-- highlight-end --\x3e\n\n    \x3c!-- Optional JavaScript --\x3e\n    \x3c!-- jQuery first, then Popper.js, then Bootstrap JS --\x3e\n    <script\n      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"\n      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"\n      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"\n      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"\n      crossorigin="anonymous"\n    ><\/script>\n  </body>\n</html>\n')),Object(r.b)("h3",{id:"check-the-output-1"},"Check the output"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-01-51-04.png",alt:null}))),Object(r.b)("h2",{id:"summery"},"Summery"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"summery")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In this step, it is enough to learn that..."),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("mark",null,"Use Bootstrap's grid system to layout website")))),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="Grid System of Bootstrap"',title:'"Grid',System:!0,of:!0,'Bootstrap"':!0}),'<div class="container">\n  <div class="row">\n    <div class="col-**"></div>\n    ...\n  </div>\n</div>\n')))),Object(r.b)("p",null,"From the next step, let's learn ",Object(r.b)("inlineCode",{parentName:"p"},"col-**")," in detail to make more real world layout."))}l.isMDXComponent=!0},211:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),d=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(h,i(i({ref:e},l),{},{components:n})):r.a.createElement(h,i({ref:e},l))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);