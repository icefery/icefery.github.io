"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"os/linux/curl \u6267\u884c\u811a\u672c\u65f6\u4f20\u9012\u73af\u5883\u53d8\u91cf\u548c\u53c2\u6570",id:"os/linux/curl \u6267\u884c\u811a\u672c\u65f6\u4f20\u9012\u73af\u5883\u53d8\u91cf\u548c\u53c2\u6570",title:"curl \u6267\u884c\u811a\u672c\u65f6\u4f20\u9012\u73af\u5883\u53d8\u91cf\u548c\u53c2\u6570",description:"\u811a\u672c\u6587\u4ef6",source:"@site/docs/os/linux/curl \u6267\u884c\u811a\u672c\u65f6\u4f20\u9012\u73af\u5883\u53d8\u91cf\u548c\u53c2\u6570.md",sourceDirName:"os/linux",slug:"/os/linux/curl \u6267\u884c\u811a\u672c\u65f6\u4f20\u9012\u73af\u5883\u53d8\u91cf\u548c\u53c2\u6570",permalink:"/docs/os/linux/curl \u6267\u884c\u811a\u672c\u65f6\u4f20\u9012\u73af\u5883\u53d8\u91cf\u548c\u53c2\u6570",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"\u6e05\u7406\u65e0\u6548\u8f6f\u94fe\u63a5",permalink:"/docs/os/linux/clean-dangling-symbolic-links"},next:{title:"Debian",permalink:"/docs/os/linux/debian/"}},p={},c=[{value:"\u811a\u672c\u6587\u4ef6",id:"\u811a\u672c\u6587\u4ef6",level:4},{value:"\u7ba1\u9053",id:"\u7ba1\u9053",level:4},{value:"\u8fdb\u7a0b\u66ff\u6362",id:"\u8fdb\u7a0b\u66ff\u6362",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u811a\u672c\u6587\u4ef6"},"\u811a\u672c\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vim temp.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "A  = ${A}"\necho "\\$0 = $0"\necho "P1 = $1"\necho "P2 = $2"\necho "P3 = $3"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nohup python3 -m http.server &> /dev/null &\n")),(0,a.kt)("h4",{id:"\u7ba1\u9053"},"\u7ba1\u9053"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"}),(0,a.kt)("th",{parentName:"tr",align:"left"}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"-f"),",",(0,a.kt)("inlineCode",{parentName:"td"},"--fail")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u5728\u670d\u52a1\u5668\u9519\u8bef\u65f6\uff0c\u963b\u6b62\u4e00\u4e2a\u8fd4\u56de\u7684\u8868\u793a\u9519\u8bef\u539f\u56e0\u7684 html \u9875\u9762\uff0c\u800c\u7531 curl \u547d\u4ee4\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u7801 22 \u6765\u63d0\u793a\u9519\u8bef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"-s"),",",(0,a.kt)("inlineCode",{parentName:"td"},"--slient")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"-s")," \u53c2\u6570\u5c06\u4e0d\u8f93\u51fa\u9519\u8bef\u548c\u8fdb\u5ea6\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"-S"),",",(0,a.kt)("inlineCode",{parentName:"td"},"--show-error")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"-S")," \u53c2\u6570\u6307\u5b9a\u53ea\u8f93\u51fa\u9519\u8bef\u4fe1\u606f\uff0c\u901a\u5e38\u4e0e ",(0,a.kt)("inlineCode",{parentName:"td"},"-s")," \u4e00\u8d77\u4f7f\u7528\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"-L"),",",(0,a.kt)("inlineCode",{parentName:"td"},"--location")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"-L")," \u53c2\u6570\u4f1a\u8ba9 HTTP \u8bf7\u6c42\u8ddf\u968f\u670d\u52a1\u5668\u7684\u91cd\u5b9a\u5411\u3002curl \u9ed8\u8ba4\u4e0d\u8ddf\u968f\u91cd\u5b9a\u5411")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@dev:~]# curl -fsSL http://localhost:8000/temp.sh | A=1 bash -s -- -p1 --p2 p3\nA  = 1\n$0 = bash\nP1 = -p1\nP2 = --p2\nP3 = p3\n")),(0,a.kt)("h4",{id:"\u8fdb\u7a0b\u66ff\u6362"},"\u8fdb\u7a0b\u66ff\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@dev:~]# A=1 bash <(curl -fsSL http://localhost:8000/temp.sh) -p1 --p2 p3\nA  = 1\n$0 = /dev/fd/61\nP1 = -p1\nP2 = --p2\nP3 = p3\n")))}u.isMDXComponent=!0}}]);