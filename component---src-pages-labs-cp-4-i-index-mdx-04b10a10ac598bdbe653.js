(window.webpackJsonp=window.webpackJsonp||[]).push([[37,41,42,69,70,72,73,74],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),i=a.n(b),s=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),u=a.n(l),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},x=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,i=r.subDirectory,c=b+"/edit/"+r.branch+i+"/src/pages"+t;return b?Object(m.b)("div",{className:"bx--row "+x.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:x.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),P=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),o=n.replace(c,a);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(m.b)(s.Link,{className:f.link,to:""+o},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},b))))))},t}(r.a.Component),T=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,l=void 0===b?{}:b,u=t.relativePagePath,d=t.titleType,p=l.tabs,x=l.title,h=l.theme,f=l.description,k=l.keywords,w=Object(v.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,I=p?y.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",C=h||w;return Object(m.b)(o.a,{tabs:p,homepage:!1,theme:C,pageTitle:x,pageDescription:f,pageKeywords:k,titleType:d},Object(m.b)(g,{title:r?Object(m.b)(r,null):x,label:"label",tabs:p,theme:C}),p&&Object(m.b)(P,{title:x,slug:y,tabs:p,currentTab:I}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:u})),Object(m.b)(O.a,{pageContext:t,location:n,slug:y,tabs:p,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WPod:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),{}),c={_frontmatter:s},o=i.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"IBM Cloud Pak for Integration is a hybrid integration solution that provides an automated and closed-loop lifecycle across multiple styles of enterprise integration."),Object(b.b)("p",null,"Use the Labs below to demonstrate the Cloud Pak for Integration capabilities."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"CP4I Labs on ROKS")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/cp4i-demohub/tutorials/BuildDeployAPIs"}),"Lab 1 : Build and Deploy APIs - APIC/ACE/MQ")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/cp4i-demohub/tutorials/AccessBackendSystems"}),"Lab 2 : Access backend systems using APIs and Messaging - ACE/MQ")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/cp4i-demohub/tutorials/CreateEngagingExperiences"}),"Lab 3 : Augment existing business functions using Kafka - ACE/ES")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/cp4i-demohub/tutorials/ManageGraphQL"}),"Lab 4 : GraphQL API Lifecycle Management")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-cp-4-i-index-mdx-04b10a10ac598bdbe653.js.map