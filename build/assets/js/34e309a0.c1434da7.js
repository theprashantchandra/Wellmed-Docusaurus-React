"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[7133],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9683:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"adding-a-router",title:"Adding a Router"},u=void 0,p={unversionedId:"adding-a-router",id:"adding-a-router",title:"Adding a Router",description:"Create React App doesn't prescribe a specific routing solution, but React Router is the most popular one.",source:"@site/../docs/adding-a-router.md",sourceDirName:".",slug:"/adding-a-router",permalink:"/docs/adding-a-router",draft:!1,editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-a-router.md",tags:[],version:"current",frontMatter:{id:"adding-a-router",title:"Adding a Router"},sidebar:"docs",previous:{title:"Adding Relay",permalink:"/docs/adding-relay"},next:{title:"Environment Variables",permalink:"/docs/adding-custom-environment-variables"}},s={},l=[],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create React App doesn't prescribe a specific routing solution, but ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/"},"React Router")," is the most popular one."),(0,a.kt)("p",null,"To add it, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install react-router-dom\n")),(0,a.kt)("p",null,"Alternatively you may use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add react-router-dom\n")),(0,a.kt)("p",null,"To try it, delete all the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.js")," and replace it with any of the examples on its website. The ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/docs/examples/basic"},"Basic Example")," is a good place to get started. For more info on adding routes, check out ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/docs/getting-started/tutorial#add-some-routes"},"the React Router docs on adding routes"),"."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment#serving-apps-with-client-side-routing"},"you may need to configure your production server to support client-side routing")," before deploying your app."))}m.isMDXComponent=!0}}]);