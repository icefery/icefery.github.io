"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1948],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),i=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),y=a,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return r?t.createElement(d,p(p({ref:n},u),{},{components:r})):t.createElement(d,p({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3778:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=r(7462),a=(r(7294),r(3905));const o={},p="Nexus",l={unversionedId:"container-app/nexus/index",id:"container-app/nexus/index",title:"Nexus",description:"Helm \u5b89\u88c5 Nexus",source:"@site/docs/container-app/nexus/index.md",sourceDirName:"container-app/nexus",slug:"/container-app/nexus/",permalink:"/docs/container-app/nexus/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MySQL",permalink:"/docs/container-app/mysql/"},next:{title:"Nginx Ingress Controller",permalink:"/docs/container-app/nginx-ingress-controller/"}},s={},i=[{value:"Helm \u5b89\u88c5 Nexus",id:"helm-\u5b89\u88c5-nexus",level:2},{value:"\u4ed3\u5e93\u914d\u7f6e",id:"\u4ed3\u5e93\u914d\u7f6e",level:2},{value:"Maven",id:"maven",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"Nexus \u5e76\u4e0d\u80fd\u8bc6\u522b Ingress Controller \u66b4\u9732\u7684\u975e 80 \u548c 443 \u4ee5\u5916\u7684\u7aef\u53e3",id:"nexus-\u5e76\u4e0d\u80fd\u8bc6\u522b-ingress-controller-\u66b4\u9732\u7684\u975e-80-\u548c-443-\u4ee5\u5916\u7684\u7aef\u53e3",level:4}],u={toc:i};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nexus"},"Nexus"),(0,a.kt)("h2",{id:"helm-\u5b89\u88c5-nexus"},"Helm \u5b89\u88c5 Nexus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add sonatype https://sonatype.github.io/helm3-charts/\n\nhelm repo update\n\nhelm upgrade nexus sonatype/nexus-repository-manager --install --namespace nexus --create-namespace --values values.yaml --version 41.1.2\n\n# \u67e5\u770b\u9ed8\u8ba4\u5bc6\u7801\nkubectl exec -n nexus pods/<POD> -- cat /nexus-data/admin.password\n")),(0,a.kt)("h2",{id:"\u4ed3\u5e93\u914d\u7f6e"},"\u4ed3\u5e93\u914d\u7f6e"),(0,a.kt)("h4",{id:"maven"},"Maven"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- { type: proxy,  name: maven-proxy-aliyun-public,        url: https://maven.aliyun.com/repository/public }\n- { type: proxy,  name: maven-proxy-aliyun-google,        url: https://maven.aliyun.com/repository/google }\n- { type: proxy,  name: maven-proxy-aliyun-spring,        url: https://maven.aliyun.com/repository/spring }\n- { type: proxy,  name: maven-proxy-aliyun-spring-plugin, url: https://maven.aliyun.com/repository/spring-plugin }\n- { type: proxy,  name: maven-proxy-aliyun-gradle-plugin, url: https://maven.aliyun.com/repository/gradle-plugin }\n- { type: proxy,  name: maven-proxy-repo,                 url: https://repo.maven.apache.org/maven2 }\n- { type: hosted, name: maven-custom }\n- { type: group,  name: maven-public }\n")),(0,a.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("h4",{id:"nexus-\u5e76\u4e0d\u80fd\u8bc6\u522b-ingress-controller-\u66b4\u9732\u7684\u975e-80-\u548c-443-\u4ee5\u5916\u7684\u7aef\u53e3"},"Nexus \u5e76\u4e0d\u80fd\u8bc6\u522b Ingress Controller \u66b4\u9732\u7684\u975e 80 \u548c 443 \u4ee5\u5916\u7684\u7aef\u53e3"))}c.isMDXComponent=!0}}]);