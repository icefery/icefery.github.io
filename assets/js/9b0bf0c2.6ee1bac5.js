"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2017],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(h,i(i({ref:r},s),{},{components:t})):n.createElement(h,i({ref:r},s))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7998:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={},i="Harbor",c={unversionedId:"container-app/harbor/index",id:"container-app/harbor/index",title:"Harbor",description:"\u5b89\u88c5",source:"@site/docs/container-app/harbor/index.md",sourceDirName:"container-app/harbor",slug:"/container-app/harbor/",permalink:"/docs/container-app/harbor/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"GitLab",permalink:"/docs/container-app/gitlab/"},next:{title:"Jenkins",permalink:"/docs/container-app/jenkins/"}},l={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u955c\u50cf\u4ed3\u5e93",id:"\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u914d\u7f6e Containerd \u955c\u50cf\u4ed3\u5e93",id:"\u914d\u7f6e-containerd-\u955c\u50cf\u4ed3\u5e93",level:4},{value:"\u914d\u7f6e K3S \u5185\u7f6e Containerd \u955c\u50cf\u4ed3\u5e93",id:"\u914d\u7f6e-k3s-\u5185\u7f6e-containerd-\u955c\u50cf\u4ed3\u5e93",level:4},{value:"\u63a8\u9001\u955c\u50cf",id:"\u63a8\u9001\u955c\u50cf",level:4},{value:"Chart \u4ed3\u5e93",id:"chart-\u4ed3\u5e93",level:2},{value:"\u62c9\u53d6",id:"\u62c9\u53d6",level:4},{value:"\u63a8\u9001",id:"\u63a8\u9001",level:4},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"Docker \u65e0\u6cd5 <code>push</code> \u5230 HTTP \u955c\u50cf\u4ed3\u5e93",id:"docker-\u65e0\u6cd5-push-\u5230-http-\u955c\u50cf\u4ed3\u5e93",level:4}],s={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"harbor"},"Harbor"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\n\nhelm repo update\n\nhelm upgrade harbor bitnami/harbor --install --namespace harbor --create-namespace --values values.yaml --version 15.1.0\n")),(0,a.kt)("h2",{id:"\u955c\u50cf\u4ed3\u5e93"},"\u955c\u50cf\u4ed3\u5e93"),(0,a.kt)("h4",{id:"\u914d\u7f6e-containerd-\u955c\u50cf\u4ed3\u5e93"},"\u914d\u7f6e Containerd \u955c\u50cf\u4ed3\u5e93"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/cri/registry.md"},"https://github.com/containerd/containerd/blob/main/docs/cri/registry.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/hosts.md"},"https://github.com/containerd/containerd/blob/main/docs/hosts.md")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/etc/containerd/certs.d/docker.io/hosts.toml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'server = "https://registry-1.docker.io"\n[host."https://uwk49ut2.mirror.aliyuncs.com"]\n  capabilities = ["pull"]\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/etc/containerd/certs.d/core.harbor.dev.icefery.xyz/hosts.toml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'server = "http://core.harbor.dev.icefery.xyz"\n[host."http://core.harbor.dev.icefery.xyz"]\n  skip_verify = true\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config.toml")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Although we have deprecated the old CRI config pattern for specifying registry.mirrors and registry.configs you can\nstill specify your credentials\nvia ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/containerd/blob/main/docs/cri/registry.md#configure-registry-credentials"},"CRI config"),"\n.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'version = 2\n\n[plugins."io.containerd.grpc.v1.cri".registry]\n  config_path = "/etc/containerd/certs.d"\n[plugins."io.containerd.grpc.v1.cri".registry.mirrors]\n[plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]\n  endpoint = ["https://uwk49ut2.mirror.aliyuncs.com"]\n[plugins."io.containerd.grpc.v1.cri".registry.mirrors."core.harbor.dev.icefery.xyz"]\n  endpoint = ["http://core.harbor.dev.icefery.xyz"]\n[plugins."io.containerd.grpc.v1.cri".registry.configs."core.harbor.dev.icefery.xyz".tls]\n  insecure_skip_verify = true\n[plugins."io.containerd.grpc.v1.cri".registry.configs."core.harbor.dev.icefery.xyz".auth]\n  username = "admin"\n  password = "admin"\n')))),(0,a.kt)("h4",{id:"\u914d\u7f6e-k3s-\u5185\u7f6e-containerd-\u955c\u50cf\u4ed3\u5e93"},"\u914d\u7f6e K3S \u5185\u7f6e Containerd \u955c\u50cf\u4ed3\u5e93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.rancher.cn/docs/k3s/installation/private-registry/_index"},"https://docs.rancher.cn/docs/k3s/installation/private-registry/_index"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/registries.yaml"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"mirrors:\n  docker.io:\n    endpoint:\n      - 'https://uwk49ut2.mirror.aliyuncs.com'\n  'core.harbor.dev.icefery.xyz':\n    endpoint:\n      - 'http://core.harbor.dev.icefery.xyz'\nconfigs:\n  'core.harbor.dev.icefery.xyz':\n    tls:\n      insecure_skip_verify: true\n    auth:\n      username: admin\n      password: admin\n")))),(0,a.kt)("h4",{id:"\u63a8\u9001\u955c\u50cf"},"\u63a8\u9001\u955c\u50cf"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"nerdctl \u5e76\u4e0d\u8d70 CRI \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.insecure_skip_verify"),"\uff0c\u9700\u8981\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"--insecure-registry")," \u9009\u9879\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker login http://core.harbor.dev.icefery.xyz --username=admin --password=admin\n\n# nerdctl login http://core.harbor.dev.icefery.xyz --username=admin --password=admin --insecure-registry\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker push core.harbor.dev.icefery.xyz/library/my-app:0.0.1\n\n# nerdctl push core.harbor.dev.icefery.xyz/library/my-app:0.0.1 --insecure-registry\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull core.harbor.dev.icefery.xyz/library/my-app:0.0.1\n\n# nerdctl pull core.harbor.dev.icefery.xyz/library/my-app:0.0.1 --insecure-registry\n")),(0,a.kt)("h2",{id:"chart-\u4ed3\u5e93"},"Chart \u4ed3\u5e93"),(0,a.kt)("h4",{id:"\u62c9\u53d6"},"\u62c9\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0 Harbor \u4f5c\u4e3a\u7edf\u4e00\u7684\u5355\u4e00\u7d22\u5f15\u5165\u53e3\u70b9\n# helm repo add chartmuseum-global http://core.harbor.dev.icefery.xyz/chartrepo --username=admin --password=admin\n\n# \u5c06 Harbor \u9879\u76ee\u6dfb\u52a0\u4e3a\u5355\u72ec\u7684\u7d22\u5f15\u5165\u53e3\u70b9\nhelm repo add chartmuseum-library http://core.harbor.dev.icefery.xyz/chartrepo/library --username=admin --password=admin\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo my-app\n")),(0,a.kt)("h4",{id:"\u63a8\u9001"},"\u63a8\u9001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm plugin install https://github.com/chartmuseum/helm-push\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# helm cm-push chart/ http://core.harbor.dev.icefery.xyz/chartrepo/library --username=admin --password=admin\n\nhelm cm-push chart/ chartmuseum-library\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76f4\u63a5\u63a8\u9001\u5230\u5df2\u6dfb\u52a0\u7684\u4ed3\u5e93\u4e2d\u4e0d\u9700\u8981\u518d\u9a8c\u8bc1\u7528\u6237\u548c\u5bc6\u7801\uff0c\u4f46\u662f\u4f7f\u7528 Harbor \u4f5c\u4e3a\u7edf\u4e00\u7684\u5355\u4e00\u7d22\u5f15\u5165\u53e3\u70b9\u65f6\u4f1a\u9ed8\u8ba4\u63a8\u9001\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"library")," \u9879\u76ee\u3002")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h4",{id:"docker-\u65e0\u6cd5-push-\u5230-http-\u955c\u50cf\u4ed3\u5e93"},"Docker \u65e0\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"h4"},"push")," \u5230 HTTP \u955c\u50cf\u4ed3\u5e93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/goharbor/harbor/issues/12248"},"docker pull push invalid character 'p' after top-level value: \"404 page not found\\n\" #12248"))))}d.isMDXComponent=!0}}]);