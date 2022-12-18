"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,p(p({ref:t},s),{},{components:a})):n.createElement(k,p({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},p=void 0,i={unversionedId:"big-data/hbase/hbase-2.3.6 \u5b89\u88c5",id:"big-data/hbase/hbase-2.3.6 \u5b89\u88c5",title:"hbase-2.3.6 \u5b89\u88c5",description:"\u73af\u5883\u8bf4\u660e",source:"@site/docs/big-data/hbase/hbase-2.3.6 \u5b89\u88c5.md",sourceDirName:"big-data/hbase",slug:"/big-data/hbase/hbase-2.3.6 \u5b89\u88c5",permalink:"/docs/big-data/hbase/hbase-2.3.6 \u5b89\u88c5",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"HBase",permalink:"/docs/big-data/hbase/"},next:{title:"Hive",permalink:"/docs/big-data/hive/"}},o={},u=[{value:"\u73af\u5883\u8bf4\u660e",id:"\u73af\u5883\u8bf4\u660e",level:3},{value:"Preudo-Distributed \u6a21\u5f0f",id:"preudo-distributed-\u6a21\u5f0f",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:4},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:4},{value:"Fully-Distributed \u6a21\u5f0f",id:"fully-distributed-\u6a21\u5f0f",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6-1",level:4},{value:"HA \u6a21\u5f0f",id:"ha-\u6a21\u5f0f",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6-2",level:4}],s={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u73af\u5883\u8bf4\u660e"},"\u73af\u5883\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu-20.04"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jdk-8")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"hbase-2.3.6")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"jdk-11")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-3.3.1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper-3.7")))),(0,r.kt)("h3",{id:"preudo-distributed-\u6a21\u5f0f"},"Preudo-Distributed \u6a21\u5f0f"),(0,r.kt)("h4",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$HBASE_HOME/conf/hbase-env.sh")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=/opt/jdk-8\nexport HBASE_MANAGES_ZK=false\nexport HBASE_DISABLE_HADOOP_CLASSPATH_LOOKUP=true\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$HBASE_HOME/conf/hbase-site.xml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <property>\n        <name>hbase.cluster.distributed</name>\n        <value>true</value>\n    </property>\n    <property>\n        <name>hbase.rootdir</name>\n        <value>hdfs://node101:9000/hbase</value>\n    </property>\n    <property>\n        <name>hbase.zookeeper.quorum</name>\n        <value>win10:2181,win10:2182,win10:2183</value>\n    </property>\n</configuration>\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6574\u5408 HDFS HA \u6a21\u5f0f\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62f7\u8d1d HDFS \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s $HADOOP_HOME/etc/hadoop/core-site.xml $HBASE_HOME/conf/core-site.xml\nln -s $HADOOP_HOME/etc/hadoop/hdfs-ste.xml $HBASE_HOME/conf/hdfs-site.xml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"hbase-site.xml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"hbase.rootdir = hdfs://hdfs-cluster/hbase\n")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$HBASE_HOME/conf/regionservers")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node101\n")))),(0,r.kt)("h4",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HBASE_HOME\nbin/start-hbase.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WEB \u754c\u9762 ",(0,r.kt)("a",{parentName:"p",href:"http://node101:16010"},"http://node101:16010"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"http://node101:16010"},"http://node101:16030"))),(0,r.kt)("h4",{id:"\u8fde\u63a5"},"\u8fde\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HBASE_HOME\nbin/hbase shell\n")),(0,r.kt)("h3",{id:"fully-distributed-\u6a21\u5f0f"},"Fully-Distributed \u6a21\u5f0f"),(0,r.kt)("h4",{id:"\u914d\u7f6e\u6587\u4ef6-1"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$HBASE_HOME/conf/regionservers")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node101\nnode102\nnode103\n")))),(0,r.kt)("h3",{id:"ha-\u6a21\u5f0f"},"HA \u6a21\u5f0f"),(0,r.kt)("h4",{id:"\u914d\u7f6e\u6587\u4ef6-2"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$HBASE_HOME/conf/backup-masters")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node102\nnode103\n")))))}d.isMDXComponent=!0}}]);