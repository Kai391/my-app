(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(16),l=a.n(r),s=(a(22),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))}),o=a(10),i=a(9),b=a(0);function m(e){var t=function(e){document.title="Text Utils ".concat("Text Utils"===e.target.innerHTML?"":" - "+e.target.innerHTML)};return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode.navbar.nav," bg-").concat(e.mode.navbar.nav),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/my-app/",onClick:t,children:e.title}),Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/my-app/about",onClick:t,children:"About"})})})]}),Object(b.jsxs)("div",{className:"form-check form-switch",children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.onToggle}),Object(b.jsxs)("label",{className:"form-check-label text-".concat(e.mode.navbar.navbtnStyle),htmlFor:"flexSwitchCheckDefault",children:[e.mode.navbar.navbtn," Mode"]})]})]})})}function d(e){var t=function(e){document.getElementById("value").innerHTML=e},a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],l=c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"mb-3 my-3",children:[Object(b.jsx)("h3",{className:"text-".concat(e.style.textBlock.hColor),children:"Enter the Text here for analysis.."}),Object(b.jsx)("textarea",{className:"form-control",placeholder:"Enter the text...",onChange:function(e){l(e.target.value)},id:"exampleFormControlTextarea1",rows:"10"}),Object(b.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=r.toUpperCase();t(e)},children:"All Upper"}),Object(b.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=r.toLowerCase();t(e)},children:"All Lower"}),Object(b.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){for(var e=r.split(" "),a=0;a<e.length;a++)e[a]=e[a].replace(e[a].charAt(0),e[a].charAt(0).toUpperCase());t(e.join(" "))},children:"Title Case"}),Object(b.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){for(var e=r.toLowerCase(),a=e.split(". "),n=0;n<a.length;n++)a[n]=a[n].replace(a[n].charAt(0),a[n].charAt(0).toUpperCase());e=(e=a.join(". ")).trim(),t(e)},children:"Sentence Case"}),Object(b.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=document.getElementById("value");navigator.clipboard.writeText(t.innerHTML),e.alert("Copied to clipboard","success")},children:"Copy"}),Object(b.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){document.getElementById("exampleFormControlTextarea1").value="",document.getElementById("value").innerHTML=null,l("")},children:"Clear"})]}),Object(b.jsx)("h2",{className:"text-".concat(e.style.textBlock.hColor),children:"Output"}),Object(b.jsxs)("div",{className:"container border bg-dark text-light",children:[0===r.trim().length?0:r.trim().split(" ").length," words ",r.length," characters",Object(b.jsx)("pre",{id:"value"})]})]})}function j(e){return e.alert&&Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show container my-3"),role:"alert",children:[Object(b.jsx)("strong",{children:e.alert.typ})," ",e.alert.msg]})})}function h(e){return Object(b.jsxs)("div",{className:"container my-4 text-".concat(e.mode.navbar.navbtnStyle," text-center"),children:[Object(b.jsx)("h2",{children:"Hello, I am Krishna nickname kai."}),Object(b.jsx)("h2",{children:"I was build this application on 22,August 2021."}),Object(b.jsx)("h2",{children:"Currently I am pursing by B.Tech degree from university ccsu, meerut."})]})}m.defaultProps={title:"Set here"};var u=a(2);var x=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],r=function(e,t){c({msg:e,typ:t}),setTimeout((function(){c(null)}),1500)},l=Object(n.useState)({navbar:{nav:"light",navStyle:"grey",navbtn:"Dark"},textBlock:{hColor:"Dark"}}),s=Object(o.a)(l,2),x=s[0],v=s[1];return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(m,{title:"Text Utils",mode:x,onToggle:function(){"light"===x.navbar.nav?(v({navbar:{nav:"dark",navbtn:"Light",navbtnStyle:"light"},textBlock:{hColor:"light"}}),document.body.style.backgroundColor="#111869",r("Dark Mode Enable","success")):(v({navbar:{nav:"light",navStyle:"grey",navbtn:"Dark",navbtnStyle:""},textBlock:{hColor:"Dark"}}),document.body.style.backgroundColor="wheat",r("Light Mode Enable","success"))}}),Object(b.jsx)(j,{alert:a}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/my-app/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(d,{style:x,alert:r})})}),Object(b.jsx)(u.a,{exact:!0,path:"/my-app/about",children:Object(b.jsx)(h,{mode:x})})]})]})};l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),s()}},[[29,1,2]]]);
//# sourceMappingURL=main.a8af8ccf.chunk.js.map