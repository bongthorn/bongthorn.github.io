(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),o=(a(0),a(211));const i={title:"Bootstrap JS with custom JavaScript"},r={unversionedId:"frontend-quick-learning/bootstrap-js-guide/combine-custom-js-with-bootstrap",id:"frontend-quick-learning/bootstrap-js-guide/combine-custom-js-with-bootstrap",isDocsHomePage:!1,title:"Bootstrap JS with custom JavaScript",description:"Goal",source:"@site/docs/frontend-quick-learning/bootstrap-js-guide/combine-custom-js-with-bootstrap.md",permalink:"/docs/frontend-quick-learning/bootstrap-js-guide/combine-custom-js-with-bootstrap",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/frontend-quick-learning/bootstrap-js-guide/combine-custom-js-with-bootstrap.md",sidebar:"frontendQuickLearning",previous:{title:"Introduction to JS for Bootstrap",permalink:"/docs/frontend-quick-learning/bootstrap-js-guide/bootstrap-js-intro"},next:{title:"Section Overview and Preparation",permalink:"/docs/frontend-quick-learning/combine-front-end-guide/section-overview"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Preparation",id:"preparation",children:[]},{value:"Do something when user visit website",id:"do-something-when-user-visit-website",children:[{value:"Add <code>$(document).ready()</code>",id:"add-documentready",children:[]},{value:"Check the output",id:"check-the-output",children:[]},{value:"Refactor",id:"refactor",children:[]}]},{value:"Add code to open modal",id:"add-code-to-open-modal",children:[]},{value:"Edit modal title and body",id:"edit-modal-title-and-body",children:[]},{value:"Check the output",id:"check-the-output-1",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(o.a)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"goal"},"Goal"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"\u26a1 Make a feature something like below gif.")),Object(o.a)("p",null,Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200526_222117.gif",alt:"document-ready-show-modal"}))),Object(o.a)("div",{className:"admonition admonition-info alert alert--info"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Specifications")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("ol",{parentName:"div"},Object(o.a)("li",{parentName:"ol"},"When user visit your website"),Object(o.a)("li",{parentName:"ol"},"Show modal to announce something (ex: wikipedia donation)")))),Object(o.a)("h2",{id:"preparation"},"Preparation"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Make ",Object(o.a)("inlineCode",{parentName:"li"},"custom.js")," in ",Object(o.a)("inlineCode",{parentName:"li"},"bootstrap-js-test")," folder"),Object(o.a)("li",{parentName:"ul"},"Include ",Object(o.a)("inlineCode",{parentName:"li"},"custom.js")," in ",Object(o.a)("inlineCode",{parentName:"li"},"bootstrap-js-test1.html"))),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="bootstrap-js-test1.html"',title:'"bootstrap-js-test1.html"'}),'<!DOCTYPE html>\n<html lang="en">\n    ...\n\n    \x3c!-- Optional JavaScript --\x3e\n    \x3c!-- jQuery first, then Popper.js, then Bootstrap JS --\x3e\n    <script\n      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"\n      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"\n      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"\n      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"\n      crossorigin="anonymous"\n    ><\/script>\n\n    \x3c!-- highlight-start --\x3e\n    \x3c!-- Custom javascript --\x3e\n    <script src="custom.js"><\/script>\n    \x3c!-- highlight-end --\x3e\n  </body>\n</html>\n')),Object(o.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("ul",{parentName:"div"},Object(o.a)("li",{parentName:"ul"},"Order of javascript file is important."),Object(o.a)("li",{parentName:"ul"},"We will use jQuery in ",Object(o.a)("inlineCode",{parentName:"li"},"custom.js")," file, that's why it should be ",Object(o.a)("inlineCode",{parentName:"li"},"jQuery")," => ",Object(o.a)("inlineCode",{parentName:"li"},"custom.js"))))),Object(o.a)("h2",{id:"do-something-when-user-visit-website"},"Do something when user visit website"),Object(o.a)("p",null,"To do something when user visit website, you can use ",Object(o.a)("inlineCode",{parentName:"p"},"$(document).ready()"),"."),Object(o.a)("h3",{id:"add-documentready"},"Add ",Object(o.a)("inlineCode",{parentName:"h3"},"$(document).ready()")),Object(o.a)("p",null,Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://learn.jquery.com/using-jquery-core/document-ready/"}),"https://learn.jquery.com/using-jquery-core/document-ready/")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="bootstrap-js-test/custom.js"',title:'"bootstrap-js-test/custom.js"'}),'$(document).ready(function () {\n  console.log("ready!");\n});\n')),Object(o.a)("h3",{id:"check-the-output"},"Check the output"),Object(o.a)("p",null,Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://storage.googleapis.com/coderhackers-assets/docs/img/20200510_030230.gif",alt:null}))),Object(o.a)("h3",{id:"refactor"},"Refactor"),Object(o.a)("p",null,"This is a shorthand of  ",Object(o.a)("inlineCode",{parentName:"p"},"$(document).ready()")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="bootstrap-js-test/custom.js"',title:'"bootstrap-js-test/custom.js"'}),'$(function() {\n  console.log("ready!");\n});\n')),Object(o.a)("h2",{id:"add-code-to-open-modal"},"Add code to open modal"),Object(o.a)("p",null,"This is a code to open modal manually."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"$('#myModal').modal('show')\n")),Object(o.a)("p",null,Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/modal/#modalshow"}),"https://getbootstrap.com/docs/4.5/components/modal/#modalshow")),Object(o.a)("p",null,"Then, change the target ",Object(o.a)("inlineCode",{parentName:"p"},"id")," for our code"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="custom.js"',title:'"custom.js"'}),'$(function () {\n  // highlight-next-line\n  $("#exampleModal").modal("show");\n});\n')),Object(o.a)("h2",{id:"edit-modal-title-and-body"},"Edit modal title and body"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="bootstrap-js-test1.html"',title:'"bootstrap-js-test1.html"'}),'...\n\x3c!-- Modal --\x3e\n    <div\n      class="modal fade"\n      id="exampleModal"\n      tabindex="-1"\n      role="dialog"\n      aria-labelledby="exampleModalLabel"\n      aria-hidden="true"\n    >\n      <div class="modal-dialog">\n        <div class="modal-content">\n          <div class="modal-header">\n            \x3c!-- highlight-start --\x3e\n            <h5 class="modal-title" id="exampleModalLabel">We need your help</h5>\n            \x3c!-- highlight-end --\x3e\n            <button\n              type="button"\n              class="close"\n              data-dismiss="modal"\n              aria-label="Close"\n            >\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <div class="modal-body">\n            \x3c!-- highlight-start --\x3e\n            <p>\n              We need your help to maintain our website. Commodo sit anim\n              laboris exercitation elit tempor anim veniam duis in. Nulla\n              aliquip culpa pariatur irure eu deserunt. Dolore cupidatat\n              reprehenderit occaecat commodo aliqua. Eiusmod qui ipsum\n              exercitation et et adipisicing laboris. Exercitation ad\n              adipisicing duis elit consectetur et voluptate officia dolore\n              exercitation pariatur. Anim duis et ad velit et velit esse esse eu\n              cillum nulla. Non voluptate culpa ad culpa labore sit minim elit.\n            </p>\n            \x3c!-- highlight-end --\x3e\n          </div>\n          <div class="modal-footer">\n            <button\n              type="button"\n              class="btn btn-secondary"\n              data-dismiss="modal"\n            >\n              Close\n            </button>\n            <button type="button" class="btn btn-primary">Save changes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n...\n')),Object(o.a)("h2",{id:"check-the-output-1"},"Check the output"),Object(o.a)("p",null,"check it works correctly here..."))}l.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,b=u["".concat(r,".").concat(m)]||u[m]||p[m]||i;return a?o.a.createElement(b,c(c({ref:t},l),{},{components:a})):o.a.createElement(b,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);