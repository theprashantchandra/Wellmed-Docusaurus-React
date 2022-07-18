"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[1329],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"integrating-with-an-api-backend",title:"Integrating with an API Backend",sidebar_label:"Integrating with an API"},p=void 0,l={unversionedId:"integrating-with-an-api-backend",id:"integrating-with-an-api-backend",title:"Integrating with an API Backend",description:"These tutorials will help you to integrate your app with an API backend running on another port,",source:"@site/../docs/integrating-with-an-api-backend.md",sourceDirName:".",slug:"/integrating-with-an-api-backend",permalink:"/docs/integrating-with-an-api-backend",draft:!1,editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/integrating-with-an-api-backend.md",tags:[],version:"current",frontMatter:{id:"integrating-with-an-api-backend",title:"Integrating with an API Backend",sidebar_label:"Integrating with an API"},sidebar:"docs",previous:{title:"Fetching Data",permalink:"/docs/fetching-data-with-ajax-requests"},next:{title:"Title & Meta Tags",permalink:"/docs/title-and-meta-tags"}},u={},s=[{value:"Node",id:"node",level:2},{value:"Ruby on Rails",id:"ruby-on-rails",level:2},{value:"API Platform (PHP and Symfony)",id:"api-platform-php-and-symfony",level:2},{value:"C# (ASP.NET Core)",id:"c-aspnet-core",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These tutorials will help you to integrate your app with an API backend running on another port,\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," to access it."),(0,i.kt)("h2",{id:"node"},"Node"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/"},"this tutorial"),".\nYou can find the companion GitHub repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fullstackreact/food-lookup-demo"},"here"),"."),(0,i.kt)("h2",{id:"ruby-on-rails"},"Ruby on Rails"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/"},"this tutorial"),".\nYou can find the companion GitHub repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fullstackreact/food-lookup-demo-rails"},"here"),"."),(0,i.kt)("h2",{id:"api-platform-php-and-symfony"},"API Platform (PHP and Symfony)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://api-platform.com"},"API Platform")," is a framework designed to build API-driven projects.\nIt allows creating hypermedia and GraphQL APIs in minutes.\nIt is shipped with an official Progressive Web App generator as well as a dynamic administration interface, both built for Create React App.\nCheck out ",(0,i.kt)("a",{parentName:"p",href:"https://api-platform.com/docs/distribution"},"this tutorial"),"."),(0,i.kt)("h2",{id:"c-aspnet-core"},"C# (ASP.NET Core)"),(0,i.kt)("p",null,"ASP.NET Core has a React project template that uses Create React App. Check out ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react"},"their documentation"),"."))}f.isMDXComponent=!0}}]);