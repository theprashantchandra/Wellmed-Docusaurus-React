"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[7048],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7997:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"advanced-configuration",title:"Advanced Configuration"},d=void 0,s={unversionedId:"advanced-configuration",id:"advanced-configuration",title:"Advanced Configuration",description:"You can adjust various development and production settings by setting environment variables in your shell or with .env.",source:"@site/../docs/advanced-configuration.md",sourceDirName:".",slug:"/advanced-configuration",permalink:"/docs/advanced-configuration",draft:!1,editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/advanced-configuration.md",tags:[],version:"current",frontMatter:{id:"advanced-configuration",title:"Advanced Configuration"},sidebar:"docs",previous:{title:"Pre-Rendering Static HTML",permalink:"/docs/pre-rendering-into-static-html-files"},next:{title:"Alternatives to Ejecting",permalink:"/docs/alternatives-to-ejecting"}},p={},c=[],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can adjust various development and production settings by setting environment variables in your shell or with ",(0,o.kt)("a",{parentName:"p",href:"/docs/adding-custom-environment-variables#adding-development-environment-variables-in-env"},".env"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You do not need to declare ",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_APP_")," before the below variables as you would with custom environment variables.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Development"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Production"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Usage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"BROWSER"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/sindresorhus/open#app"},"browser")," to override this behavior, or set it to ",(0,o.kt)("inlineCode",{parentName:"td"},"none")," to disable it completely. If you need to customize the way the browser is launched, you can specify a node script instead. Any arguments passed to ",(0,o.kt)("inlineCode",{parentName:"td"},"npm start")," will also be passed to this script, and the url where your app is served will be the last argument. Your script's file name must have the ",(0,o.kt)("inlineCode",{parentName:"td"},".js")," extension.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"BROWSER_ARGS"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When the ",(0,o.kt)("inlineCode",{parentName:"td"},"BROWSER")," environment variable is specified, any arguments that you set to this environment variable will be passed to the browser instance. Multiple arguments are supported as a space separated list. By default, no arguments are passed through to browsers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"HOST"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"By default, the development web server binds to all hostnames on the device (",(0,o.kt)("inlineCode",{parentName:"td"},"localhost"),", LAN network address, etc.). You may use this variable to specify a different host.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PORT"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", Create React App will run the development server in ",(0,o.kt)("inlineCode",{parentName:"td"},"https")," mode.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"WDS_SOCKET_HOST"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set, Create React App will run the development server with a custom websocket hostname for hot module reloading. Normally, ",(0,o.kt)("inlineCode",{parentName:"td"},"webpack-dev-server")," defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"window.location.hostname")," for the SockJS hostname. You may use this variable to start local development on more than one Create React App project at a time. See ",(0,o.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/dev-server/#devserversockhost"},"webpack-dev-server documentation")," for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"WDS_SOCKET_PATH"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set, Create React App will run the development server with a custom websocket path for hot module reloading. Normally, ",(0,o.kt)("inlineCode",{parentName:"td"},"webpack-dev-server")," defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"/ws")," for the SockJS pathname. You may use this variable to start local development on more than one Create React App project at a time. See ",(0,o.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/dev-server/#devserversockpath"},"webpack-dev-server documentation")," for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"WDS_SOCKET_PORT"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set, Create React App will run the development server with a custom websocket port for hot module reloading. Normally, ",(0,o.kt)("inlineCode",{parentName:"td"},"webpack-dev-server")," defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"window.location.port")," for the SockJS port. You may use this variable to start local development on more than one Create React App project at a time. See ",(0,o.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/dev-server/#devserversockport"},"webpack-dev-server documentation")," for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PUBLIC_URL"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in ",(0,o.kt)("a",{parentName:"td",href:"deployment#building-for-relative-paths"},(0,o.kt)("inlineCode",{parentName:"a"},"package.json")," (",(0,o.kt)("inlineCode",{parentName:"a"},"homepage"),")"),". Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"BUILD_PATH"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"By default, Create React App will output compiled assets to a ",(0,o.kt)("inlineCode",{parentName:"td"},"/build")," directory adjacent to your ",(0,o.kt)("inlineCode",{parentName:"td"},"/src"),". You may use this variable to specify a new path for Create React App to output assets. BUILD_PATH should be specified as a path relative to the root of your project.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"CI"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"REACT_EDITOR"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When an app crashes in development, you will see an error overlay with clickable stack trace. When you click on it, Create React App will try to determine the editor you are using based on currently running processes, and open the relevant source file. You can ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/facebook/create-react-app/issues/2636"},"send a pull request to detect your editor of choice"),". Setting this environment variable overrides the automatic detection. If you do it, make sure your systems ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/PATH_(variable)"},"PATH")," environment variable points to your editor\u2019s bin folder. You can also set it to ",(0,o.kt)("inlineCode",{parentName:"td"},"none")," to disable it completely.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"CHOKIDAR_USEPOLLING"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the watcher runs in polling mode, as necessary inside a VM. Use this option if ",(0,o.kt)("inlineCode",{parentName:"td"},"npm start")," isn't detecting changes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GENERATE_SOURCEMAP"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),", source maps are not generated for a production build. This solves out of memory (OOM) issues on some smaller machines.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"INLINE_RUNTIME_CHUNK"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"By default, Create React App will embed the runtime script into ",(0,o.kt)("inlineCode",{parentName:"td"},"index.html")," during the production build. When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),", the script will not be embedded and will be imported as usual. This is normally required when dealing with CSP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"IMAGE_INLINE_SIZE_LIMIT"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"By default, images smaller than 10,000 bytes are encoded as a data URI in base64 and inlined in the CSS or JS build artifact. Set this to control the size limit in bytes. Setting it to ",(0,o.kt)("inlineCode",{parentName:"td"},"0")," will disable the inlining of images.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"FAST_REFRESH"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),", disables experimental support for Fast Refresh to allow you to tweak your components in real time without reloading the page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TSC_COMPILE_ON_ERROR"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", you can run and properly build TypeScript projects even if there are TypeScript type check errors. These errors are printed as warnings in the terminal and/or browser console.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ESLINT_NO_DEV_ERRORS"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab Ignored"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", ESLint errors are converted to warnings during development. As a result, ESLint output will no longer appear in the error overlay.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"DISABLE_ESLINT_PLUGIN"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/webpack-contrib/eslint-webpack-plugin"},"eslint-webpack-plugin")," will be completely disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"DISABLE_NEW_JSX_TRANSFORM"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705 Used"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", disables the ",(0,o.kt)("a",{parentName:"td",href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"new JSX transform")," introduced in React 17 and backported to React 16.14.0, 15.7.0, and 0.14.10. New projects will use a version of React that supports this by default but you may need to disable it in existing projects if you can't upgrade React.")))))}u.isMDXComponent=!0}}]);