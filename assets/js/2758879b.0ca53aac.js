"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[105],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),m=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(t),b=o,f=l["".concat(s,".").concat(b)]||l[b]||u[b]||a;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2360:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=t(7462),o=(t(7294),t(3905));const a={},c=void 0,i={unversionedId:"os/mac/homebrew",id:"os/mac/homebrew",title:"homebrew",description:"\u6536\u85cf",source:"@site/docs/os/mac/homebrew.md",sourceDirName:"os/mac",slug:"/os/mac/homebrew",permalink:"/docs/os/mac/homebrew",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Mac",permalink:"/docs/os/mac/"},next:{title:"\u5728 Mac \u4e0a\u5378\u8f7d Python",permalink:"/docs/os/mac/uninstall-python-on-mac"}},s={},m=[{value:"\u6536\u85cf",id:"\u6536\u85cf",level:2},{value:"Homebrew\uff1aMac os \u4f7f\u7528 brew \u5de5\u5177\u65f6\u62a5\u9519 No remote &#39;origin&#39;",id:"homebrewmac-os-\u4f7f\u7528-brew-\u5de5\u5177\u65f6\u62a5\u9519-no-remote-origin",level:4}],p={toc:m};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6536\u85cf"},"\u6536\u85cf"),(0,o.kt)("h4",{id:"homebrewmac-os-\u4f7f\u7528-brew-\u5de5\u5177\u65f6\u62a5\u9519-no-remote-origin"},(0,o.kt)("a",{parentName:"h4",href:"https://blog.csdn.net/Jo_Francis/article/details/124746363"},"Homebrew\uff1aMac os \u4f7f\u7528 brew \u5de5\u5177\u65f6\u62a5\u9519 No remote 'origin'")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'brew update\n\nbrew doctor\n\nrm -rf "/opt/homebrew/Library/Taps/homebrew/homebrew-cask"\nbrew tap homebrew/cask\n\nrm -rf "/opt/homebrew/Library/Taps/homebrew/homebrew-core"\nbrew tap homebrew/core\n\nrm -rf "/opt/homebrew/Library/Taps/homebrew/homebrew-services"\nbrew tap homebrew/services\n')))}l.isMDXComponent=!0}}]);