(window.webpackJsonp=window.webpackJsonp||[]).push([[59,58,60,61],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),o=a.n(l),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),u=a.n(m),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=l.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,o=r.subDirectory,b=l+"/edit/"+r.branch+o+"/src/pages"+t;return l?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("dI71"),f=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),l=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(d.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},l))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,m=t.titleType,u=s.tabs,O=s.title,N=s.theme,f=s.description,v=s.keywords,y=Object(w.a)().interiorTheme,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=T?n.pathname.replace(T,""):n.pathname,I=u?P.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",C=N||y;return Object(d.b)(c.a,{tabs:u,homepage:!1,theme:C,pageTitle:O,pageDescription:f,pageKeywords:v,titleType:m},Object(d.b)(g,{title:r?Object(d.b)(r,null):O,label:"label",tabs:u,theme:C}),u&&Object(d.b)(k,{title:O,slug:P,tabs:u,currentTab:I}),Object(d.b)(x.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:I}),Object(d.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Un3K:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),i=a("rl46"),b=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},s=c("AnchorLinks"),p=c("AnchorLink"),m={_frontmatter:b},u=o.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(i.a,{name:"Carlos Hirata, Ravi Katikala",lastUpdated:"January 2021",readTimeMinutes:"60",mdxType:"ArticleDetails"}),Object(l.b)("p",null,"We installed IBM Cloud Pak® for Integration 2020.3.1 on Red Hat® Openshift® 4.6."),Object(l.b)(s,{mdxType:"AnchorLinks"},Object(l.b)(p,{mdxType:"AnchorLink"},"Prepare the environment")),Object(l.b)("h2",null,"Prepare the environment"),Object(l.b)("h3",null,"Task 1 - Prepare the environment"),Object(l.b)("h2",null,"Start the Environment"),Object(l.b)("p",null,"As this is a new deployment of the Cloud Pak for Integration, you must execute some steps to prepare the environment. Initial setup steps are only needed for a fresh installation of the platform. They do not need to be repeated."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"All work for this lab is done on the Developer Machine. Open the Developer Machine VM by copying the ",Object(l.b)("strong",{parentName:"p"},"Client VM VNC")," link in a browser window from your email or the Reservation Details as shown below."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_4684368ee9aef605.png",alt:null}),Object(l.b)("p",{parentName:"li"}," Use the password specified in parenthesis to login to VNC."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_dcc3a9fa250b6267.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In your workstation open a browser and enter ",Object(l.b)("a",{parentName:"p",href:"http://cloud.ibm.com/"},"http://cloud.ibm.com")," and enter your ibmid and click continue and password to login IBM Cloud."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_40856922adb9fae5.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter your userid and the password and then enter the ",Object(l.b)("strong",{parentName:"p"},"verify")," code."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_e00b9a6736f7e923.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the IBM Cloud Dashboard. You see all information about the infrastructure. On the ",Object(l.b)("strong",{parentName:"p"},"Resource summary"),". Observe if you have one cluster and click ",Object(l.b)("strong",{parentName:"p"},"Cluster")," link ,"),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_43ece9238189e0a4.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You see the available resources for your cluster. Select Clusters arrow and click your cluster line."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_dd756ffd9ce473bb.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the cluster page, you see the status of your cluster infrastructure, such as worker node, CPU and Memory usage. Click ",Object(l.b)("strong",{parentName:"p"},"OpenShift Web Console"),"."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_d22a349be88c0a4f.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the OpenShift console. Select the following:"),Object(l.b)("p",{parentName:"li"},"a. ",Object(l.b)("strong",{parentName:"p"},"Networking")),Object(l.b)("p",{parentName:"li"},"b. ",Object(l.b)("strong",{parentName:"p"},"Routes")),Object(l.b)("p",{parentName:"li"},"c. Drill down the Project to ",Object(l.b)("strong",{parentName:"p"},"Integration")),Object(l.b)("p",{parentName:"li"},"d. Click the Navigator link."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_ff17543331daf722.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the Cloud Pak Welcome page, click ",Object(l.b)("strong",{parentName:"p"},"Skip Welcome"),"."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_e4c588fe25d64578.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the Cloud Pak Navigator click ",Object(l.b)("strong",{parentName:"p"},"View Instance"),"."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_68464c54bc79da9b.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Make sure that your workstation is configured to access OpenShift using the command line. In your desktop click right mouse and open a terminal window."),Object(l.b)("img",{parentName:"li",src:"images/tutorial_html_cc072d279d113090.png",alt:null})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter ",Object(l.b)("strong",{parentName:"p"},"oc project integration")),Object(l.b)("img",{parentName:"li",src:"images/oc_login.png",alt:null}))),Object(l.b)("h2",null,"Summary"),Object(l.b)("p",null,"You have successfully completed the tutorial. You were able to add a layer of secure, reliable, event-driven, and real-time data, which can be reused across applications in your enterprise."),Object(l.b)("p",null,"To try out more labs, go to Cloud Pak for Integration Demos. For more information about the Cloud Pak for Integration, go to ",Object(l.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/cloud-pak-for-integration"},"https://www.ibm.com/cloud/cloud-pak-for-integration"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-cp-4-i-setup-index-mdx-65013d5c1fe1ad70c736.js.map