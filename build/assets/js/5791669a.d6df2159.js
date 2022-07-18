"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"title-and-meta-tags",title:"Title and Meta Tags",sidebar_label:"Title & Meta Tags"},c=void 0,s={unversionedId:"title-and-meta-tags",id:"title-and-meta-tags",title:"Title and Meta Tags",description:"Changing the title tag",source:"@site/../docs/title-and-meta-tags.md",sourceDirName:".",slug:"/title-and-meta-tags",permalink:"/docs/title-and-meta-tags",draft:!1,editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/title-and-meta-tags.md",tags:[],version:"current",frontMatter:{id:"title-and-meta-tags",title:"Title and Meta Tags",sidebar_label:"Title & Meta Tags"},sidebar:"docs",previous:{title:"Integrating with an API",permalink:"/docs/integrating-with-an-api-backend"},next:{title:"Deployment",permalink:"/docs/deployment"}},p={},d=[{value:"Changing the title tag",id:"changing-the-title-tag",level:2},{value:"Generating Dynamic <code>&lt;meta&gt;</code> Tags on the Server",id:"generating-dynamic-meta-tags-on-the-server",level:2},{value:"Injecting Data from the Server into the Page",id:"injecting-data-from-the-server-into-the-page",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"changing-the-title-tag"},"Changing the title tag"),(0,o.kt)("p",null,"You can find the source HTML file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," folder of the generated project. You may edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"<title>")," tag in it to change the title from \u201cReact App\u201d to anything else."),(0,o.kt)("p",null,"Note that normally you wouldn\u2019t edit files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," folder very often. For example, ",(0,o.kt)("a",{parentName:"p",href:"/docs/adding-a-stylesheet"},"adding a stylesheet")," is done without touching the HTML."),(0,o.kt)("p",null,"If you need to dynamically update the page title based on the content, you can use the browser ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/title"},(0,o.kt)("inlineCode",{parentName:"a"},"document.title"))," API. For more complex scenarios when you want to change the title from React components, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"React Helmet"),", a third party library."),(0,o.kt)("p",null,"If you use a custom server for your app in production and want to modify the title before it gets sent to the browser, you can follow advice in ",(0,o.kt)("a",{parentName:"p",href:"#generating-dynamic-meta-tags-on-the-server"},"this section"),". Alternatively, you can pre-build each page as a static HTML file which then loads the JavaScript bundle, which is covered ",(0,o.kt)("a",{parentName:"p",href:"/docs/pre-rendering-into-static-html-files"},"here"),"."),(0,o.kt)("h2",{id:"generating-dynamic-meta-tags-on-the-server"},"Generating Dynamic ",(0,o.kt)("inlineCode",{parentName:"h2"},"<meta>")," Tags on the Server"),(0,o.kt)("p",null,"Since Create React App doesn\u2019t support server rendering, you might be wondering how to make ",(0,o.kt)("inlineCode",{parentName:"p"},"<meta>")," tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta property="og:title" content="__OG_TITLE__" />\n    <meta property="og:description" content="__OG_DESCRIPTION__" />\n  </head>\n</html>\n')),(0,o.kt)("p",null,"Then, on the server, regardless of the backend you use, you can read ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," into memory and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"__OG_TITLE__"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"__OG_DESCRIPTION__"),", and any other placeholders with values depending on the current URL. Make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!"),(0,o.kt)("p",null,"If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in basic cases."),(0,o.kt)("h2",{id:"injecting-data-from-the-server-into-the-page"},"Injecting Data from the Server into the Page"),(0,o.kt)("p",null,"Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<!doctype html>\n<html lang="en">\n  <head>\n    <script>\n      window.SERVER_DATA = __SERVER_DATA__;\n    <\/script>\n')),(0,o.kt)("p",null,"Then, on the server, you can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"__SERVER_DATA__")," with a JSON of real data right before sending the response. The client code can then read ",(0,o.kt)("inlineCode",{parentName:"p"},"window.SERVER_DATA")," to use it. ",(0,o.kt)("strong",{parentName:"p"},"Make sure to ",(0,o.kt)("a",{parentName:"strong",href:"https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0"},"sanitize the JSON before sending it to the client")," as it makes your app vulnerable to XSS attacks.")))}h.isMDXComponent=!0}}]);