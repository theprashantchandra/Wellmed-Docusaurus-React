"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[4370],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"adding-images-fonts-and-files",title:"Adding Images, Fonts, and Files"},l=void 0,c={unversionedId:"adding-images-fonts-and-files",id:"adding-images-fonts-and-files",title:"Adding Images, Fonts, and Files",description:"With webpack, using static assets like images and fonts works similarly to CSS.",source:"@site/../docs/adding-images-fonts-and-files.md",sourceDirName:".",slug:"/adding-images-fonts-and-files",permalink:"/docs/adding-images-fonts-and-files",draft:!1,editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-images-fonts-and-files.md",tags:[],version:"current",frontMatter:{id:"adding-images-fonts-and-files",title:"Adding Images, Fonts, and Files"},sidebar:"docs",previous:{title:"Post-Processing CSS",permalink:"/docs/post-processing-css"},next:{title:"Loading .graphql Files",permalink:"/docs/loading-graphql-files"}},p={},d=[{value:"Adding SVGs",id:"adding-svgs",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With webpack, using static assets like images and fonts works similarly to CSS."),(0,r.kt)("p",null,"You can ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"import")," a file right in a JavaScript module"),". This tells webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," attribute of an image or the ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," of a link to a PDF."),(0,r.kt)("p",null,"To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"data URI")," instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/1153"},"#1153"),". You can control the 10,000 byte threshold by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"IMAGE_INLINE_SIZE_LIMIT")," environment variable as documented in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-configuration"},"advanced configuration"),"."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport logo from './logo.png'; // Tell webpack this JS file uses this image\n\nconsole.log(logo); // /logo.84287d09.png\n\nfunction Header() {\n  // Import result is the URL of your image\n  return <img src={logo} alt=\"Logo\" />;\n}\n\nexport default Header;\n")),(0,r.kt)("p",null,"This ensures that when the project is built, webpack will correctly move the images into the build folder, and provide us with correct paths."),(0,r.kt)("p",null,"This works in CSS too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".Logo {\n  background-image: url(./logo.png);\n}\n")),(0,r.kt)("p",null,"webpack finds all relative module references in CSS (they start with ",(0,r.kt)("inlineCode",{parentName:"p"},"./"),") and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by webpack from content hashes. If the file content changes in the future, webpack will give it a different name in production so you don\u2019t need to worry about long-term caching of assets."),(0,r.kt)("p",null,"Please be advised that this is also a custom feature of webpack."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is not required for React")," but many people enjoy it (and React Native uses a similar mechanism for images)."),(0,r.kt)("p",null,"An alternative way of handling static assets is described in the next section."),(0,r.kt)("h2",{id:"adding-svgs"},"Adding SVGs"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher, and ",(0,r.kt)("inlineCode",{parentName:"p"},"react@16.3.0")," and higher.")),(0,r.kt)("p",null,"One way to add SVG files was described in the section above. You can also import SVGs directly as React components. You can use either of the two approaches. In your code it would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ReactComponent as Logo } from './logo.svg';\n\nfunction App() {\n  return (\n    <div>\n      {/* Logo is an actual React component */}\n      <Logo />\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"This is handy if you don't want to load SVG as a separate file. Don't forget the curly braces in the import! The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactComponent")," import name is significant and tells Create React App that you want a React component that renders an SVG, rather than its filename."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," The imported SVG React Component accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," prop along with other props that a ",(0,r.kt)("inlineCode",{parentName:"p"},"svg")," element accepts. Use this prop to add an accessible title to your svg component.")))}m.isMDXComponent=!0}}]);