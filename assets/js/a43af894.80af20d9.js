"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,l(l({ref:t},i),{},{components:r})):n.createElement(g,l({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="PostgreSQL",s={unversionedId:"container-app/postgresql/index",id:"container-app/postgresql/index",title:"PostgreSQL",description:"Docker \u5b89\u88c5 PostgreSQL",source:"@site/docs/container-app/postgresql/index.md",sourceDirName:"container-app/postgresql",slug:"/container-app/postgresql/",permalink:"/docs/container-app/postgresql/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Oracle",permalink:"/docs/container-app/oracle/"},next:{title:"Redis",permalink:"/docs/container-app/redis/"}},p={},c=[{value:"Docker \u5b89\u88c5 PostgreSQL",id:"docker-\u5b89\u88c5-postgresql",level:2},{value:"\u521b\u5efa\u7528\u6237\u548c\u6570\u636e\u5e93",id:"\u521b\u5efa\u7528\u6237\u548c\u6570\u636e\u5e93",level:4},{value:"Helm \u5b89\u88c5 PostgreSQL",id:"helm-\u5b89\u88c5-postgresql",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],i={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,a.kt)("h2",{id:"docker-\u5b89\u88c5-postgresql"},"Docker \u5b89\u88c5 PostgreSQL"),(0,a.kt)("h4",{id:"\u521b\u5efa\u7528\u6237\u548c\u6570\u636e\u5e93"},"\u521b\u5efa\u7528\u6237\u548c\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"psql -U postgres\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE demo WITH LOGIN PASSWORD 'demo';\n\nCREATE DATABASE demo OWNER demo;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/host all all all md5/host all demo all md5/' /var/lib/postgresql/data/pg_hba.conf\n")),(0,a.kt)("h2",{id:"helm-\u5b89\u88c5-postgresql"},"Helm \u5b89\u88c5 PostgreSQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\n\nhelm repo update\n\nhelm upgrade postgresql bitnami/postgresql --install --namespace postgresql --create-namespace --values values.yaml --version 11.7.6\n")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Desktop Desktop for Windows \u4e0d\u80fd\u6620\u5c04\u6570\u636e\u5377\u3002")))}u.isMDXComponent=!0}}]);