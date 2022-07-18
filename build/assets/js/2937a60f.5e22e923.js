"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[8936],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"measuring-performance",title:"Measuring Performance"},l=void 0,c={unversionedId:"measuring-performance",id:"measuring-performance",title:"Measuring Performance",description:"By default, Create React App includes a performance relayer that allows you to measure and analyze",source:"@site/../docs/measuring-performance.md",sourceDirName:".",slug:"/measuring-performance",permalink:"/docs/measuring-performance",draft:!1,editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/measuring-performance.md",tags:[],version:"current",frontMatter:{id:"measuring-performance",title:"Measuring Performance"},sidebar:"docs",previous:{title:"Making a Progressive Web App",permalink:"/docs/making-a-progressive-web-app"},next:{title:"Creating a Production Build",permalink:"/docs/production-build"}},u={},p=[{value:"Web Vitals",id:"web-vitals",level:2},{value:"Sending results to analytics",id:"sending-results-to-analytics",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, Create React App includes a performance relayer that allows you to measure and analyze\nthe performance of your application using different metrics."),(0,o.kt)("p",null,"To measure any of the supported metrics, you only need to pass a function into the ",(0,o.kt)("inlineCode",{parentName:"p"},"reportWebVitals"),"\nfunction in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"reportWebVitals(console.log);\n")),(0,o.kt)("p",null,"This function is fired when the final values for any of the metrics have finished calculating on the\npage. You can use it to log any of the results to the console or send to a particular endpoint."),(0,o.kt)("h2",{id:"web-vitals"},"Web Vitals"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web.dev/vitals/"},"Web Vitals")," are a set of useful metrics that aim to capture the user\nexperience of a web page. In Create React App, a third-party library is used to measure these\nmetrics (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/web-vitals"},"web-vitals"),")."),(0,o.kt)("p",null,"To understand more about the object returned to the function when a metric value is calculated,\nrefer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/web-vitals/#types"},"documentation"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/web-vitals/#browser-support"},"Browser\nSupport")," section also explains which browsers are supported."),(0,o.kt)("h2",{id:"sending-results-to-analytics"},"Sending results to analytics"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"reportWebVitals")," function, you can send any of results to an analytics endpoint to measure and track real user performance on your site. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function sendToAnalytics(metric) {\n  const body = JSON.stringify(metric);\n  const url = 'https://example.com/analytics';\n\n  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`\n  if (navigator.sendBeacon) {\n    navigator.sendBeacon(url, body);\n  } else {\n    fetch(url, { body, method: 'POST', keepalive: true });\n  }\n}\n\nreportWebVitals(sendToAnalytics);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you use Google Analytics, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," value to make it easier to construct metric distributions manually (to calculate percentiles, etc\u2026)."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function sendToAnalytics({ id, name, value }) {\n  ga('send', 'event', {\n    eventCategory: 'Web Vitals',\n    eventAction: name,\n    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers\n    eventLabel: id, // id unique to current page load\n    nonInteraction: true, // avoids affecting bounce rate\n  });\n}\n\nreportWebVitals(sendToAnalytics);\n")),(0,o.kt)("p",{parentName:"blockquote"},"Read more about sending results to Google Analytics ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics"},"here"),".")))}d.isMDXComponent=!0}}]);