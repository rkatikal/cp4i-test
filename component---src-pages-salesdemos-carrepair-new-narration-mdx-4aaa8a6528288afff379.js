(window.webpackJsonp=window.webpackJsonp||[]).push([[36,53,55,56],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),s=a.n(i),r=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),u=a("TSYQ"),d=a.n(u),b=a("QH2O"),h=a.n(b),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:d()(h.a.pageHeader,(t={},t[h.a.withTabs]=i.length,t[h.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),v=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,s=o.subDirectory,l=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},w=a("FCXl"),f=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),i=a===o,l=new RegExp(o+"/?(#.*)?$"),c=n.replace(l,a);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(m.b)(r.Link,{className:j.link,to:""+c},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},i))))))},t}(o.a.Component),x=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,u=void 0===i?{}:i,d=t.relativePagePath,b=t.titleType,h=u.tabs,g=u.title,f=u.theme,j=u.description,k=u.keywords,T=Object(y.a)().interiorTheme,P=Object(r.useStaticQuery)("2456312558").site.pathPrefix,N=P?n.pathname.replace(P,""):n.pathname,I=h?N.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"",C=f||T;return Object(m.b)(c.a,{tabs:h,homepage:!1,theme:C,pageTitle:g,pageDescription:j,pageKeywords:k,titleType:b},Object(m.b)(p,{title:o?Object(m.b)(o,null):g,label:"label",tabs:h,theme:C}),h&&Object(m.b)(O,{title:g,slug:N,tabs:h,currentTab:I}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(v,{relativePagePath:d})),Object(m.b)(w.a,{pageContext:t,location:n,slug:N,tabs:h,currentTab:I}),Object(m.b)(l.a,null))}},"01jO":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return r})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),function(){return Object(i.b)("span",null,"Car Crash Repair - Full Demo Narration")}),l={},c={Title:r,_frontmatter:l},u=s.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Demo Narration and Flow"),Object(i.b)("h4",null,"Demo Start Page"),Object(i.b)("p",null,"Reviewing the demo launch page we see a text summary describing the demo and a discovery map diagram for our reference.  We will only focus on the Validate Invoice Data step in the flow.  OK, let’s launch the demo."),Object(i.b)("h4",null,"Customer invoice submissions"),Object(i.b)("p",null,"We start by becoming the customer.  From the Focus Corp Accounts Payable Invoices portal, we select an invoice ending with R (therefore it should be rejected) and submit for rule validation.  We review five key data fields extracted from the invoice using intelligent document processing and then submit for validation.  This invoice is rejected by the business rules as the total amount must be greater than 0."),Object(i.b)("p",null,"Let’s resubmit that invoice by fixing the total amount to $100 and see what the rules say.  We can also take a look at the fields that the business rules use to make their decision.  And this time, the corrected invoice is accepted and passes rule validation."),Object(i.b)("p",null,"We have various other invoices to try, let’s select another one ending in R that should be rejected, but this time the rules do not find an issue and it is accepted.  This type of result means more rework in downstream business processes as humans are involved in more review and the invoice is routed back and forth to be fixed."),Object(i.b)("h4",null,"Operations week 1"),Object(i.b)("p",null,"Further, we can see from the Operations Specialist’s Accounts Payable dashboard that the average invoice processing time in the upper right is unmanageable at above 100 minutes.  Further, the rules deviated from the final result on more than 60 invoices this week, adding to rework. Rules must change at the speed of the changing business so let’s see how we can improve the business rules."),Object(i.b)("h4",null,"Rules manager"),Object(i.b)("p",null,"As a rules manager, we have access to the invoice validation decision model. The invoice data move from the oval at the bottom through multiple sub-decisions including a text rule to check the total amount is more than $0 which resulted in our first invoice being rejected.  Another decision table looks for combinations of PO numbers and supplier types that do not follow the correct pattern (update!).  This is where the second invoice should have be rejected but the table is missing a new invalid pattern."),Object(i.b)("p",null,"The rules manager, a business user, edits the decision model, adds a new row, easily does a copy/paste of the existing row to get a head start, exactly like a spreadsheet, adjusts the values to match the new Inc. based rejection pattern and the rule is ready.  Tables automatically generate multiple text rules that follow the same pattern so we do not have to write them all from scratch."),Object(i.b)("p",null,"Let’s validate our work in real time by running the same test case as before that should have been rejected.  Great, and with the new rule we get the rejection reason we just created."),Object(i.b)("p",null,"Once they save the new decision model for audit and compliance, the rule manager can run an automated regression test but instead we’ll move on to simulation.  Loading an old simulation report before the rule change, we see rule metrics including the number of invoices approved and rejected as well as trends by date and invoice amount.  No high invoice amounts are being rejected, interesting.  The business knows most of the high value invoices are Inc. vendors so the new rule should catch more of these errors."),Object(i.b)("p",null,"After running a new simulation and comparing side by side, the business can make an informed decision about the impact of new rules before ever deploying to production.  Yes, this looks as expected so we are ready to deploy.  In this case, the business can deploy on their own but this can be configured for only certain safe rules and others must go through IT testing."),Object(i.b)("h4",null,"Customer approved to rejected"),Object(i.b)("p",null,"After the rules manager deploys the new rules, we go back to the invoice submission and choose the same invoice that should now be rejected.  We see the invalid pattern of PO number and supplier type and we select in the demo control panel to upgrade to the latest rule version.  The results, rejected with the reason code deployed by the business rule manager."),Object(i.b)("h4",null,"Operations week 2"),Object(i.b)("p",null,"After these new rules are in place for a week, the Operations Specialist reviews their updated dashboard and sees solid improvement with a reduction of average invoice processing time from less invoice rework and also less deviation between the rules and the final invoice decision.  Our rules are more accurate."),Object(i.b)("h4",null,"Use Case Summary"),Object(i.b)("p",null,"We just used decision automation, a capability within IBM Cloud Pak for Automation, to automate an accounts payable process.  With growing volumes of invoices, business rule automation helps reduce the amount of human intervention for account processing, detect issues earlier, and incorporate changes quickly when needed."),Object(i.b)("br",null))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-narration-mdx-4aaa8a6528288afff379.js.map